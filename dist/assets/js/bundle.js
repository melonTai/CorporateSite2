"use strict";

$(document).ready(function () {
  $('.js-single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>'
  });
});
"use strict";

$(function () {
  var bar = $("#header-bar");
  var nav = $("#js-header-nav");
  var overlay = $("#overlay");
  bar.click(function () {
    $(this).toggleClass("on");
    nav.toggleClass('isOpened');
    overlay.toggleClass('isOpened');
  });
  overlay.click(function () {
    if (overlay.hasClass('isOpened')) {
      bar.removeClass("on");
      nav.removeClass('isOpened');
      overlay.removeClass('isOpened');
    }
  });
});