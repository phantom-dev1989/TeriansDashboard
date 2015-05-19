/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.directive("teriansThumbnailLogo", teriansThumbnailLogo);

    function teriansThumbnailLogo() {

        return {
            restrict: 'E',
            template: ' <img id="logo-thumbnail-wrapper" class="img-responsive" ng-src="src/resources/img/terians-logo.png" />',
            replace: true
        };

    };


}(angular.module("app")));