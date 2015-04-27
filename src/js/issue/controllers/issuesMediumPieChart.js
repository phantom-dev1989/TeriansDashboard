/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    var issuesMediumPieChartCtrl = function ($scope, issuesChartSvc) {

        var data = issuesChartSvc.transformforPIEChart($scope.issues);

        $scope.title = {
            text: 'Top Medium Issues'
        };

        $scope.tooltip = {
            pointFormat: '<b>Issue Count</b>: {point.y}'
        };

        $scope.data = [{
            type: 'pie',
            data: data
        }];

    };

    module.controller("issuesMediumPieChartCtrl", issuesMediumPieChartCtrl);

}(angular.module("app")));