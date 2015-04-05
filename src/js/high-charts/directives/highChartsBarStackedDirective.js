(function (module) {

    var teriansHighChartsBarStacked = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                xaxis: '=',
                yaxis: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var xAxis = scope.xaxis;
                var yAxis = scope.yaxis;

                $(element).highcharts({
                    chart: {
                        type: 'bar',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    title: title,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    credits: {
                        enabled: false
                    },
                    legend: {
                        reversed: true
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    series: data
                });


            }
        };

    };

    module.directive("teriansHighChartsBarStacked", teriansHighChartsBarStacked);

}(angular.module("app")));