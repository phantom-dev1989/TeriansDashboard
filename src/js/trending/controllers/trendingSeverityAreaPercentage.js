/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var trendingSeverityAreaPercentageCtrl = function ($scope, trendingChartSvc) {

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
            text: 'Trending Issue Percentage By Severity'
        };

        $scope.xAxis = {
            categories: scan,
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        };

        $scope.yAxis = {
            title: {
                text: 'Percent'
            }
        };

        $scope.tooltip = {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f})<br/>',
            shared: true
        };

        $scope.data = [{
            name: 'Critcal',
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
    module.controller("trendingSeverityAreaPercentageCtrl", trendingSeverityAreaPercentageCtrl);

}(angular.module("app")));

