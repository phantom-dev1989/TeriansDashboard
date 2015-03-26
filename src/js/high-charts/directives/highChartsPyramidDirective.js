(function (module) {

    var teriansHighChartsPyramid = function (highChartsResizeSvc) {

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
                        type: 'pyramid',
                        marginRight: 100,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    title: title,
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b> ({point.y:,.0f})',
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                                softConnector: true
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

    module.directive("teriansHighChartsPyramid", teriansHighChartsPyramid);

}(angular.module("app")));