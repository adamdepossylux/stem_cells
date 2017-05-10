(function ($) {
  Drupal.behaviors.pasteur_don = {
    attach: function (context, settings) {
	 
      var slider = $('.panes_cover').bxSlider({
    	   displaySlideQty: 1,
           pause : 5000,
           pagerSelector: '.list_pagination_home',
           auto: true,
           pager: true,
           infiniteLoop: false
      });
   /*   $('.pagination_container a').click(function(){
        var thumbIndex = $('.pagination_container a').index(this);
        // call the "goToSlide" public function
        slider.goToSlide(thumbIndex);
  
        // remove all active classes
        $('.pagination_container img').attr('src', '/' + Drupal.settings.pathToTheme + '/images/contenus/picto_white.png');
        // assisgn "pager-active" to clicked thumb
        $(this).children('img').attr('src', '/' + Drupal.settings.pathToTheme + '/images/contenus/picto_purple.png');
        // very important! you must kill the links default behavior 
        return false;
      });
*/
      
	  var value = $('input[name=fix_donation]:checked').val();
      Drupal.pasteur_don.update_discount(value);
	  $('input[name=fix_donation]').click(function(){
        var value = $('input[name=fix_donation]:checked').val();
        Drupal.pasteur_don.update_discount(value);
      });
   

      $('#edit-variable-donation').keyup(function(){
    	var value = $(this).val();
        if (isNaN(value) == false && value != '') {
          Drupal.pasteur_don.update_discount(value);
        }
        else {
          var discount = $('#pasteur-don-form .discount');
          if (discount.length > 0) {
            discount.html('0.00');
          }
        }
      });
    }
  };

  Drupal.pasteur_don = {
    compute_discount: function(donation) {
	  return (donation-(donation*0.66)).toFixed(2);
    },
    update_discount: function(value) {
      var discount = $('#pasteur-don-form .discount');
      if (discount.length > 0) {
        discount.html(Drupal.pasteur_don.compute_discount(value) + '€');
      }
      else {
        var text = '<div class="tax_exemption_label">' + Drupal.t('<span class="discount">@discount</span> tax exemption', {'@discount':  + Drupal.pasteur_don.compute_discount(value)+'€'}) + '</div>';
        $('#pasteur-don-form fieldset div:first').after(text);
      }
    }
  };

})(jQuery);