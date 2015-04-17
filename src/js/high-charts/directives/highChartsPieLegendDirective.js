(function (module) {

    var teriansHighChartsPieLegend = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                tooltip: '=htooltip'
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var tooltip = scope.tooltip;

                $(element).highcharts({
                    chart: {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    title: title,
                    tooltip: tooltip,
                    plotOptions: {
                        pie: {
                            allowPointSelect: false,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        },
                        series: {
                            point: {
                                events: {
                                    legendItemClick: function () {
                                        return false; // <== returning false will cancel the default action
                                    }
                                }
                            }
                        }
                    },
                    series: data
                });

            }
        };

    };

    module.directive("teriansHighChartsPieLegend", teriansHighChartsPieLegend);

}(angular.module("app")));