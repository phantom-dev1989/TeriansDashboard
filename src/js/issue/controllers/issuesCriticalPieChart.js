/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    var issuesCriticalPieChartCtrl = function ($scope, issuesChartSvc) {

        var data = issuesChartSvc.transformforPIEChart($scope.issues);

        $scope.title = {
            text: 'Top Critical Issues'
        };

        $scope.tooltip = {
            pointFormat: '<b>Issue Count</b>: {point.y}'
        };

        $scope.data = [{
            type: 'pie',
            data: data
        }];

    };

    module.controller("issuesCriticalPieChartCtrl", issuesCriticalPieChartCtrl);

}(angular.module("app")));