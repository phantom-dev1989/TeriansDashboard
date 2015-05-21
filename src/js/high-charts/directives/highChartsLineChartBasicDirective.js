(function (module) {

    module.directive("teriansHighChartsLineChartBasic", teriansHighChartsLineChartBasic);

    teriansHighChartsLineChartBasic.$inject =['highChartsResizeSvc'];

    function teriansHighChartsLineChartBasic(highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                subTitle: '=',
                xaxis: '=',
                yaxis: '=',
                tooltip: '=htooltip'
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var subTitle = scope.subTitle;
                var xAxis = scope.xaxis;
                var yAxis = scope.yaxis;
                var tooltip = scope.tooltip;

                $(element).highcharts({
                    chart: {
                        type: 'line',
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
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: data
                });
            }
        };
    };

}(angular.module("app")));