/**
 * Created by hakuh on 2017/9/8.
 */

/***********************menu的逻辑****************************/
$('#menu_btn').click(function () {
   $('.nav-menu').show();
});

$('#close_btn').click(function () {
   $('.nav-menu').hide();
});

/***********************design page的逻辑****************************/

//search bar 的hover逻辑
$('#listTag').hover(function () {
    $('.overlay-filter-year').hide();
    $('.overlay-filter-catalog').hide();
    $('.overlay-filter-tag').show();
    $('.overlay-filter-tag').hover(function(){
        $(this).show();
    },function () {
        $(this).hide();
    });
},function () {

});

$('#listYear').hover(function () {
    $('.overlay-filter-tag').hide();
    $('.overlay-filter-catalog').hide();
    $('.overlay-filter-year').show();
    $('.overlay-filter-year').hover(function(){
        $(this).show();
    },function () {
        $(this).hide();
    });
},function () {

});

$('#listCatalog').hover(function () {
    $('.overlay-filter-tag').hide();
    $('.overlay-filter-year').hide();

    $('.overlay-filter-catalog').show();
    $('.overlay-filter-catalog').hover(function(){
        $(this).show();
    },function () {
        $(this).hide();
    });
},function () {

});

//search bar 的点选逻辑
$('.tag-item').click(function () {
    $('.overlay-filter-tag').hide();
    var textValue=$(this).data('value');
    $('#listTag').text(textValue);
});

$('.year-item').click(function () {
    $('.overlay-filter-year').hide();
    var textValue=$(this).data('value');
    $('#listYear').text(textValue);
});

$('.catalog-list-item').click(function () {
    $('.overlay-filter-catalog').hide();
    var textValue=$(this).data('value');
    $('#listCatalog').text(textValue);
});

/***********************team page的逻辑****************************/
$('#follow-open').click(function () {
    $('.nav-pc-follow').show();
    $('.main-pc').css("padding-top","300px");
});

$('#follow-close').click(function () {
    $('.nav-pc-follow').hide();
    $('.main-pc').css("padding-top","144px");
});

var     times=1;
function countTimes(){
    times++;
    console.log(times);
    return times;
}

$('.foto_hs2').hide();
$('.foto_hs3').hide();
$('.fotos_hs').hover(function(){
    if((times%3)==1){
        $('.foto_hs1').show();
        $('.foto_hs2').hide();
        $('.foto_hs3').hide();
        // $('.foto_hs1').show();
        console.log("team number effect1 shows");
    }else if((times%3)==2){
        $('.foto_hs1').hide();
        $('.foto_hs2').show();
        $('.foto_hs3').hide();
    }else if((times%3)==0){
        $('.foto_hs1').hide();
        $('.foto_hs2').hide();
        $('.foto_hs3').show();
    }

},function () {
    countTimes();
});


var     tlf_times=1;
function tlf_countTimes(){
    tlf_times++;
    console.log(tlf_times);
    return tlf_times;
}

$('.foto_tlf2').hide();
$('.foto_tlf3').hide();
$('.fotos_tlf').hover(function(){
    if((tlf_times%3)==1){
        $('.foto_tlf1').show();
        $('.foto_tlf2').hide();
        $('.foto_tlf3').hide();
        // $('.foto_hs1').show();
    }else if((tlf_times%3)==2){
        $('.foto_tlf1').hide();
        $('.foto_tlf2').show();
        $('.foto_tlf3').hide();
    }else if((tlf_times%3)==0){
        $('.foto_tlf1').hide();
        $('.foto_tlf2').hide();
        $('.foto_tlf3').show();
    }

},function () {
    tlf_countTimes();
});


var     zw_times=1;
function zw_countTimes(){
    zw_times++;
    console.log(zw_times);
    return zw_times;
}

$('.foto_zw2').hide();
$('.foto_zw3').hide();
$('.fotos_zw').hover(function(){
    if((zw_times%3)==1){
        $('.foto_zw1').show();
        $('.foto_zw2').hide();
        $('.foto_zw3').hide();
        // $('.foto_hs1').show();
    }else if((zw_times%3)==2){
        $('.foto_zw1').hide();
        $('.foto_zw2').show();
        $('.foto_zw3').hide();
    }else if((zw_times%3)==0){
        $('.foto_zw1').hide();
        $('.foto_zw2').hide();
        $('.foto_zw3').show();
    }

},function () {
    zw_countTimes();
});

$('#hs_contact').click(function(){
    $('#hsqr').show();
    $('.fotos_hs').hide();
    $('#hs_contact').hide();
});

$('#hsqr').click(function(){
        $('#hsqr').hide();
        $('.fotos_hs').show();
    $('#hs_contact').show();
});

$('#zw_contact').click(function(){
    $('#zwqr').show();
    $('.fotos_zw').hide();
    $('#zw_contact').hide();
});

$('#zwqr').click(function(){
    $('#zwqr').hide();
    $('.fotos_zw').show();
    $('#zw_contact').show();
});

$('#tlf_contact').click(function(){
    $('#tlfqr').show();
    $('.fotos_tlf').hide();
    $('#tlf_contact').hide();

});

$('#tlfqr').click(function(){
    $('#tlfqr').hide();
    $('.fotos_tlf').show();
    $('#tlf_contact').show()
});

/*******************下拉刷新的逻辑重新整理********************/

// window.refreshObj=new Object();

var card='<li id="card%data1%" class="work-col "><div class="paper paper-work"><img class="card-img" src="%data2%"/><div class="work-title"><h4><span>%data3%</span></h4>   <div class="icon"><img src="img/icon_thumb.png">1111 <img src="img/icon_eye.png">110</div> </div></div></li>';

function EventObj(dataSet) {
    this.dataSet=dataSet;
}

EventObj.prototype={
    constructor:EventObj,
    initNum:20,
    // card:'<li id="card%data1%" class="work-col "><div class="paper paper-work"><img class="card-img" src="%data2%"/><div class="work-title"><h4><span>%data3%</span></h4>  <div class="icon"><img src="img/icon_thumb.png">1111 <img src="img/icon_eye.png">110</div> </div></div></li>',
    card:card,
    getDataset:function () {
        return this.dataSet;
    },
    getDetail:function () {
        return this.gotoDetail();
    },
    gotoDetail:function () {
        var dataSet=this.getDataset();
        $(".work-col").click( function () {
            // console.log(dataSet);
            var id=parseInt($(this).attr("id").split("card")[1]);
            console.log(id);

            if(dataSet[id].catalog=='摄影'){
                localStorage.setItem('photo-title', dataSet[id].title);
                localStorage.setItem('photo-tag', dataSet[id].tag);
                localStorage.setItem('photo-work', dataSet[id].work);
                localStorage.setItem('photo-desc', dataSet[id].desc);
                window.location.href="photos-detail.html";
            }else{
                localStorage.setItem('design-title', dataSet[id].title);
                localStorage.setItem('design-tag', dataSet[id].tag);
                localStorage.setItem('design-work', dataSet[id].work);
                localStorage.setItem('design-desc', dataSet[id].desc);
                window.location.href="design-detail.html";
            }
        });
    },
    reset:function () {
        var dataSet=this.getDataset();

        $('.Result').text(dataSet.length);
        $('.work-col').remove();
        $('#endHint').hide();
        var initNum=this.initNum;

        if(dataSet[0]!=null){
            for(var j=0;j<=initNum;j++){
                if(dataSet[j]!=null){
                    $('.resultItem').append(this.card.replace("%data1%",dataSet[j].id).replace("%data2%",dataSet[j].ava).replace("%data3%",dataSet[j].title));
                    for(var m=0;m<dataSet[j].tag.length;m++){
                        $('#card'+j).addClass(dataSet[j].tag[m]);
                    }

                }else{
                    console.log("#load opacity = 0");
                    $('.loading').css("opacity",0);
                }
            }

        }else{
            console.log("#load opacity = 0");
            $('.loading').css("opacity",0);
        }

        $(".work-col").click( function () {
            // console.log(dataSet);
            var id=parseInt($(this).attr("id").split("card")[1]);
            console.log(id);

            if(dataSet[id].catalog=='摄影'){
                localStorage.setItem('photo-title', dataSet[id].title);
                localStorage.setItem('photo-tag', dataSet[id].tag);
                localStorage.setItem('photo-work', dataSet[id].work);
                localStorage.setItem('photo-desc', dataSet[id].desc);
                window.location.href="photos-detail.html";
            }else{
                localStorage.setItem('design-title', dataSet[id].title);
                localStorage.setItem('design-tag', dataSet[id].tag);
                localStorage.setItem('design-work', dataSet[id].work);
                localStorage.setItem('design-desc', dataSet[id].desc);
                window.location.href="design-detail.html";
            }
        });

        this.getscrollDown();
    },
    scrollDownRefresh:function (){
        var pace = 8;
        var totalheight = 0;
        var dataSet=this.getDataset();
        var initNum=20;


        $(window).scroll(function(){

                var scrollPos = $(window).scrollTop();//滚动条距顶部距离(页面超出窗口的高度)
                var viewH=$(this).height();
                totalheight = parseFloat(viewH) + parseFloat(scrollPos);

                if($(document).height()*0.95 <= totalheight){

                    $('.loading').css("opacity",1);
                    setTimeout(function () {
                        console.log("setTimeOut执行");
                        $('.loading').css("opacity",0);
                        if(initNum<dataSet.length){
                            for(var i=0;i<pace;i++){
                                initNum=initNum+1;
                                if(dataSet[initNum] != null){
                                    console.log('initNum Step:'+initNum);
                                    $('.resultItem').append(this.card.replace("%data1%",dataSet[initNum].id).replace("%data2%",dataSet[initNum].ava).replace("%data3%",dataSet[initNum].title));
                                    for(var m=0;m<dataSet[initNum].tag.length;m++){
                                        $('#card'+initNum).addClass(dataSet[initNum].tag[m]);
                                    }

                                    $(".work-col").click( function () {
                                        // console.log(dataSet);
                                        var id=parseInt($(this).attr("id").split("card")[1]);
                                        console.log(id);

                                        if(dataSet[id].catalog=='摄影'){
                                            localStorage.setItem('photo-title', dataSet[id].title);
                                            localStorage.setItem('photo-tag', dataSet[id].tag);
                                            localStorage.setItem('photo-work', dataSet[id].work);
                                            localStorage.setItem('photo-desc', dataSet[id].desc);
                                            window.location.href="photos-detail.html";
                                        }else{
                                            localStorage.setItem('design-title', dataSet[id].title);
                                            localStorage.setItem('design-tag', dataSet[id].tag);
                                            localStorage.setItem('design-work', dataSet[id].work);
                                            localStorage.setItem('design-desc', dataSet[id].desc);
                                            window.location.href="design-detail.html";
                                        }
                                    });
                                }else{

                                }

                            }
                        }else{
                            console.log('reach bottom');
                            $('.loading').css("opacity",0);
                            $('#endHint').show();
                        }


                    },1000);

                }

            });

    },
    getscrollDown:function () {
        return this.scrollDownRefresh();
    },
    filterItem:function () {
        var photo_filters = {};


        $('.list-filter').on( 'click', '.list-filter-item', function() {

            var $this = $(this);

            // get group key
            var $buttonGroup = $this.parents('.list-filter');
            var filterGroup = $buttonGroup.attr('data-filter-group');
            // set filter for group
            photo_filters[ filterGroup ] = $this.attr('data-filter');
            // combine filters
            var filterValue = '';
            var filters=[];
            for ( var prop in photo_filters ) {
                filterValue += photo_filters[ prop ];
                filters.push(photo_filters[prop]);
                console.log("filterValue: "+photo_filters[prop]);
            }


            // set filter for Isotope
            $('.resultItem').isotope({ filter:filterValue});
            var $grid=$('.resultItem').isotope({ filter:filterValue});
            var iso = $grid.data('isotope');
            var num=iso.filteredItems.length;
            $('.Result').text(num);

            if (num>photoSet.initNum){

                // document.location.reload();

            }else{
                $(".loading").css("opacity",0);
                $(window).off('scroll');

            }

        });
    }
};
