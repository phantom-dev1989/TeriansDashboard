(function (module) {

    module.directive("teriansHighChartsPolar", teriansHighChartsPolar);

    teriansHighChartsPolar.$inject =['highChartsResizeSvc'];

    function teriansHighChartsPolar(highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;

                $(element).highcharts({

                    chart: {
                        polar: true,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    title: title,
                    pane: {
                        startAngle: 0,
                        endAngle: 360
                    },

                    xAxis: {
                        tickInterval: 45,
                        min: 0,
                        max: 360,
                        labels: {
                            formatter: function () {
                                return this.value + '°';
                            }
                        }
                    },
                    yAxis: {
                        min: 0
                    },
                    plotOptions: {
                        series: {
                            pointStart: 0,
                            pointInterval: 45
                        },
                        column: {
                            pointPadding: 0,
                            groupPadding: 0
                        }
                    },

                    series: data
                });
            }
        };
    };

}(angular.module("app")));