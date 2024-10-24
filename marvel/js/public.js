$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 600) {
            $(".backtop").stop().fadeIn();
        }
        else
            $(".backtop").stop().fadeOut();
    });

    $(".backtop").click(function () {
        $("html, body").stop().animate({ scrollTop: 0 });
    });
});