/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    module.controller("trendingMetricLineChart", trendingMetricLineChart);

    trendingMetricLineChart.$inject = ['$scope', 'trendingChartSvc'];

    function trendingMetricLineChart($scope, trendingChartSvc) {

        var transformedData = trendingChartSvc.transformforAreaSplineChart($scope.scans);

        var scan = [];
        var complexity = [];
        var abstractness = [];
        var instability = [];

        _(transformedData).forEach(function (n) {
            scan.push(n.projectVersion + "   \n " + n.date);
        }).value();

        _(transformedData).forEach(function (n) {
            complexity.push(n.complexity);
        }).value();

        _(transformedData).forEach(function (n) {
            abstractness.push(n.abstractness);
        }).value();

        _(transformedData).forEach(function (n) {
            instability.push(n.instability);
        }).value();


        $scope.title = {
            text: 'Trending Quality Metrics'
        };

        $scope.xAxis = {
            categories: scan
        };

        $scope.yAxis = {
            title: {
                text: 'Count'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        };

        $scope.tooltip = {
            valueSuffix: ''
        };

        $scope.data = [{
            name: 'Complexity',
            data: complexity
        }, {
            name: 'Abstractness',
            data: abstractness
        }, {
            name: 'Instability',
            data: instability
        }];

    }

}(angular.module("app")));

