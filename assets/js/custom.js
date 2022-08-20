/*===============
Project Name: Sarto Web Design Template
Developed By: Rammo Paul
Project Created: 19 August 2022
================*/

// Pre Loader Start **/
function preloader() {
    $('#preloader').delay(1000).fadeOut();
};

$(window).on('load', function () {
    preloader(),
    wowanimation();
});
// Pre Loader End **/

/**== Navabar script related */
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('fixed');
    } else {
    $('.navbar').removeClass('fixed');
    }
  });
// End Navabar

// hero-slider
$('.hero-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
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
})

// feature-carousel
$('.feature-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
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
})


