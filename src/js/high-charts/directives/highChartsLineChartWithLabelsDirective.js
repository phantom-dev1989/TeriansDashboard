(function (module) {

    module.directive("teriansHighChartsLineChartWithLabels", teriansHighChartsLineChartWithLabels);

    teriansHighChartsLineChartWithLabels.$inject =['highChartsResizeSvc'];

    function teriansHighChartsLineChartWithLabels(highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                subTitle: '=',
                xaxis: '=',
                yaxis: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var subTitle = scope.subTitle;
                var xAxis = scope.xaxis;
                var yAxis = scope.yaxis;

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

}(angular.module("app")));