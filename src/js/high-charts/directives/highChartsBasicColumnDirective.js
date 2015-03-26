(function (module) {

    var teriansHighChartsBasicColumn = function (highChartsResizeSvc) {

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
                        type: 'column',
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
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: data
                });
            }
        };
    };

    module.directive("teriansHighChartsBasicColumn", teriansHighChartsBasicColumn);

}(angular.module("app")));