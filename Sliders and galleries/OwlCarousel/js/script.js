$(document).ready(function(){
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
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});