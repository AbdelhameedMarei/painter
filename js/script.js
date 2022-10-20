$(function(){
    "use strict";


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
            $('.nav-link').addClass('sticky-padding');
        } else {
            $('.navbar').removeClass('sticky-top');
            $('.nav-link').removeClass('sticky-padding');
        }
    });


    // Scroll To TOP
    $(window).on("scroll",  function (){

        var sc  =  $(window).scrollTop();

        if( sc >= 800 ){
            $('.top-btn').fadeIn();
        }else {
            $('.top-btn').fadeOut();
        }

        $('.top-btn').click(function()  {
            $(window).scrollTop({});
        });
    });


    // OWL-CAROUSEL
    $('.owl-carousel').owlCarousel({
        rtl:false,
        loop:true,
        nav:true,
        navText : [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


  })//End jQuery;