(function (module) {

    var teriansHighChartsColumnRange = function (highChartsResizeSvc) {

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
                        type: 'columnrange',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        inverted: true,
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    title: title,
                    subtitle: subTitle,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    tooltip: tooltip,
                    plotOptions: {
                        columnrange: {
                            dataLabels: {
                                enabled: true,
                                formatter: function () {
                                    return this.y;
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },

                    series: data

                });
            }
        };
    };

    module.directive("teriansHighChartsColumnRange", teriansHighChartsColumnRange);

}(angular.module("app")));