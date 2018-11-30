var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();

    // var bg1 = document.getElementById('bg1');
    // var bg2 = document.getElementById('bg2');
    // var bg3 = document.getElementById('bg3');
    // var bg4 = document.getElementById('bg4');
    // var bg5 = document.getElementById('bg5');

    var shape1 = document.getElementById('shape1');
    var shape2 = document.getElementById('shape2');

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

        t.set(shape1, {transformOrigin: "50% 0%"});
        t.set(shape2, {transformOrigin: "50% 0%"});

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
        tl1.to(shape1, 6, {scale:2, ease: Cubic.easeInOut}, "+=.5")
            .to(shape2, 6, {scale:2, ease: Cubic.easeInOut}, "-=6")

            .to(shape1, 1, {opacity:0}, "-=3")
            .to(shape2, 1, {opacity:0}, "-=3");



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
