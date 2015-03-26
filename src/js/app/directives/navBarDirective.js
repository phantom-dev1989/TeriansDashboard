(function (module) {

    var teriansNavBar = function () {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/html/partials/directives/teriansNavBar.html'
        };

    };

    module.directive("teriansNavBar", teriansNavBar);

}(angular.module("app")));
