(function (module) {

    module.directive("teriansHighChartsSpiderWeb", teriansHighChartsSpiderWeb);

    teriansHighChartsSpiderWeb.$inject =['highChartsResizeSvc'];

    function teriansHighChartsSpiderWeb(highChartsResizeSvc) {

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                categories: '='
            },
            link: function (scope, element) {

                var data = scope.data;
                var title = scope.title;
                var categories = scope.categories;

                $(element).highcharts({

                    chart: {
                        polar: true,
                        type: 'line',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        events: highChartsResizeSvc.chartEvents
                    },

                    title: title,
                    credits: {
                        enabled: false
                    },
                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        categories: categories,
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },

                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                    },

                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },

                    series: data

                });
            }
        };

    };

}(angular.module("app")));