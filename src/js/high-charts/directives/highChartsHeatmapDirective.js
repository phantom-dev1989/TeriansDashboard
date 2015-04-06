(function (module) {

    var teriansHighChartsHeatmap = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                chartName: '=',
                xaxis: '=',
                yaxis: '=',
                tooltip: '=htooltip'
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var chartName = scope.chartName;
                var xAxis = scope.xaxis;
                var yAxis = scope.yaxis;
                var tooltip = scope.tooltip;

                $(element).highcharts({

                    chart: {
                        type: 'heatmap',
                        marginTop: 40,
                        marginBottom: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    title: title,
                    xAxis: xAxis,
                    yAxis: yAxis,

                    colorAxis: {
                        min: 0,
                        minColor: '#FFFFFF',
                        maxColor: Highcharts.getOptions().colors[0]
                    },

                    legend: {
                        align: 'right',
                        layout: 'vertical',
                        margin: 0,
                        verticalAlign: 'top',
                        y: 25,
                        symbolHeight: 320
                    },

                    tooltip: tooltip,

                    series: [{
                        name: chartName,
                        borderWidth: 1,
                        data: data,
                        dataLabels: {
                            enabled: true,
                            color: 'black',
                            style: {
                                textShadow: 'none',
                                HcTextStroke: null
                            }
                        }
                    }]

                });
            }
        };
    };

    module.directive("teriansHighChartsHeatmap", teriansHighChartsHeatmap);

}(angular.module("app")));