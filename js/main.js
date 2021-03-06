/**
 * Created by hakuh on 2017/9/8.
 */
var rootURL="http://120.77.83.209:8800/api/";
var allTagURL=rootURL+"category/list";
var allURL=rootURL+"list?category=0";
var photoURL=rootURL+"list?category=1";
var designURL=rootURL+"list?category=2";
var eventURL=rootURL+"list?category=3";
var addViewURL=rootURL+"addViews";
var addLikeURL=rootURL+"addLikes";
var detailURL=rootURL+"detail?id=";

/**
 * PC页面的互动逻辑
 **/
/**********************搜索筛选Bar逻辑****************************/

//search bar 的hover逻辑
var filter_year=$('.overlay-filter-year');
var filter_catalog=$('.overlay-filter-catalog');
var filter_tag=$('.overlay-filter-tag');

$('#list_tag').hover(function () {
    filter_year.hide();
    filter_catalog.hide();
    filter_tag.show();
    filter_tag.hover(function(){
        $(this).show();
    },function () {
        $(this).hide();
    });
},function () {

});

$('#list_year').hover(function () {
    filter_tag.hide();
    filter_catalog.hide();
    filter_year.show();
    filter_year.hover(function(){
        $(this).show();
    },function () {
        $(this).hide();
    });
},function () {

});

$('#listCatalog').hover(function () {
    filter_tag.hide();
    filter_year.hide();

    filter_catalog.show();
    filter_catalog.hover(function(){
        $(this).show();
    },function () {
        $(this).hide();
    });
},function () {

});

//search bar 的点选逻辑



$('.catalog-list-item').click(function () {
    filter_catalog.hide();
    var textValue=$(this).data('value');
    $('#listCatalog').text(textValue);
});

/***********************follow逻辑****************************/
$('#follow-open').click(function () {
    $('.nav-pc-follow').show();
    $('.main-pc').css("padding-top","300px");
});

$('#follow-close').click(function () {
    $('.nav-pc-follow').hide();
    $('.main-pc').css("padding-top","144px");
});


/***********************team介绍逻辑****************************/
var     times=1;
function countTimes(){
    times++;
    // console.log(times);
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
        // console.log("team number effect1 shows");
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
    // console.log(tlf_times);
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
    // console.log(zw_times);
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



/**
 * 移动端页面的互动逻辑
 **/
/***********************移动端menu的逻辑****************************/
$('#menu_btn').click(function () {
    $('.nav-menu').show();
});

$('#close_btn').click(function () {
    $('.nav-menu').hide();
});


/**
 * 网页数据加载逻辑
 **/
/*******************下拉刷新的逻辑重新整理********************/

// window.refreshObj=new Object();
//reversion <img class="card-img" src="%data_img%" />

//reversion <img class="card-img lazyload" src="img/loader.gif" data-img="%data_img%x-oss-process=image/resize,m_fill,w_497,h_328,limit_0/auto-orient,0/quality,q_90" alt="原画册"/>

var card='<li id="%data_id%" data-value="%data_type%" class="work-col "> <div class="paper paper-work"> <img class="card-img lazy" data-original="%data_img%?x-oss-process=image/resize,m_fill,w_497,h_328,limit_0/auto-orient,0/quality,q_90" alt="原画册"/>'+
    '<div class="work-title">%data_title%</div> <div class="project-status"> <span class="project-status-sep">'+
    '<svg class="project-icon project-icon-appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16"> <path fill="none" d="M.5.5h16v16H.5z"></path> <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path></svg>'+
    '<span class="project-status-number likes">%data_likes%</span> </span>'+
    '<span class="project-status-sep"> <svg class="project-icon project-icon-view" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16">'+
    '<path fill="none" d=M.5.5h16v16H.5z"></path> <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path> </svg>'+
    '<span class="project-status-number views">%data_views%</span> </span> </div> </div> </li>';


var pageSize=8;
function CardObj(url){
    this.url=url;
}

CardObj.prototype ={
    card:card,
    pageIndex:1,
    /*getJsonData:function (index) {
        return getJsonData(this.url,index);
    },*/
    getCount:function(){
        var count;
        $.ajax({
            type : "GET",
            async:false,//返回值的问题。
            url : this.url,
            data : {}//数据，这里使用的是Json格式进行传输
        })
            .done(function (result) {
                count=result.count;
                $('.Result').text(count);
            })
            .fail(function(err) {
                console.log("error"+err);
            })
            .always(function() {
            });

        return count;

    },
    //要得到第几页的数据，直接输入
    build:function () {
        var count=this.getCount();
        var index=1;
        var totalheight = 0;
        var Url=this.url;

        var range = 0;             //距下边界长度/单位px

        var totalPage=Math.ceil(count/pageSize);


        AppendCard(Url,index,resultItem);

        $(window).scroll(function(){
            var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)


            totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
            if(($(document).height()-range)*0.95 <= totalheight ) {


                if (index<totalPage){
                    index++;
                     AppendCard(Url,index,resultItem);
                }else{
                    $('.loading').css("opacity", 0);
                    $('#endHint').show();
                }

            }
        });

    }
};

/*生成卡片逻辑*/
getJsonData=function (url,index) {
    var data;
    $.ajax({
        type : "GET",
        async:false,//返回值的问题。
        url : url+'&pageSize='+pageSize+'&pageIndex='+index,
        data : {}//数据，这里使用的是Json格式进行传输
    })
        .done(function (result) {
            data=result.data;
        })
        .fail(function(err) {
            console.log("error:"+err);
        })
        .always(function() {
        });

    return data;
};

var resultItem=$('.resultItem');
var returnResultItem=$('.returnResultItem');
ReplaceCard=function (card,obj,root) {

    root.append(card.replace("%data_id%",obj.id).replace("%data_type%",obj.type).replace("%data_img%",obj.cover).replace("%data_title%",obj.title).replace("%data_likes%",obj.likes).replace("%data_views%",obj.views));
};
AppendCard=function (url,index,root) {
    var dataSet = getJsonData(url,index);

    if (dataSet[0] != null) {
        for (var j = 0; j < dataSet.length; j++) {
            if (dataSet[j] != null) {
                ReplaceCard(this.card, dataSet[j],root);

            } else {

                $('.loading').css("opacity", 0);
            }
        }

    } else {

        $('.loading').css("opacity", 0);
    }

    $(function() {
        $("img.lazy").lazyload({effect: "fadeIn"});
    });

    $('.work-col').click(function () {
        var cardId=parseInt($(this).attr("id"));
        var cardType=parseInt($(this).attr("data-value"));

        ClickCard(cardId,cardType);

    });
};


/*卡片跳转：1、views +1 2、记住id*/
ClickCard =function(id,type){
    var params={
        "id":id
    };
    $.ajax({
        type : "POST",
        url : addViewURL,
        data : JSON.stringify(params)//数据，这里使用的是Json格式进行传输
    })
        .done(function (result) {
            console.log("success:"+result);
        })
        .fail(function(err) {
            console.log("error:"+err);
        })
        .always(function() {
        });
    localStorage.setItem('item_id', id);

    if(type==1){
        window.location.href="photos-detail.html?id="+id;

    }else if(type==2){
        window.location.href="design-detail.html?id="+id;

    }else if(type==3){
        window.location.href="event-detail.html?id="+id;

    }else{

    }
};



/*生成二级界面逻辑，1、类型判断type=1,2&3 2、like post逻辑 */

var detailTag='<li><a href="#"><span class="Tag">%data_tag%</span></a></li>';
var detailCover='<img class="richmedia-detail-img lazy" data-original="%data_img%?x-oss-process=image/resize,m_fill,w_497,h_328,limit_0/auto-orient,0/quality,q_90" alt="原画册"/>';


var DetailObj=function(url){
    this.url=url;
}

DetailObj.prototype ={

    build:function () {
        var URL=this.url;

        getDetailsData(URL);

        AppendDetailHead(URL);

    }
};

getDetailsData=function (url) {
    var data;
    // var id=localStorage.getItem('item_id');


    $.ajax({
        type : "GET",
        async:false,//返回值的问题。
        url : url,
        data : {}//数据，这里使用的是Json格式进行传输
    })
        .done(function (result) {
            // data=result.data;
            data=result.data[0];


        })
        .fail(function(err) {
            console.log("error:"+err);
        })
        .always(function() {
        });

    return data;
};

function ReplaceDetailTag(str){

    $('.list-btn').append(detailTag.replace("%data_tag%",str));

}

function AppendDetailHead(url) {
    var detailObj=getDetailsData(url);

    var tags=detailObj.tagNames;
    var times=detailObj.timeNames;
    var title=detailObj.title;
    var date=detailObj.updateTime;
    var likes=detailObj.likes;
    var type=detailObj.type;
    var imgSrc=detailObj.cover;
    var id=detailObj.id;
    var content=detailObj.content;
    var photoList=detailObj.photoList;


     var result=tags.split(",");

    //添加标签逻辑
    if (result instanceof Array) {
        for (var j = 0; j < result.length; j++) {
            if (result[j] != null) {
                ReplaceDetailTag(result[j],"detail-li-tag");
            } else {
                console.log("err");
            }
        }
    } else {
        ReplaceDetailTag(tags);
    }
    ReplaceDetailTag(times);

    //点赞逻辑
    $('.richmedia-detail-title').text(title);
    $('.detail_date').text(date);
    $('.like_button_text').text(likes);
    $('.like_button').click(function(){

        $('.like_button_text').text(likes+1);
        $(this).attr('disabled',"true");
        $(this).css('background-color','#dddddd');
        LikeLogic(id);
    });



    //页面显示逻辑
    if (type !=1){
        $(function() {
            $("img.lazy").lazyload({effect: "fadeIn"});
        });
        $('.richmedia-detail-header').append(detailCover.replace("%data_img%",imgSrc));
        $('.richmedia-detail-article').append(content);

        $('.media-wrap img').css("width","100%");
        // console.log('文章内容：'+content);
    }else{
        // console.log('文章内容：'+photoList);
        AppendPhotoArticle(photoList);

    }

}

LikeLogic=function (id) {
    console.log("Likes:"+id);
    var params={
        "id":id
    };
    $.ajax({
        type : "POST",
        url : addLikeURL,
        data : JSON.stringify(params)//数据，这里使用的是Json格式进行传输
    })
        .done(function (result) {
            console.log("success:"+result);
        })
        .fail(function(err) {
            console.log("error:"+err);
        })
        .always(function() {
        });
};


AppendEventArticle=function () {
    $('.richmedia-detail-article p').addClass("richmedia-detail-desc");
};


var photoZoomDetails='<div class="swiper-slide"> <div class="swiper-zoom-container"> <img src="%work%" draggable="false" ondragstart="return false;"> </div> </div>';
var photoDetails='<div class="swiper-slide" ><div class="swiper-zoom-container"><img src="%work%"></div> </div>';
var photoDesc='<div class="swiper-slide" ><div class="swiper-zoom-container"><h2 >%desc%</h2></div> </div>';
// var photoDesc='<div id="photoDesc" class="design-detail-desc"> <h2 class="none-display" id="desc">%desc%</h2> </div>';

/*添加相册逻辑，1、添加相册 2、添加描述 3、相册与描述一一对应*/
AppendPhotoArticle=function (arr) {
    if(arr!=null){
        for(i=0;i<arr.length;i++){
            var src=arr[i].source;
            var desc=arr[i].description;

            $('#photoSwiper').append(photoDetails.replace("%work%",src));
            $('#photoSwiperSlider').append(photoDesc.replace("%desc%",desc));
            $('#photoSwiperfull').append(photoZoomDetails.replace("%work%",src));
            // $('#photoDesc').append(photoDesc.replace("%id%",i).replace("%desc%",desc));


        }
    }else{
        console.log("err");
    }

};



/*******************标签按钮********************/
var tag='<li id="%data_id%" data-value="%data_val%"  class="list-filter-item %data_class%">%data_tag%</li>';

function TagObj(url){
    this.url=url;
}

TagObj.prototype ={
    tag:tag,
    //要得到第几页的数据，直接输入
    build:function () {
        var Url=this.url;
        AppendTag(Url);
    }
};

var tagAll= {"id":"","name":"全部项目","type":1};
var yearAll= {"id":"","name":"全部年份","type":2};

getTagData=function (url) {
    var data;
    $.ajax({
        type : "GET",
        async:false,//返回值的问题。
        url : url,
        data : {}//数据，这里使用的是Json格式进行传输
    })
        .done(function (result) {
            data=result.data;
            data.unshift(tagAll);
            data.unshift(yearAll);
        })
        .fail(function(err) {
            console.log("error:"+err);
        })
        .always(function() {
        });

    return data;
};

AppendTag=function (url) {
    var dataSet=getTagData(url);


    if (dataSet[0] != null) {
        for (var j = 0; j < dataSet.length; j++) {
            if (dataSet[j] != null) {
                ReplaceTag(this.tag, dataSet[j]);
            } else {
                console.log("err");
            }
        }

    } else {
        console.log("err");
    }
};

ReplaceTag=function (tag,obj) {
    if(obj.type==1){
        $('.filter-tag').append(tag.replace("%data_id%",obj.id).replace("%data_val%",obj.name).replace("%data_class%","tag-item").replace("%data_tag%",obj.name));
        ClickTag('tag');
    }else if(obj.type==2){
        $('.filter-year').append(tag.replace("%data_id%",obj.id).replace("%data_val%",obj.name).replace("%data_class%","year-item").replace("%data_tag%",obj.name));
        ClickTag('year');
    }
};

ClickTag=function (type) {
    $('.'+type+'-item').click(function () {
        filter_tag.hide();
        var textValue=$(this).data('value');
        $('#list_'+type).text(textValue);
    });

};


/*******************获取Detail URL对象********************/


function ShareURLObj(){
    this.url=window.location.href;;
}

ShareURLObj.prototype ={

    build:function () {
        var str=this.url;

        var first=str.split("?");
        var second=first[1].split("&");
        var third=second[0].split("=");

        var id=third[1];

        var URL=detailURL+id;


        return URL;
    }
};





