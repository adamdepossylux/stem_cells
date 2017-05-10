(function($) {
    Drupal.behaviors.pasteurInternational = {
        attach: function (context, settings) {       
            // Diaporama 
            function getSlideshow() {
                $('.slideshow').each(function (index, slideshow) {
                    if ($('.slide', slideshow).length > 1) {
                        $('.slider', slideshow)
                            .append('<nav class="slideshow-arrows"><span id="slider-prev"></span><span id="slider-next"></span></nav>')
                            .append('<nav class="slider--pagination"></nav>');
                    }
                    window.mySlider = $('.slider', slideshow).cycle({
                        slideExpr: '.slide',
                        slideResize: true,
                        containerResize: false,
                        width: $('.slider', slideshow).width(),
                        fx: 'scrollHorz',
                        speed: 1000,
                        timeout: 3000,
                        prev: '#slider-prev',
                        next: '#slider-next',
                        pager: $('.slider--pagination', slideshow),
                        fit: 1,
                        height: 'auto'
                    });
                });
            }

            getSlideshow();

            var resizeId;
            $(window).resize(function() {
                clearTimeout(resizeId);
                resizeId = setTimeout(doneResizing, 500);
            });

            function doneResizing(){
                window.mySlider.cycle('destroy');
                $('.slideshow-arrows').remove();
                $('.slider--pagination').remove();
                $('.slider').css('width', '');
                $('.slider .slide').css('width', '');
                getSlideshow();
            }



            // Diaporama wysiwyg
            $('.pasteur-slideshow-wysiwyg, .pasteur-slideshow-wysiwyg-mini').each(function(index, slideshow) {
                if ($('> img, > a', slideshow).length > 0) {
                    $(slideshow).css('height', $('> img, > a', slideshow).first().height());
                    $('> img, > a', slideshow).css('display', 'block');
                    $(slideshow).append('<nav class="pasteur-slides-pager">')
                    $(slideshow).cycle({
                        slideExpr: '> img, > a',
                        pager: $('.pasteur-slides-pager', slideshow),
                        slideResize: false,
                        containerResize: false,
                        width: $(slideshow).width(),
                        pause: true,
                        pauseOnPagerHover: true,
                        fx: 'scrollLeft',
                        before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
                            $(this).parents('.pasteur-slideshow-wysiwyg, .pasteur-slideshow-wysiwyg-mini').first().stop(false, true).animate({'height': $(nextSlideElement).height()});
                        }
                    });
                }
            });
        }
    };
})(jQuery);