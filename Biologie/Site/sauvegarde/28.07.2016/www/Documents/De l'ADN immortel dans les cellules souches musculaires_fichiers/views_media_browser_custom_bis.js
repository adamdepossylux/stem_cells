(function ($) {
    Drupal.behaviors.viewsMediaBrowserCustomCheck = {
        attach: function (context, settings) {
            var media_browser = $('.view-views-media-browser.view-display-id-browser_thumbs');
            if (media_browser.length > 0) {
                $('.media-thumbnail', media_browser).each(function() {
                    // Retrait de tous les liens
                    $(this).unbind('click');
                    $('a', this).unbind('click');
                    
                    // L'input est masqué pour éviter de by-passer l'évènement standard
                    $('.thumbnail', this).prepend('<div class="form-type-checkbox-token"></div>');
                    
                    // Coloration de la case selon ce qui est choisi
                    $('.vbo-select.form-checkbox', this).change(function () {
                        $(this).parents('.media-thumbnail').first().toggleClass('selected');
                    });
                    
                    // Activation de la checkbox au click
                    $(this).click(function(e) {
                        $('.vbo-select.form-checkbox', this)
                            .attr('checked', !$('.vbo-select.form-checkbox', this).attr('checked'))
                            .change();
                    });
                });
            }
        }
    };
    
    Drupal.behaviors.viewsMediaBrowserCustomDialog = {
        attach: function (context, settings) {
            $('a.media-custom-launcher').click(function () {
                var options = {
                    disabledPlugins: ["library"],
                    multiselect: true
                };
                Drupal.media.popups.mediaBrowser(function (mediaFiles) {
                    parent.window.location.reload();return false;
                }, options);
                return false;
            });
        }
    };
})(jQuery);