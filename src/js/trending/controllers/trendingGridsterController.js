/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var trendingGridsterCtrl = function ($scope) {

        $scope.gridsterOpts = {
            margins: [10, 10],
            columns: 4,
            outerMargin: false,
            avoid_overlapped_widgets: true,
            pushing: false,
            floating: true,
            swapping: true,
            max_cols: 2,
            maxRows: 2,
            colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
            rowHeight: '490', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
            draggable: {
                enabled: true,
                handle: '.gridster-draggable'
            },
            resizable: {
                enabled: false
            }
        };

        $scope.$on('gridster-resized', function (newSizes) {

            for (var i = 0; i < Highcharts.charts.length; i++) {
                Highcharts.charts[i].reflow();
            }
        });

        $scope.$watch('items', function (items) {

            for (var i = 0; i < Highcharts.charts.length; i++) {
                Highcharts.charts[i].reflow();
            }

        }, true);

    };

    module.controller("trendingGridsterCtrl", trendingGridsterCtrl);

}(angular.module("app")));