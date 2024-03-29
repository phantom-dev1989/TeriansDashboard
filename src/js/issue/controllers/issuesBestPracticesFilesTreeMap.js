/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    module.controller("issuesBestPracticesFilesTreeMapCtrl", issuesBestPracticesFilesTreeMapCtrl);

    issuesBestPracticesFilesTreeMapCtrl.$inject = ['$scope','issuesChartSvc'];

    function issuesBestPracticesFilesTreeMapCtrl($scope, issuesChartSvc) {

        var transformData = issuesChartSvc.transformforTreeMap($scope.issues);

        var data = [];

        _(transformData).forEach(function (n) {
            data.push({name: n[0], value: n[1], colorValue: n[1]});
        }).value();

        // data here would come from web service
        $scope.title = {
            text: 'Issue Count per Files Scanned'
        };

        $scope.data = data;
    };

}(angular.module("app")));