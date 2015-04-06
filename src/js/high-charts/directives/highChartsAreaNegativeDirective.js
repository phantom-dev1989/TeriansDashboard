(function (module) {

    var teriansHighChartsAreaNegative = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                title: '=',
                data: '=',
                xaxis: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var xAxis = scope.xaxis;

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
                    xAxis: xAxis,
                    series: data
                });
            }
        };
    };

    module.directive("teriansHighChartsAreaNegative", teriansHighChartsAreaNegative);

}(angular.module("app")));