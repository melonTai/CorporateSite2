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
/*$(document).ready(function() {
	$('body *').removeAttr('style');
    $('body *').removeAttr('width');
	$('body *').removeAttr('height');
});*/
"use strict";
"use strict";

$(document).ready(function () {
  $('#js-slider-Top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    speed: 1000,
    nextArrow: '<div class="slick-arrow slick-next"></div>',
    prevArrow: '<div class="slick-arrow slick-prev"></div>',
    appendArrows: $('.Top .arrows')
  });
  $('#js-slider-Blog').slick({
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: '<div class="slick-arrow slick-next"></div>',
    prevArrow: '<div class="slick-arrow slick-prev"></div>',
    appendArrows: $('.Blog .arrows')
    /*responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '200px',
            }
        },
    ]*/

  }); //$('body *').removeAttr('style');
});