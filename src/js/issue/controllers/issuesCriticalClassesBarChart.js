/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    module.controller("issuesCriticalClassesBarChartCtrl", issuesCriticalClassesBarChartCtrl);

    issuesCriticalClassesBarChartCtrl.$inject = ['$scope','issuesChartSvc'];

    function issuesCriticalClassesBarChartCtrl($scope, issuesChartSvc) {

        var transformData = issuesChartSvc.transformforColumnStackedChart($scope.issues);

        var categories = [];
        var data = [];

        _(transformData).forEach(function (n) {
            categories.push(n[0]);
            data.push(n[1]);
        }).value();

        // data here would come from web service
        $scope.title = {
            text: 'Issue Count per Class'
        };

        $scope.xAxis = {
            categories: categories
        };

        $scope.yAxis = {
            min: 0,
            title: {
                text: 'Issue Count'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        };

        $scope.tooltip = {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        };

        $scope.data = [{
            name: 'Issue Count per Class',
            data: data
        }];


    };

}(angular.module("app")));