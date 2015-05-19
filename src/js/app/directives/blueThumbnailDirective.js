/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.directive("teriansBlueThumbnail", teriansBlueThumbnail);

    function teriansBlueThumbnail() {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/html/partials/directives/teriansBlueThumbnail.html',
            scope: {
                textLarge: "@",
                textSmall: "@"
            },
            controller: ['$scope', function ($scope) {
                $scope.getTextLarge = function () {
                    return $scope.textLarge;
                };

                $scope.getTextSmall = function () {
                    return $scope.textSmall;
                };
            }]
        };
    };

}(angular.module("app")));