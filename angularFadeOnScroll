(function () {
    'use strict';

    angular.module('FadeOnScroll')

        .directive('fadeOnScroll',['$window',function($window){
            return {
                restrict: "A",
                link: link
            };

            function link($scope, $element, $attributes){

                var height = $element.prop('scrollHeight');
                var topPosition = $element.prop('offsetTop');

                angular.element($window).bind("scroll", function() {

                    var scrollPosition = window.scrollY;
                    var opacity = 1 - (scrollPosition - topPosition) / height;
                    var opacityCorrected = Math.min(Math.max(opacity, 0), 1);
                    $element.css('opacity', opacityCorrected);
                });

                $scope.$on('destroy', function() {
                    angular.element($window).unbind('scroll');
                    $scope.$destroy();
                });
            }

        }]);

})();
