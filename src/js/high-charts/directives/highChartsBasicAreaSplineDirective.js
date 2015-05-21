(function (module) {

    module.directive("teriansHighChartsBasicAreaSpline", teriansHighChartsBasicAreaSpline);

    teriansHighChartsBasicAreaSpline.$inject =['highChartsResizeSvc'];

    function teriansHighChartsBasicAreaSpline(highChartsResizeSvc) {
        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                xaxis: '=',
                yaxis: '=',
                tooltip: '=htooltip'
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var xAxis = scope.xaxis;
                var yAxis = scope.yaxis;
                var tooltip = scope.tooltip;

                $(element).highcharts({
                    chart: {
                        type: 'areaspline',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    title: title,
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 150,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    xAxis: xAxis,
                    yAxis: yAxis,
                    tooltip: tooltip,
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        areaspline: {
                            fillOpacity: 0.5
                        }
                    },
                    series: data
                });
            }
        };

    };

}(angular.module("app")));