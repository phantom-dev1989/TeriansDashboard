/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var teriansLogo = function () {

        return {
            restrict: 'E',
            template: ' <img id="logo-wrapper" class="img-responsive" ng-src="src/resources/img/terians-logo.png" />',
            replace: true
        };

    };

    module.directive("teriansLogo", teriansLogo);

}(angular.module("app")));