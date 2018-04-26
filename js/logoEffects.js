/**
 * Created by hakuhal
 */

/***********************page canvas new的逻辑****************************/

(function() {

    'use strict';

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());

    var Nodes = {

        density: 5,

        drawDistance: 0,
        baseRadius: 5,
        reactionSensitivity: 5,

        points: [],
        particles: [],
        mouse: { x: -1000, y: -1000, down: false },

        animation: null,

        canvas: null,
        context: null,

        color: '#fff',

        bgImage: null,
        bgCanvas: null,
        bgContext: null,
        bgContextPixelData: null,

        init: function() {
            this.canvas = document.getElementById( 'canvas-interactive' );
            this.context = this.canvas.getContext( '2d' );
            this.context.globalCompositeOperation = "lighter";
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.canvas.style.display = 'block';

            this.canvas.addEventListener('mousemove', this.mouseMove, false);
            this.canvas.addEventListener('mousedown', this.mouseDown, false);
            this.canvas.addEventListener('mouseup',   this.mouseUp,   false);
            this.canvas.addEventListener('mouseout',  this.mouseOut,  false);

            window.onresize = function(event) {
                Nodes.canvas.width = window.innerWidth;
                Nodes.canvas.height = window.innerHeight;
                Nodes.onWindowResize();
            };

            this.loadData('data:image/png;base64,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');

            this.createParticles();
        },

        createParticles: function() {
            for (var i = 0; i < 30; i++) {
                this.particles.push({
                    x: Math.random()*this.canvas.width,
                    y: Math.random()*this.canvas.height,
                    dx: Math.random()*1 - 0.5,
                    dy: Math.random()*1 - 0.5,
                    radius: 2,
                    color: this.color
                });
            }
        },

        drawParticles: function() {

            for (var i = 0; i < this.particles.length; i++) {
                var p = this.particles[i];

                this.context.beginPath();
                this.context.fillStyle = p.color;
                this.context.arc(p.x,p.y,p.radius,Math.PI*2, false);
                this.context.fill();

                p.x -= p.dx;
                p.y -= p.dy;

                if(p.x < -10) p.x = this.canvas.width;
                if(p.x > this.canvas.width) p.x = 5;
                if(p.y < -10) p.y = this.canvas.height;
                if(p.y > this.canvas.height) p.y = 5;

            }

        },

        preparePoints: function() {

            this.points = [];

            var width, height, i, j;
            var colors = this.bgContextPixelData.data;

            for( i = 0; i < this.canvas.height; i += this.density ) {

                for ( j = 0; j < this.canvas.width; j += this.density ) {

                    var pixelPosition = ( j + i * this.bgContextPixelData.width ) * 4;

                    if ( colors[pixelPosition] > 200 && (colors[pixelPosition + 1]) > 200 && (colors[pixelPosition + 2]) > 200 || colors[pixelPosition + 3] === 0 ) {
                        continue;
                    }

                    this.points.push( { x: j, y: i, originalX: j, originalY: i, color: this.color } );

                }
            }
        },

        updatePoints: function() {

            var i, currentPoint, theta, distance;

            for (i = 0; i < this.points.length; i++ ){


                currentPoint = this.points[i];

                theta = Math.atan2( currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);


                if ( this.mouse.down ) {

                    /*this.rx = this.mouse.x - this.x;
                    this.ry = this.mouse.y - this.y;
                    distance = this.rx * this.rx + this.ry * this.ry;
                    this.force = -this.mouse.radius / distance;
                    if(distance < this.mouse.radius) {
                        this.angle = Math.atan2(this.ry, this.rx);
                        this.vx += this.force * Math.cos(this.angle);
                        this.vy += this.force * Math.sin(this.angle);
                    }
                    this.x += (this.vx *= 0.95) + (this.originX - this.x) * 0.19;
                    this.y += (this.vy *= 0.95) + (this.originY - this.y) * 0.19;*/

                    distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
                            (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
                } else {
                    distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
                            (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
                }

                currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05;
                currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05;

            }
        },

        drawPoints: function() {

            var i, currentPoint;

            for ( i = 0; i < this.points.length; i++ ) {

                currentPoint = this.points[i];

                this.context.fillStyle = currentPoint.color;
                this.context.fillRect(currentPoint.x, currentPoint.y, 2, 2);

            }
        },

        draw: function() {
            this.animation = requestAnimationFrame( function(){ Nodes.draw(); } );
            this.clear();
            this.drawParticles();
            this.updatePoints();
            this.drawPoints();
        },

        clear: function() {
            this.canvas.width = this.canvas.width;
        },

        loadData: function( data ) {
            this.bgImage = new Image();
            this.bgImage.src = data;
            this.bgImage.onload = function() {
                Nodes.drawImageToBackground();
            };
        },

        drawImageToBackground: function () {

            this.bgCanvas = document.createElement( 'canvas' );
            this.bgCanvas.width = this.canvas.width;
            this.bgCanvas.height = this.canvas.height;

            var newWidth, newHeight;

            if ( this.bgImage.width > this.bgCanvas.width - 100 || this.bgImage.height > this.bgCanvas.height - 100) {

                var maxRatio = Math.max( this.bgImage.width / (this.bgCanvas.width - 10) , this.bgImage.height / (this.bgCanvas.height - 10) );
                newWidth = this.bgImage.width / maxRatio;
                newHeight = this.bgImage.height / maxRatio;

            } else {
                newWidth = this.bgImage.width*0.8;
                newHeight = this.bgImage.height*0.8;
            }

            this.bgContext = this.bgCanvas.getContext( '2d' );
            this.bgContext.drawImage( this.bgImage, (this.canvas.width - newWidth) / 2, (this.canvas.height - newHeight) / 2, newWidth, newHeight);
            this.bgContextPixelData = this.bgContext.getImageData( 0, 0, this.bgCanvas.width, this.bgCanvas.height );

            this.preparePoints();
            this.draw();
        },

        mouseDown: function( event ){
            Nodes.mouse.down = true;
        },

        mouseUp: function( event ){
            Nodes.mouse.down = false;
        },

        mouseMove: function(event){
            Nodes.mouse.x = event.offsetX || (event.layerX - Nodes.canvas.offsetLeft);
            Nodes.mouse.y = event.offsetY || (event.layerY - Nodes.canvas.offsetTop);
        },

        mouseOut: function(event){
            Nodes.mouse.x = -1000;
            Nodes.mouse.y = -1000;
            Nodes.mouse.down = false;
        },

        onWindowResize: function() {
            cancelAnimationFrame( this.animation );
            this.drawImageToBackground();
        }
    };

    Nodes.init();

}());

Nodes.prototype.update = function() {

};