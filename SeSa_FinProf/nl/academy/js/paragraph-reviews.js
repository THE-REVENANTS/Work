(($, Drupal) => {
  'use strict';

  Drupal.behaviors.reviewsCarousel = {
    attach(context) {
      $('.reviews-overview').once('reviewsCarousel').slick({
        centerMode: false,
        slidesToShow: 3,
        centerPadding: '20px',
        appendArrows: $('.reviews-overview').closest('.paragraph').find('.slick-arrows'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 620,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '45px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  };
})(jQuery, Drupal);
