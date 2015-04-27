/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var trendingTechDebtLineChart = function ($scope, trendingChartSvc) {

        var transformedData = trendingChartSvc.transformforAreaSplineChart($scope.scans);

        var scan = [];
        var techdebt = [];

        _(transformedData).forEach(function (n) {
            scan.push(n.projectVersion + "   \n " + n.date);
        }).value();

        _(transformedData).forEach(function (n) {
            techdebt.push(n.techdebt);
        }).value();


        // data here would come from web service
        $scope.title = {
            text: 'Technical Debt'
        };

        $scope.xAxis = {
            categories: scan
        };

        $scope.yAxis = {
            title: {
                text: 'Minutes'
            }
        };

        $scope.tooltip = {
            shared: true,
            valueSuffix: ' Technical Debt'
        };

        $scope.data = [{
            name: 'Technical Debt',
            data: techdebt
        }];

    }
    module.controller("trendingTechDebtLineChart", trendingTechDebtLineChart);

}(angular.module("app")));

