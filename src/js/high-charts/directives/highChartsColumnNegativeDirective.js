(function (module) {

    module.directive("teriansHighChartsColumnNegative", teriansHighChartsColumnNegative);

    teriansHighChartsColumnNegative.$inject =['highChartsResizeSvc'];

    function teriansHighChartsColumnNegative(highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                xaxis: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var xAxis = scope.xaxis;

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
                    xAxis: xAxis,
                    series: data
                });
            }
        };
    };

}(angular.module("app")));