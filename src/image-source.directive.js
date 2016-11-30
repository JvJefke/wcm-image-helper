'use strict';

(function(angular) {
    angular.module('wcmImageHelper.directives')
        .directive('wcmImgSrc', [
            'wcmImageHelper',

            function(configuration) {
                return {
                    restrict: 'A',
                    scope: {
                        wcmImgSrc: '='
                    },
                    link: function($scope, element, attr) {
                        $scope.$watch('wcmImgSrc', function(newVal, oldVal) {
                            if(newVal) {
                                var url = configuration.serverPath + newVal;

                                if(configuration.apikey && configuration.tenant) {
                                    url += '?apikey=' + configuration.apikey + '&tenant=' + configuration.tenant;
                                }

                                element.attr('src', url);
                            }
                        });
                    }
                };
            }]);
})(window.angular);
