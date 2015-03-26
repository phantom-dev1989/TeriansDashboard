(function (module) {

    var teriansHighChartsBasicArea = function (highChartsResizeSvc) {

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
                        type: 'area',
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
                    tooltip: tooltip,
                    plotOptions: {
                        area: {
                            pointStart: 1940,
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
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

    module.directive("teriansHighChartsBasicArea", teriansHighChartsBasicArea);

}(angular.module("app")));