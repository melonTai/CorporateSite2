$(document).ready(function() {
    $('.js-single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000,
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
    });
});
