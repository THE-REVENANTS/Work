/**
 * @file
 * SeSa FinProf theme javascript behaviors.
 *
 */
(function ($, Drupal) {
  /**
   * Stores utm url-parameters to cookie so we can use it on form submit
   */
  Drupal.behaviors.pageLoad = {
    attach: function (context, settings) {
      var utm_source = this.getUrlParameter('utm_source');
      var utm_medium = this.getUrlParameter('utm_medium');
      var utm_campaign = this.getUrlParameter('utm_campaign');
      if(utm_source) {
        console.log(utm_source);
        $.cookie('utm_source', utm_source, { expires : 2 });
      }
      if(utm_medium) {
        $.cookie('utm_medium', utm_medium, { expires : 2 });
      }
      if(utm_campaign) {
        $.cookie('utm_campaign', utm_campaign, { expires : 2 });
      }
    },
    getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
      return false;
    }
  };
  /**
   * Events on the right off canvas container.
   */
  Drupal.behaviors.revealMenu = {
    attach: function (context, settings) {
      // Apply is-active class to menu toggle button when the off canvas is open.
      $('#reveal-menu')
        .on('open.zf.reveal', function (e) {
          $('button[data-toggle="reveal-menu"]').addClass('is-active');
        })
        .on('closed.zf.reveal\t', function (e) {
          $('button[data-toggle="reveal-menu"]').removeClass('is-active');
        })
      ;
    }
  };
  /**
   * Events on the right off canvas container.
   */
  Drupal.behaviors.headerVideo = {
    attach: function (context, settings) {
      $('#pageHeaderVideoReveal').on('open.zf.reveal', function(e) {
        $(this).find('.video-embed-field-lazy-play').trigger('click');
      });
      $('#pageHeaderVideoReveal').on('closed.zf.reveal', function(e) {
        // stop the video
        var $theSource = $(this).find('iframe').attr('src');
        $(this).find('iframe').attr('src', $theSource);
      });
    }
  };

  /**
   * Scroll to anchor
   */
  Drupal.behaviors.scrollToAnchor = {
    attach: function (context, settings) {
      $('a').once('scrollToAnchor').click(function(e) {
        if(!$(this).hasClass('accordion-title')) {
          var href = $(this).attr('href');
          if(/^#/.test(href)) {
            var aid = $(this).attr("href");
            aid = aid.replace('/', '');

            if(aid !== "#") {
              $('html,body').animate({scrollTop: $(aid).offset().top - 50},'slow');
            }

          }
        }
      });
    }
  }

  Drupal.behaviors.scrollToTop = {
    attach: function (context, settings) {
      $('.scroll-to-top').once('scrollToTop').click(function(e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
          $('.scroll-to-top').css('opacity', 1)
        } else {
          $('.scroll-to-top').css('opacity', 0)
        }
      });
    }
  };

  /**
   * Events on the right off canvas container.
   */
  Drupal.behaviors.rightOffCanvasBehaviour = {
    attach: function (context, settings) {
      $('#right-off-canvas-menu ul.menu > li > a').click(function(e){
        $('#right-off-canvas-menu').foundation('close');
      });
    }
  };

  /**
   * Scroll to anchor
   */
  Drupal.behaviors.jobOfferDetail = {
    attach: function (context, settings) {
      $('.job-cta').each(function(i, cta){
        $(cta).once('job-cta').click(function(e) {
          e.preventDefault();

          $([document.documentElement, document.body]).animate({
            scrollTop: $('#job-apply-form').offset().top - 50
          }, 1000);
        })
      });
    }
  }

  /**
   * Checkout
   */
  Drupal.behaviors.checkout = {
    attach: function (context, settings) {
      // Hide PO Number field when needed.
      $('.checkout-pane-po-number').each(function(i, cta){
        if($('input[id^="edit-payment-information-payment-method-post-payment"]').is(':checked')) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

      // Toggle the giftcard redemption form.
      $('a.toggle-giftcard').click(function(e) {
        e.preventDefault();

        $(this).addClass('hide');

        $('.checkout-pane-commerce-giftcard-redemption').addClass('is-visible');

        return false;
      });
    }
  }

  /**
   * Form inline field labels
   */
  Drupal.behaviors.inlineFieldLabels = {
    attach: function (context, settings) {

      if($('form').length) {
        var formElements = $('form').find('.js-form-type-textfield input');
        formElements.push($('form').find('.js-form-type-tel input'));
        formElements.push($('form').find('.js-form-type-password input'));
        formElements.push($('form').find('.js-form-type-date input'));
        formElements.push($('form').find('.js-form-type-datetime input'));
        formElements.push($('form').find('.js-form-type-datetime-local input'));
        formElements.push($('form').find('.js-form-type-month input'));
        formElements.push($('form').find('.js-form-type-week input'));
        formElements.push($('form').find('.js-form-type-email input'));
        formElements.push($('form').find('.js-form-type-number input'));
        formElements.push($('form').find('.js-form-type-search input'));
        formElements.push($('form').find('.js-form-type-tel input'));
        formElements.push($('form').find('.js-form-type-time input'));
        formElements.push($('form').find('.js-form-type-url input'));
        formElements.push($('form').find('.js-form-type-color input'));
        formElements.push($('form').find('.js-form-type-textarea textarea'));

        $.each(formElements, function (i, field) {
          var $field = $(field).closest('.form-item');
          if ($(field).val()) {
            $field.addClass('not-empty');
          } else {
            $field.removeClass('not-empty');
          }

          $(field).on('input', function(ev) {
            var $field = $(this).closest('.form-item');
            if (this.value) {
              $field.addClass('not-empty');
            } else {
              $field.removeClass('not-empty');
            }
          });
        });
      }
    }
  };

  /**
   * Mobile menu
   */
  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {
      $(context).find('ul.menu li.is-parent').find('.mobile-dropdown-trigger').click(function(e) {
        $(this).toggleClass('active')
        $(this).closest('.is-parent').children('.menu').slideToggle(200);
      });
    }
  };

  /**
   * Prevent click in menu if href attribute is empty
   */
  Drupal.behaviors.userMenuPrevent = {
    attach: function (context, settings) {
      $(context).find('.block-user-menu').find('a').click(function(e) {
        if(!$(this).attr('href')) {
          e.preventDefault();
        }
      });
    }
  };

})(jQuery, Drupal);
