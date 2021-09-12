$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.png"></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        }]
    });
});