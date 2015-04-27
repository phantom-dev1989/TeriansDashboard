/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var trendingSeverityAreaSplineCtrl = function ($scope, trendingChartSvc) {

        var transformedData = trendingChartSvc.transformforAreaSplineChart($scope.scans);

        var scan = [];
        var critical = [];
        var high = [];
        var medium = [];
        var low = [];
        var bestp = [];

        _(transformedData).forEach(function (n) {
            critical.push(n.issueCriticalCount);
        }).value();

        _(transformedData).forEach(function (n) {
            high.push(n.issueHighCount);
        }).value();

        _(transformedData).forEach(function (n) {
            medium.push(n.issueMediumCount);
        }).value();

        _(transformedData).forEach(function (n) {
            low.push(n.issueLowCount);
        }).value();

        _(transformedData).forEach(function (n) {
            bestp.push(n.issueBestPracticeCount);
        }).value();

        _(transformedData).forEach(function (n) {
            scan.push(n.projectVersion + "   \n " + n.date);
        }).value();


        // data here would come from web service
        $scope.title = {
            text: 'Trending Issue Count By Severity'
        };

        $scope.xAxis = {
            categories: scan,
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5//,
                //color: 'rgba(68, 170, 213, .2)'
            }]
        };

        $scope.yAxis = {
            title: {
                text: 'Issue Counts'
            }
        };

        $scope.tooltip = {
            shared: true,
            valueSuffix: ' Issues'
        };

        $scope.data = [{
            name: 'Critical',
            data: critical
        }, {
            name: 'High',
            data: high
        }, {
            name: 'Medium',
            data: medium
        }, {
            name: 'Low',
            data: low
        }, {
            name: 'Best Practices',
            data: bestp
        }];

    }
    module.controller("trendingSeverityAreaSplineCtrl", trendingSeverityAreaSplineCtrl);

}(angular.module("app")));

