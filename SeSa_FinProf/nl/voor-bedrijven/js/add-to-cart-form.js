(function ($, Drupal) {

  /**
   * Provides plus and minus buttons on product quantity field.
   */
  Drupal.behaviors.productQuantityIncrement = {
    attach: function (context, settings) {

      // Product add to cart form
      $(".commerce-order-item-add-to-cart-form .field--name-quantity").once('productQuantityDecrement').prepend('<div class="dec spinner-button">-</div>');
      $(".commerce-order-item-add-to-cart-form .field--name-quantity").once('productQuantityIncrement').append('<div class="inc spinner-button">+</div>');

      $(".spinner-button").once().click(function () {
        var $button = $(this);
        var oldValue = parseFloat($button.parent().find("input").val());
        var step = parseFloat($button.parent().find("input").attr('step'));
        var min = parseFloat($button.parent().find("input").attr('min'));

        if ($button.text() === "+") {
          var newVal = oldValue + step;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0 && oldValue > min) {
            var newVal = oldValue - step;
          } else if(min) {
            console.log('here');
            newVal = min;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);

      });
    }
  };
})(jQuery, Drupal);

