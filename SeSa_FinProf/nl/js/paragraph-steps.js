(($, Drupal) => {
  'use strict';

  Drupal.behaviors.stepsParagraph = {
    attach(context) {
      var $this = this;
      $this.checkWindowSize();

      $(window).on("resize", function() {
        // $this.checkWindowSize()
      });
    },
    checkWindowSize() {
      if ($(window).width() >= 900) {
        // Do Masonry
        /*try {
          $('.steps').slick('destroy');
        } catch (e) {
          console.log('no slick carousel');
        }*/

        $('.steps').masonry({
          itemSelector: '.step',
          columnWidth: '.step',
          horizontalOrder: true,
          percentPosition: true
        });
      } else {
        // Do Slick
        /*try {
          if($('.steps').data('masonry')) {
            $('.steps').masonry('destroy');
          }
        } catch (e) {
          console.log('no masonry');
        }*/

        var total = $('.steps .step').length; // get the number of slides

        $('.steps').slick({
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1,
          responsive: [
            {
              breakpoint: 800,
              settings: {
                centerPadding: '45px',
              }
            }
          ]
        });

        $('.steps').slick('slickRemove', total - 1);
      }
    }
  };
})(jQuery, Drupal);
