var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();


    var shape1 = document.getElementById('shape1');
    var shape2 = document.getElementById('shape2');
    var shape3 = document.getElementById('shape3');
    var shape4 = document.getElementById('shape4');
    var shape5 = document.getElementById('shape5');
    var shape6 = document.getElementById('shape6');
    var shape = document.getElementsByClassName('shape');

    var txt1a = document.getElementById('txt1a');
    var txt1b = document.getElementById('txt1b');

    var txt2a = document.getElementById('txt2a');
    var txt2b = document.getElementById('txt2b');
    var txt2c = document.getElementById('txt2c');

    var logo = document.getElementById('logo');

    var cta = document.getElementById('cta');

    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});

        t.set(txt1a, {scale:.5, transformOrigin: "50% 50%"});
        t.set(txt1b, {scale:.5, transformOrigin: "50% 50%"});

        t.set(logo, {scale:.5, transformOrigin: "50% 50%"});
        t.set(cta, {scale:.75, transformOrigin: "50% 50%"});

        t.set(shape1, {x:-100, y:-86, svgOrigin: "50% 50%"});
        t.set(shape2, {x:-260, y:160, svgOrigin: "50% 50%"});
        t.set(shape3, {x:-50, y:200, svgOrigin: "50% 50%"});
        t.set(shape4, {x:-300, y:-250, svgOrigin: "50% 50%"});
        t.set(shape5, {x:-260, y:-300, svgOrigin: "50% 50%"});
        t.set(shape6, {x:-250, y:-110, svgOrigin: "50% 50%"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .1, {borderColor:"rgba(255, 255, 255, 1)"});
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {borderColor:"rgba(255, 255, 255, 0)"});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tl1.to(shape1, 6, {x:-130, y:-43, ease: Cubic.easeOut})
            .to(shape1, 2, {autoAlpha: 1}, "-=6")
            .to(shape1, 2, {autoAlpha: 0}, "-=2")

            .to(shape2, 6, {x:-227, y:145, ease: Cubic.easeOut}, "-=5")
            .to(shape2, 2, {autoAlpha: 1}, "-=6")
            .to(shape2, 2, {autoAlpha: 0}, "-=2")

            .to(shape3, 6, {x:-150, y:250, ease: Cubic.easeOut}, "-=5")
            .to(shape3, 2, {autoAlpha: 1}, "-=6")
            .to(shape3, 2, {autoAlpha: 0}, "-=2")

            .to(shape4, 6, {x:-327, y:-200, ease: Cubic.easeOut}, "-=5")
            .to(shape4, 2, {autoAlpha: 1}, "-=6")
            .to(shape4, 2, {autoAlpha: 0}, "-=2")

            .to(shape5, 6, {x:-211, y:-382, ease: Cubic.easeOut}, "-=5")
            .to(shape5, 2, {autoAlpha: 1.75}, "-=6")

            .to(shape6, 6, {x:-181, y:-95, ease: Cubic.easeOut}, "-=5")
            .to(shape6, 2, {autoAlpha: .75}, "-=6");



        tl2.to(txt1a, .75, {y:"+=12", scale:1, opacity:1, ease: Cubic.easeInOut}, "+=.5")

            .to(txt1a, .5, {y:0, ease: Cubic.easeInOut}, "+=1.5")
            .to(txt1b, .75, {scale:1, opacity:1, ease: Cubic.easeInOut}, "-=.3")

            .to(txt1a, .5, {opacity:0}, "+=2")
            .to(txt1b, .5, {opacity:0}, "-=.5")

            .from(txt2a, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})
            .from(txt2b, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})
            .from(txt2c, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})

            .to(txt2a, .5, {opacity:0}, "+=2")
            .to(txt2b, .5, {opacity:0}, "-=.5")
            .to(txt2c, .5, {opacity:0}, "-=.5")

            .to(logo, .75, {scale:1, opacity:1, ease: Cubic.easeInOut}, "-=.3")
            .to(cta, .75, {scale:1, opacity:1, ease: Cubic.easeInOut}, "-=.3");
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
