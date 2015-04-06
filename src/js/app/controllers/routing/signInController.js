/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var signInCtrl = function ($scope, alertingSvc, $state, localStorageService, scanSvc, scanRestSvc) {

        $scope.signIn = function () {

            localStorageService.clearAll();
            // set if default scan for the project hack

            if (scanSvc.getCurrentScan() === undefined || scanSvc.getCurrentScan() === null) {

                scanRestSvc.getLastScan().then(function (scan) {

                    scanSvc.setCurrentScan(scan);
                    $state.go('dashboard.issues');
                    alertingSvc.addSuccess("You are Signed In!!");

                }, function () {
                    alertingSvc.addError("There was an error getting the last scan data");
                });
            }

        };

        $scope.signUp = function () {
            $state.go('signup');
        };

    };

    module.controller("signInCtrl", signInCtrl);

}(angular.module("app")));