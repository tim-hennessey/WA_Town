var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();

    var bg1 = document.getElementById('bg1');
    var bg2 = document.getElementById('bg2');
    var bg3 = document.getElementById('bg3');
    var bg4 = document.getElementById('bg4');
    var bg5 = document.getElementById('bg5');

    var txt2a = document.getElementById('txt2a');
    var txt2b = document.getElementById('txt2b');

    var logo1 = document.getElementById('logo1');
    var logo2 = document.getElementById('logo2');

    var cta = document.getElementById('cta');

    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});

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
        tl1.to(bg2, 2, {opacity:1}, "+=1")
            .to(bg3, 2, {opacity:1})
            .to(bg4, 2, {opacity:1})
            .to(bg5, 2, {opacity:1});

        tl2.to(txt2a, 1, {opacity:1}, "+=1")
            .from(txt2a, 1, {x: "+=60", ease: Cubic.easeInOut}, "+=1")
            .to(txt2b, 1, {opacity: 1}, "-=.5")
            .to(cta, .5, {opacity: 1}, "+=.5")
            .from(logo1, 1, {y:"+=20", ease: Cubic.easeInOut}, "+=1")
            .from(logo2, 1, {y:"+=20", opacity:0, ease: Cubic.easeInOut}, "-=1");
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
