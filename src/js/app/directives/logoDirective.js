/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.directive("teriansLogo", teriansLogo);

    function teriansLogo() {

        return {
            restrict: 'E',
            template: ' <img id="logo-wrapper" class="img-responsive" ng-src="src/resources/img/terians-logo.png" />',
            replace: true
        };

    };

}(angular.module("app")));