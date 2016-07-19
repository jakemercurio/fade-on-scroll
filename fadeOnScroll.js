(function() {
    'use strict';

    $(document).ready(function() {

        var $elementsToFade = $('.fade-on-scroll');

        if (!$elementsToFade.length) {
            /* don't bind listener if element doesn't exist */
            return;
        }

        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop() || 1;

            $elementsToFade.each(function() {
                var $elementToFade = $(this);
                var elementHeight = $elementToFade.height() || 1;
                var elementBottom = $elementToFade.offset().top + elementHeight;
                var opacity = 1 - scrollPosition / elementHeight;

                /* don't adjust opacity if element is above the current scroll position */
                if (scrollPosition < elementBottom && opacity >= 0) {
                    $elementToFade.css("opacity", opacity);
                }
            });
        });
        
    });

})();
