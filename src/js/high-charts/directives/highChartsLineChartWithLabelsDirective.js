(function (module) {

    var teriansHighChartsLineChartWithLabels = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                subTitle: '=',
                xAxis: '=',
                yAxis: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var subTitle = scope.subTitle;
                var xAxis = scope.xAxis;
                var yAxis = scope.yAxis;

                $(element).highcharts({
                    chart: {
                        type: 'line',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    title: title,
                    subtitle: subTitle,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: data
                });


            }
        };
    };

    module.directive("teriansHighChartsLineChartWithLabels", teriansHighChartsLineChartWithLabels);

}(angular.module("app")));