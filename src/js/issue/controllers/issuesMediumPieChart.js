/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    module.controller("issuesMediumPieChartCtrl", issuesMediumPieChartCtrl);

    issuesMediumPieChartCtrl.$inject = ['$scope','issuesChartSvc'];

    function issuesMediumPieChartCtrl($scope, issuesChartSvc) {

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

}(angular.module("app")));