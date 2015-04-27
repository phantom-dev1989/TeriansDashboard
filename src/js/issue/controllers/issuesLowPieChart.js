/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    var issuesLowPieChartCtrl = function ($scope, issuesChartSvc) {

        var data = issuesChartSvc.transformforPIEChart($scope.issues);

        $scope.title = {
            text: 'Top Low Issues'
        };

        $scope.tooltip = {
            pointFormat: '<b>Issue Count</b>: {point.y}'
        };

        $scope.data = [{
            type: 'pie',
            data: data
        }];

    };

    module.controller("issuesLowPieChartCtrl", issuesLowPieChartCtrl);

}(angular.module("app")));