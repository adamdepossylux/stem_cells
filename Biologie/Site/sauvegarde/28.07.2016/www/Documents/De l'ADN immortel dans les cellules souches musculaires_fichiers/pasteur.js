(function($) {
    $.fn.equalHeights = function() {
        this.each(function() {
            var thisHeight = $(this).height();
            var thisHeight = $(this).height();
            var nextHeight = $(this).next().height();
            // if($(this).height() > tallest) {
            //     tallest = $(this).height();
            // }
            var highest = (thisHeight > nextHeight)? thisHeight : nextHeight;
            $(this).height(highest);
            $(this).next().height(highest);
        });
        // if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
        // return this.each(function() {
        // $(this).height(tallest).css("overflow","auto");
        // });
        }
})(jQuery);

jQuery(document).ready(function($) {
    // Pour les img SVG
     /*
     * Replace all SVG images with inline SVG
     */
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

    //  Pour le slider 
    $('.bloc-slider-rub--slider > ul').cycle({
        prev:$('#bloc-slider-rub--prev'),
        next:$('#bloc-slider-rub--next'),
        fx:      'scrollLeft'

    });
    
    // $('.bloc-agenda').equalHeights();


    /**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 * 
 * Version 1.0
 * Updated 12/10/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 * 
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 * 
 */
});