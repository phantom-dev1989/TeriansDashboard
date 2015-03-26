/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var dashboardCtrl = function ($scope) {

        $(window).resize();
        $scope.project = "Webgoat 5.4";

    };

    module.controller("dashboardCtrl", dashboardCtrl);

}(angular.module("app")));