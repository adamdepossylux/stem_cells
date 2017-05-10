(function($) {
    var pasteurHighlightBlockSelectChange = function() {
        var select = $(this),
            selected = select.val();
        $('option', select).each(function() {
            select.toggleClass('value-' + $(this).attr('value'), ($(this).attr('value') == selected));
        });
    };
    
    Drupal.behaviors.pasteurHighlightBlock = {
        attach: function (context, settings) {
            $('.pasteur-highlight-block-type-select').each(function() {
                $.proxy(pasteurHighlightBlockSelectChange, this)();
            });
            $('.pasteur-highlight-block-type-select').change(pasteurHighlightBlockSelectChange);
        },
        detach: function (context, settings) {
            $('.pasteur-highlight-block-type-select').unbind('change', pasteurHighlightBlockSelectChange);
        }
    };
})(jQuery);