$(document).ready(function (){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow:3,
        slidesToScroll:1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide:0,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                }
            }
        ],

    });
});
