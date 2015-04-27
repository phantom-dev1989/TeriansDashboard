/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    var issuesLowCategoryBarChartCtrl = function ($scope, issuesChartSvc) {

        var transformData = issuesChartSvc.transformforBasicColumnChart($scope.issues);

        var categories = [];
        var data = [];

        _(transformData).forEach(function (n) {
            categories.push(n[0]);
            data.push(n[1]);
        }).value();

        // data here would come from web service
        $scope.title = {
            text: 'Issue Count per Category'
        };

        $scope.subTitle = {
            text: 'Issue Count per Category'
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

        $scope.tooltip = {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        };

        $scope.data = [{
            name: 'Issue Count per Category',
            data: data
        }];
    };

    module.controller("issuesLowCategoryBarChartCtrl", issuesLowCategoryBarChartCtrl);

}(angular.module("app")));