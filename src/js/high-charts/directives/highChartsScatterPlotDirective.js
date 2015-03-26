(function (module) {

    var teriansHighChartsScatterPlot = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                subTitle: '=',
                xAxis: '=',
                yAxis: '=',
                tooltip: '=htooltip'
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var subTitle = scope.subTitle;
                var xAxis = scope.xAxis;
                var yAxis = scope.yAxis;
                var tooltip = scope.tooltip;

                $(element).highcharts({
                    chart: {
                        type: 'scatter',
                        zoomType: 'xy',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    title: title,
                    subtitle: subTitle,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'top',
                        x: 100,
                        y: 70,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: tooltip
                        }
                    },
                    series: data
                });
            }
        };
    };

    module.directive("teriansHighChartsScatterPlot", teriansHighChartsScatterPlot);

}(angular.module("app")));