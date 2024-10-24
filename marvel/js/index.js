$(function () {
    $("#dyg").click(function () {
        $("html, body").stop().animate({ scrollTop: 0 });
    });
    $("#deg").click(function () {
        var length = $(".deg").offset().top - 46;
        $("html, body").stop().animate({ scrollTop: length });
    });
    $("#dsg").click(function () {
        var length = $(".dsg").offset().top - 46;
        $("html, body").stop().animate({ scrollTop: length });
    });
    $("#dsig").click(function () {
        var length = $(".dsig").offset().top - 46;
        $("html, body").stop().animate({ scrollTop: length });
    });
    $("#dwg").click(function () {
        var length = $(".dwg").offset().top - 46;
        $("html, body").stop().animate({ scrollTop: length });
    });
    $("#dlg").click(function () {
        var length = $(".dlg").offset().top - 46;
        $("html, body").stop().animate({ scrollTop: length });
    });
    $("#dqg").click(function () {
        var length = $(".dqg").offset().top - 46;
        $("html, body").stop().animate({ scrollTop: length });
    });
    $("#dbg").click(function () {
        var length = $(".dbg").offset().top;
        $("html, body").stop().animate({ scrollTop: length });
    });
});