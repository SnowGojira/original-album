/**
 * Created by hakuh on 2018/4/27.
 */
//add the swiper's logic

$(document).ready(function() {
    // --- VARIABLES ---
    var swiperSide = new Swiper('.product-photos-side .swiper-container', {
        direction: 'horizontal',
        centeredSlides: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
    })
    var swiperProduct = new Swiper('.product-photo-main .swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // keyboardControl: true,
    })
    var galleryTop = new Swiper('.product-gallery-full-screen .gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        spaceBetween: 10,
        keyboardControl: false,
        noSwiping: true,
        zoom: false
    })
    swiperSide.params.control = swiperProduct || galleryTop;
    swiperProduct.params.control = swiperSide || galleryTop;
    galleryTop.params.control = swiperProduct || swiperSide;

    var galleryOpen = false,
        fullscreen = false,
        fsTrigger = $('.gallery-nav .fullscreen')[0],
        fsGallery = $('.product-gallery-full-screen')[0],
        fsFunction = fsGallery.requestFullscreen;
    // browser support check
    if (!fsFunction) {
        ['webkitRequestFullScreen',
            'mozRequestFullscreen',
            'msRequestFullScreen'
        ].forEach(function(req) {
            fsFunction = fsFunction || fsGallery[req];
        });
    }

    // --- FUNCTIONS ---
    function openImageGallery(slide) {
        galleryOpen = true;
        var galleryX = $('.product-photo-main').offset().left,
            galleryY = $('.product-photo-main').offset().top,
            galleryHeight = $('.product-photo-main').height(),
            galleryWidth = $('.product-photo-main').width(),
            activeIndex = slide.index(),
            indexes = $('.product-photo-main').find('.swiper-slide').length;
        $('body').css('overflow', 'hidden');
        $('.main, .product-gallery-full-screen').css('overflow-y', 'scroll');
        $('.product-gallery-full-screen').addClass('opened');
        galleryTop.activeIndex = activeIndex;
        galleryTop.onResize();
    }

    function goFs() {
        fullscreen = true;
        $('.product-gallery-full-screen').css('overflow-y', 'auto');
        $('.fullscreen').addClass('leavefs');
        fsFunction.call(fsGallery);
    }

    function leaveFs() {
        fullscreen = false;
        $('.product-gallery-full-screen').css('overflow-y', 'scroll');
        $('.fullscreen').removeClass('leavefs');
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    function closeImageGallery() {
        // if(zoomed) {
        //   zoom($('.product-gallery-full-screen .swiper-slide-active img'));
        // }
        $('body').css('overflow', 'auto');
        $('.main, .product-gallery-full-screen').css('overflow-y', 'auto');
        galleryOpen = false;
        leaveFs();
        $('.product-gallery-full-screen').removeClass('opened');
    }

    // --- EVENTS ---
    // open the large image gallery
    $('.product-photo-main .swiper-slide').on('click touch', function() {
        var slide = $(this);
        openImageGallery(slide);
    });
    // close the large image gallery
    $('.gallery-nav .close').on('click touch', function() {
        closeImageGallery();
    });

    $(window).on('resize', function() {
        galleryTop.onResize();
        swiperSide.onResize();
        swiperProduct.onResize();
    });
});
