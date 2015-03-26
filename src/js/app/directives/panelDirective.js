(function (module) {

    var teriansPanel = function () {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'src/html/partials/directives/teriansPanel.html',
            scope: {
                title: "@",
                icon: "@"
            },
            controller: function ($scope) {
                $scope.getTitle = function () {
                    return $scope.title;
                };

                $scope.getIcon = function () {
                    return $scope.icon;
                };
            }

        };

    };

    module.directive("teriansPanel", teriansPanel);

}(angular.module("app")));
