const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

$(document).ready(function(){
    $(".btn-blog1").click(function(){
        $(".btn-blog1").toggleClass("active1")
    });
});
$(document).ready(function(){
    $(".btn-blog2").click(function(){
        $(".btn-blog2").toggleClass("active2")
    });
});
$(document).ready(function(){
    $(".btn-blog3").click(function(){
        $(".btn-blog3").toggleClass("active3")
    });
});
$(document).ready(function(){
    $(".btn-blog4").click(function(){
        $(".btn-blog4").toggleClass("active4")
    });
});
$(document).ready(function(){
    $(".btn-blog5").click(function(){
        $(".btn-blog5").toggleClass("active5")
    });
});
$(document).ready(function(){
    $(".btn-blog6").click(function(){
        $(".btn-blog6").toggleClass("active6")
    });
});



