$(document).ready(function () {
    var windowWidth = $(window).width();
    $(".triangle").css({
        "border-top": windowWidth / 2 + 'px solid rgba(255, 204, 0, 1)'
    });
    $(".triangle").css({
        "border-right": windowWidth / 1.5 + 'px solid transparent'
    });
});

$(window).resize(function () {
    var windowWidthR = $(window).width();
    $(".triangle").css({
        "border-top": windowWidthR / 2 + 'px solid rgba(255, 204, 0, 1)'
    });
    $(".triangle").css({
        "border-right": windowWidthR / 1.5 + 'px solid transparent'
    });
});
