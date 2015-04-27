(function (module) {

    var teriansHighChartsTreeMap = function (highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                title: '=',
                data: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;

                $(element).highcharts({
                    chart: {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },
                    credits: {
                        enabled: false
                    },
                    colorAxis: {
                        minColor: '#FFFFFF',
                        maxColor: Highcharts.getOptions().colors[0]
                    },
                    series: [{
                        type: "treemap",
                        layoutAlgorithm: 'squarified',
                        data: data
                    }],
                    title: title
                });
            }
        };
    };

    module.directive("teriansHighChartsTreeMap", teriansHighChartsTreeMap);

}(angular.module("app")));