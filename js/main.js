/**
 * Created by hakuh on 2017/8/28.
 */
// (update: migrated to p5.js in May 2015 by Jerome Herr)
// Jan 2009
// http://www.abandonedart.org
// http://www.zenbullets.com
//
// This work is licensed under a Creative Commons 3.0 License.
// (Attribution - NonCommerical - ShareAlike)
// http://creativecommons.org/licenses/by-nc-sa/3.0/
//
// This basically means, you are free to use it as long as you:
// 1. give http://www.zenbullets.com a credit
// 2. don't use it for commercial gain
// 3. share anything you create with it in the same way I have
//
// These conditions can be waived if you want to do something groovy with it
// though, so feel free to email me via http://www.zenbullets.com

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
    var canvas=createCanvas(windowWidth,windowHeight-50);
    canvas.parent('canvasHolder');
    smooth();
    restart();
}

function restart() {

    var canvas=createCanvas(windowWidth,windowHeight-50);
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
    if (mouseIsPressed) restart();
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