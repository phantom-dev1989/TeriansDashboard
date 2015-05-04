/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    module.controller("issuesLowPackagesBarChartCtrl", issuesLowPackagesBarChartCtrl);

    issuesLowPackagesBarChartCtrl.$inject = ['$scope','issuesChartSvc'];

    function issuesLowPackagesBarChartCtrl($scope, issuesChartSvc) {

        var transformData = issuesChartSvc.transformforStackedBarChart($scope.issues);

        var categories = [];
        var data = [];

        _(transformData).forEach(function (n) {
            categories.push(n[0]);
            data.push(n[1]);
        }).value();

        // data here would come from web service
        $scope.title = {
            text: 'Issue Count per Package'
        };

        $scope.xAxis = {
            categories: categories
        };

        $scope.yAxis = {
            min: 0,
            title: {
                text: 'Issue Count'
            }
        };

        $scope.data = [{
            name: 'Issue Count per Package',
            data: data
        }];

    };

}(angular.module("app")));