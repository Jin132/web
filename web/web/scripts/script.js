$(document).ready(function() {
    function invisible(){
        var slide1 = document.getElementsByClassName("slide1")[0];
        var slide2 = document.getElementsByClassName("slide2")[0];
        var dot1 = document.getElementsByClassName("dot1")[0];
        var dot2 = document.getElementsByClassName("dot2")[0];
        slide1.classList.toggle('invisible');
        slide2.classList.toggle('invisible');
        dot1.classList.toggle('invisible');
        dot2.classList.toggle('invisible');
    }
    let timerId = setTimeout(function tick() {
        invisible();
        timerId = setTimeout(tick, 4000);
    }, 4000);
    $(".slider").hover(function(){
        clearTimeout(timerId);
    },function() {
        timerId = setTimeout(function tick() {
            invisible();
            timerId = setTimeout(tick, 4000);
        }, 4000);
    });

    $("#enter").click(function( event ){
        event.preventDefault();
        $(".overlay").fadeToggle("fast");
    });

    $(".close").click(function(){
        $(".overlay").fadeToggle("fast");
    });

    $(".dots__dot-active").click(function (e) {
        if (this.classList.contains('invisible')){
            invisible();
        }
    });

    $(document).keyup(function(e) {
        if(e.keyCode === 27 && $(".overlay").css("display") !== "none" ) {
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});

