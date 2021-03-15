$(document).ready(function () {
  "use strict";

  AOS.init();

  if ($(".our-worke")) {
    $(" .our-worke .owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      arrows: true,
      animateOut: 'fadeOut',
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
          loop: false,
        },
      },
    });
  }

});
