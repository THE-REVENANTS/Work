(($, Drupal) => {
  'use strict';

  Drupal.behaviors.coursesCarousel = {
    attach(context) {
      $('.courses-overview-carousel').once('coursesCarousel').slick({
        centerMode: false,
        slidesToShow: 3,
        centerPadding: '20px',
        appendArrows: $('.courses-overview-carousel').closest('.paragraph').find('.slick-arrows'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 620,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '45px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  };
})(jQuery, Drupal);
