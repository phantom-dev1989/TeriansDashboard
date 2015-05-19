(function (module) {

    module.directive("teriansPanel", teriansPanel);

    function teriansPanel() {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'src/html/partials/directives/teriansPanel.html',
            scope: {
                title: "@",
                icon: "@"
            },
            controller:  ['$scope', function ($scope) {
                $scope.getTitle = function () {
                    return $scope.title;
                };

                $scope.getIcon = function () {
                    return $scope.icon;
                };
            }]

        };
    };
}(angular.module("app")));
