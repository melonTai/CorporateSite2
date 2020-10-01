$(function() {
    var bar = $("#header-bar");
    var nav = $("#js-header-nav");
    var overlay = $("#overlay");
    bar.click(function() {
        $(this).toggleClass("on");
        nav.toggleClass('isOpened');
        overlay.toggleClass('isOpened');
    });
    overlay.click(function() {
        if (overlay.hasClass('isOpened')) {
            bar.removeClass("on");
            nav.removeClass('isOpened');
            overlay.removeClass('isOpened');
        }
    });
});
