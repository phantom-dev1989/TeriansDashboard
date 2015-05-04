/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    module.controller("issuesCriticalPieChartCtrl", issuesCriticalPieChartCtrl);

    issuesCriticalPieChartCtrl.$inject = ['$scope','issuesChartSvc'];

    function issuesCriticalPieChartCtrl($scope, issuesChartSvc) {

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

}(angular.module("app")));