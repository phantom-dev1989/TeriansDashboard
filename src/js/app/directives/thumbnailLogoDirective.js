/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var teriansThumbnailLogo = function () {

        return {
            restrict: 'E',
            template: ' <img id="logo-thumbnail-wrapper" class="img-responsive" ng-src="src/resources/img/terians-logo.png" />',
            replace: true
        };

    };

    module.directive("teriansThumbnailLogo", teriansThumbnailLogo);

}(angular.module("app")));