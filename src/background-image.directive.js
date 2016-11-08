'use strict';

(function(angular) {
    angular.module('wcmImageHelper.directives')
        .directive('wcmBgSrc', [

            'wcmImageHelper',

            function(configuration) {
                return {
                    restrict: 'A',
                    scope: {
                        wcmBgSrc: '='
                    },
                    link: function($scope, element, attr) {
                        $scope.$watch('wcmBgSrc', function(newVal, oldVal) {
                            if(newVal) {
                                var url = 'url(\'' + configuration.serverPath + newVal + '?apikey=' + configuration.apikey + '&tenant=' + configuration.tenant + '\')';
                                element.css('background-image', url);
                            }
                        });
                    }
                };
            }]);
})(window.angular);
