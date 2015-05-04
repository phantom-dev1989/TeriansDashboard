/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.controller("remediationCtrl", remediationCtrl);

    remediationCtrl.$inject = ['$scope', 'scanSvc', 'moment'];

    function remediationCtrl($scope, scanSvc, moment) {

        $scope.issueCount = scanSvc.getCurrentScan().issueCount;
        $scope.issueCriticalCount = scanSvc.getCurrentScan().issueCriticalCount;
        $scope.issueHighCount = scanSvc.getCurrentScan().issueHighCount;
        $scope.issueMediumCount = scanSvc.getCurrentScan().issueMediumCount;
        $scope.complexity = scanSvc.getCurrentScan().complexity;
        $scope.techdebt = scanSvc.getCurrentScan().techdebt + "min";
        $scope.abstractness = scanSvc.getCurrentScan().abstractness;
        $scope.instability = scanSvc.getCurrentScan().instability;
        $scope.packageCount = scanSvc.getCurrentScan().packageCount;
        $scope.clazzCount = scanSvc.getCurrentScan().clazzCount;
        $scope.methodCount = scanSvc.getCurrentScan().methodCount;
        $scope.scanned = moment(scanSvc.getCurrentScan().date).format('MM-DD-YYYY hh:mm A');
        $scope.loc = scanSvc.getCurrentScan().loc;

    };

}(angular.module("app")));