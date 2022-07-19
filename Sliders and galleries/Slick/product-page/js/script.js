$(document).ready(function (){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $(function(){
        $('.slider-big').izoomify();
    });
    $('.slider-big-item').izoomify({
        magnify: 3.5,
        duration: 300,
    });
});