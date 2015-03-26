/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var teriansBlueThumbnail = function () {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/html/partials/directives/teriansBlueThumbnail.html',
            scope: {
                textLarge: "@",
                textSmall: "@"
            },
            controller: function ($scope) {
                $scope.getTextLarge = function () {
                    return $scope.textLarge;
                };

                $scope.getTextSmall = function () {
                    return $scope.textSmall;
                };
            }

        };
    };

    module.directive("teriansBlueThumbnail", teriansBlueThumbnail);

}(angular.module("app")));