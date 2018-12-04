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
        t.set(txt2a, {transformOrigin: "30% 80%"});
        t.set(txt2b, {transformOrigin: "50% 80%"});

        t.set(shape1, {scale:1, x:-50, y:-50, svgOrigin: "50% 50%"});
        t.set(shape2, {scale:.4, x:-185, y:-175, svgOrigin: "50% 50%"});
        t.set(shape3, {scale:.4, x:-110, y:-100, svgOrigin: "50% 50%"});
        t.set(shape4, {scale:.4, x:-190, y:-160, svgOrigin: "50% 50%"});

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

        tl1.to(shape1, 6, {scale: 1.6, x:-130, y:-43, ease: Cubic.easeIn})
            // .to(shape1, 2, {autoAlpha: .8}, "-=6")
            .to(shape1, 2, {autoAlpha: 0}, "-=2")

            .to(shape2, 6, {scale: 1, x:-227, y:145, ease: Cubic.easeIn}, "-=3")
            .to(shape2, 2, {autoAlpha: .8}, "-=6")
            .to(shape2, 2, {autoAlpha: 0}, "-=2")

            .to(shape3, 6, {scale: 1, x:-11, y:74, ease: Cubic.easeInOut}, "-=3")
            .to(shape3, 2, {autoAlpha: .8}, "-=6")
            // .to(shape3, 2, {autoAlpha: 0}, "-=2")

            .to(shape4, 6, {scale: 1, x:-327, y:-292, ease: Cubic.easeInOut}, "-=3")
            .to(shape4, 2, {autoAlpha: .8}, "-=6");
            // .to(shape4, 2, {autoAlpha: 0}, "-=2");


        tl2.to(txt1, 1, {opacity:1}, "+=.5")
            .to(txt2a, 1, {opacity:1})
            .from(txt2a, 2, {scale:.2, ease: Cubic.easeIn}, "-=1")

            .from(txt2a, 1, {x: "+=60", ease: Cubic.easeInOut}, "+=1")
            .to(txt2b, 1, {opacity: 1}, "-=.5")
            .from(txt2b, 2, {scale:.2, ease: Cubic.easeIn}, "-=1")

            .to(cta, .5, {opacity: 1}, "+=.5")
            .from(logo1, 1, {y:"+=20", ease: Cubic.easeInOut}, "+=1")
            .from(logo2a, 1, {y:"+=20", opacity:0, ease: Cubic.easeInOut}, "-=.5")
            .from(logo2b, 1, {y:"+=20", opacity:0, ease: Cubic.easeInOut}, "-=.5")
            .from(logo2c, 1, {y:"+=20", opacity:0, ease: Cubic.easeInOut}, "-=.5");
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
