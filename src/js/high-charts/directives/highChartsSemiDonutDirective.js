(function (module) {

    var teriansHighChartsSemiDonut = function (highChartsResizeSvc) {

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
                        plotBorderWidth: 0,
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
                            dataLabels: {
                                enabled: true,
                                distance: -50,
                                style: {
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textShadow: '0px 1px 2px black'
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%']
                        }
                    },
                    series: data
                });
            }
        };

    };

    module.directive("teriansHighChartsSemiDonut", teriansHighChartsSemiDonut);

}(angular.module("app")));