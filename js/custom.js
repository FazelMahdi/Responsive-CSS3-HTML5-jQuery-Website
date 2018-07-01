$(document).ready(function () {

    $("#owl-slideshow").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        rtl: true,
        loop: true,
        merge: true,
        center: true,
        responsive: {
            700: {
                items: 2
            },
            400: {
                items: 1
            }
        }
    });

    // $("#slider_prev").click(owlCarousel.navigation())

    var owl = $('.owl-carousel');
    $("#slider_next").on("click", function () {
        owl.trigger('next.owl.carousel');
    });

    $("#slider_prev").on("click", function () {
        owl.trigger('prev.owl.carousel');
    });
});
$(document).ready(function () {
    $("#owl-clubs").owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    $("#menu-icon").click(function(){
        $("nav ul").css("display", "block");
    });
}); 


  