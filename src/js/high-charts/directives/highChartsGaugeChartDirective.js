(function (module) {

    module.directive("teriansHighChartsGaugeChart", teriansHighChartsGaugeChart);

    teriansHighChartsGaugeChart.$inject =['highChartsResizeSvc'];

    function teriansHighChartsGaugeChart(highChartsResizeSvc) {
        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                chartName: '=',
                options: '=',
                tooltip: '=htooltip'
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var chartName = scope.chartName;
                var options = scope.options;
                var tooltip = scope.tooltip;

                // The speed gauge
                $(element).highcharts(Highcharts.merge(options, {
                    chart: {
                        events: highChartsResizeSvc.chartEvents
                    },
                    yAxis: {
                        min: 0,
                        max: 200,
                        title: title
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: chartName,
                        data: data,
                        dataLabels: {
                            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                            '<span style="font-size:12px;color:silver">km/h</span></div>'
                        },
                        tooltip: tooltip
                    }]

                }));


                // Bring life to the dials
                setInterval(function () {
                    // Speed
                    var chart = $(element).highcharts(),
                        point,
                        newVal,
                        inc;

                    if (chart) {
                        point = chart.series[0].points[0];
                        inc = data;
                        newVal = data;

                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }

                        point.update(newVal);
                    }
                }, 2000);
            }
        };

    };

}(angular.module("app")));