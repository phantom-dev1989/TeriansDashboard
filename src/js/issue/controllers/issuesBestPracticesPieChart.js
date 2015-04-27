/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    var issuesBestPracticesPieChartCtrl = function ($scope, issuesChartSvc) {

        var data = issuesChartSvc.transformforPIEChart($scope.issues);

        $scope.title = {
            text: 'Top Best Practices Issues'
        };

        $scope.tooltip = {
            pointFormat: '<b>Issue Count</b>: {point.y}'
        };

        $scope.data = [{
            type: 'pie',
            data: data
        }];

    };

    module.controller("issuesBestPracticesPieChartCtrl", issuesBestPracticesPieChartCtrl);

}(angular.module("app")));