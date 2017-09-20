/**
 * Created by hakuh on 2017/9/8.
 */
// (update: migrated to p5.js in May 2015 by Jerome Herr)
// Jan 2009
// http://www.abandonedart.org
// http://www.zenbullets.com

//================================= global vars

var _A = 4.0;
var _B = 3.0;
var _xsin1 = 0;
var _xsin2 = 0;
var _xsin3 = 0;
var _ysin1 = 0;
var _ysin2 = 0;
var _ysin3 = 0;
var _pointcount = 0;
var _x = 0;
var _y = 0;

//================================= init
function setup() {
    var canvas=createCanvas(windowWidth,windowHeight);
    canvas.parent('canvasHolder');
    smooth();
    restart();
}

function restart() {

    var canvas=createCanvas(windowWidth,windowHeight);
    canvas.parent('canvasHolder');
    clearBackground();
    stroke(149,222,255);
    _A = int(random(8)) + 1;
    _B = int(random(8)) + 1;
    _xsin1 = int(random(5));
    _xsin2 = int(random(5));
    _xsin3 = int(random(5));
    _ysin1 = int(random(5));
    _ysin2 = int(random(5));
    _ysin3 = int(random(5));
    //println(_A + " : " + _B);
    //println(_xsin1 + " : " + _xsin2 + " : " + _xsin3);
    //println(_ysin1 + " : " + _ysin2 + " : " + _ysin3);
    _pointcount = 0;
}

function clearBackground() {
    background(255);
}

function draw() {
    for (var i = 0; i < 1000; i++) {
        nextPoint();
        point(_x, _y);
        //line(_x, _y, _x, _y);
        _pointcount++;
    }
    if (_pointcount > 400000) {
        restart();
    }
    $('#canvasHolder').click(function () {
        restart()
    });
    // if (mouseIsPressed) restart();
}

function nextPoint() {
    var sinAx = sin(_A * _x);
    var sinAy = sin(_A * _y);
    var sinBx = sin(_B * _x);
    var sinBy = sin(_B * _y);

    var newx = 0;
    var newy = 0;

    if (_xsin1 == 1) {
        newx += sinAx;
    } else if (_xsin1 == 2) {
        newx += sinAy;
    } else if (_xsin1 == 3) {
        newx += sinBx;
    } else if (_xsin1 == 4) {
        newx += sinBy;
    }
    if (_ysin1 == 1) {
        newy += sinAx;
    } else if (_ysin1 == 2) {
        newy += sinAy;
    } else if (_ysin1 == 3) {
        newy += sinBx;
    } else if (_ysin1 == 4) {
        newy += sinBy;
    }

    if (_xsin2 == 1) {
        newx += (sinAx * sinAx);
    } else if (_xsin2 == 2) {
        newx += (sinAy * sinAy);
    } else if (_xsin2 == 3) {
        newx += (sinBx * sinBx);
    } else if (_xsin2 == 4) {
        newx += (sinBy * sinBy);
    }
    if (_ysin2 == 1) {
        newy += (sinAx * sinAx);
    } else if (_ysin2 == 2) {
        newy += (sinAy * sinAy);
    } else if (_ysin2 == 3) {
        newy += (sinBx * sinBx);
    } else if (_ysin2 == 4) {
        newy += (sinBy * sinBy);
    }

    if (_xsin3 == 1) {
        newx += (sinAx * sinAx * sinAx);
    } else if (_xsin3 == 2) {
        newx += (sinAy * sinAy * sinAy);
    } else if (_xsin3 == 3) {
        newx += (sinBx * sinBx * sinBx);
    } else if (_xsin3 == 4) {
        newx += (sinBy * sinBy * sinBy);
    }
    if (_ysin3 == 1) {
        newy += (sinAx * sinAx * sinAx);
    } else if (_ysin3 == 2) {
        newy += (sinAy * sinAy * sinAy);
    } else if (_ysin3 == 3) {
        newy += (sinBx * sinBx * sinBx);
    } else if (_ysin3 == 4) {
        newy += (sinBy * sinBy * sinBy);
    }

    _x = width / 3 + (newx * width/6);
    _y = height / 3 + (newy * height/6);
}

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

// var card='<li id="card%data1%" class="work-col "><div class="paper paper-work"><img class="card-img" src="%data2%"/><div class="work-title"><h4><span>%data3%</span></h4></div></div></li>'

function EventObj(dataSet) {
    this.dataSet=dataSet;
}

EventObj.prototype={
    constructor:EventObj,
    card:'<li id="card%data1%" class="work-col "><div class="paper paper-work"><img class="card-img" src="%data2%"/><div class="work-title"><h4><span>%data3%</span></h4></div></div></li>',
    getDataset:function () {
        return this.dataSet;
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
        $('.Result').text(maxNum);
        $('.work-col').remove();
        $('#endHint').hide();

        var dataSet=this.getDataset();

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


    }
};
