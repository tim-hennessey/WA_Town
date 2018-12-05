var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();


    var shape1 = document.getElementById('shape1');
    var shape2 = document.getElementById('shape2');
    var shape3 = document.getElementById('shape3');
    var shape4 = document.getElementById('shape4');
    var shape = document.getElementsByClassName('shape');

    var txt1 = document.getElementById('txt1');
    var txt2a = document.getElementById('txt2a');
    var txt2b = document.getElementById('txt2b');

    var logo1 = document.getElementById('logo1');
    var logo2a = document.getElementById('logo2a');
    var logo2b = document.getElementById('logo2b');
    var logo2c = document.getElementById('logo2c');

    var cta = document.getElementById('cta');

    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});
        t.set(txt1, {scale:.5, transformOrigin: "50% 100%"});
        t.set(txt2a, {scale:.5, transformOrigin: "30% 100%"});
        t.set(txt2b, {scale:.5, transformOrigin: "50% 100%"});
        t.set(cta, {scale:.75, transformOrigin: "50% 50%"});

        t.set(shape1, {x:-50, y:-50, svgOrigin: "50% 50%"});
        t.set(shape2, {scale:.7, x:-50, y:-175, svgOrigin: "50% 50%"});
        t.set(shape3, {x:-110, y:-150, svgOrigin: "50% 50%"});
        t.set(shape4, {x:-300, y:-160, svgOrigin: "50% 50%"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .1, {backgroundColor: "rgba(242, 104, 39, .8)"});
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "rgba(242, 104, 39, 1)"});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tl1.to(shape1, 6, {x:-130, y:-43, ease: Cubic.easeInOut})
            .to(shape1, 1.5, {autoAlpha: 0}, "-=1.5")

            .to(shape2, 6, {x:20, y:-200, ease: Cubic.easeInOut}, "-=5")
            .to(shape2, 1.5, {autoAlpha: 1}, "-=6")
            .to(shape2, 1.5, {autoAlpha: 0}, "-=1.5")

            .to(shape3, 6, {x:-150, y:-250, ease: Cubic.easeInOut}, "-=5")
            .to(shape3, 1.5, {autoAlpha: 1}, "-=6")

            .to(shape4, 6, {x:-400, y:50, ease: Cubic.easeInOut}, "-=5")
            .to(shape4, 1.5, {autoAlpha: .15}, "-=6");


        tl2.to(txt1, 1.5, {scale:1, opacity:1, ease: Cubic.easeInOut}, "+=.5")
            .to(txt2a, 1.5, {scale:1, opacity:1, ease: Cubic.easeInOut}, "+=.5")

            .from(txt2a, 1, {x: "+=60", ease: Cubic.easeInOut}, "+=1")
            .to(txt2b, 1, {scale:1, opacity:1, ease: Cubic.easeInOut}, "-=.75")

            .to(cta, .75, {scale:1, opacity:1, ease: Cubic.easeInOut}, "+=.25")
            .from(logo1, 1, {y:"+=20", ease: Cubic.easeInOut}, "+=.3")
            .from(logo2a, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})
            .from(logo2b, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})
            .from(logo2c, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut});
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
