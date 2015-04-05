/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var issuesCtrl = function ($scope, scanSvc, moment) {

        //$scope.issues = getCurrentIssues;
        //console.log(issues);

        $scope.issueCount = scanSvc.getCurrentScan().issueCount;
        $scope.complexity = scanSvc.getCurrentScan().complexity;
        $scope.techdebt = scanSvc.getCurrentScan().techdebt + "min";
        $scope.abstractness = scanSvc.getCurrentScan().abstractness;
        $scope.instability = scanSvc.getCurrentScan().instability;
        $scope.packageCount = scanSvc.getCurrentScan().packageCount;
        $scope.clazzCount = scanSvc.getCurrentScan().clazzCount;
        $scope.methodCount = scanSvc.getCurrentScan().methodCount;
        $scope.scanned = moment(scanSvc.getCurrentScan().date).format('MM-DD-YYYY hh:mm A');
        //$scope.loc = scanSvc.getCurrentScan().loc;

        $scope.gridsterOpts = {
            margins: [10, 10],
            columns: 4,
            outerMargin: false,
            avoid_overlapped_widgets: true,
            pushing: false,
            floating: true,
            swapping: true,
            max_cols: 2,
            maxRows: 3,
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

    module.controller("issuesCtrl", issuesCtrl);

}(angular.module("app")));