/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.controller("signUpCtrl", signUpCtrl);

    signUpCtrl.$inject = ['$scope', '$state', 'localStorageService', 'scanSvc', 'scanRestSvc', 'alertingSvc'];

    function signUpCtrl($scope, $state, localStorageService, scanSvc, scanRestSvc, alertingSvc) {

        $scope.cancelSignUp = function () {
            localStorageService.clearAll();
            $state.go('signin');
        };

        $scope.signUp = function () {
            if (scanSvc.getCurrentScan() === undefined || scanSvc.getCurrentScan() === null) {

                scanRestSvc.getLastScan().then(function (scan) {

                    scanSvc.setCurrentScan(scan);
                    $state.go('dashboard.critical');
                    alertingSvc.addSuccess("You are Signed In!!");

                }, function () {
                    alertingSvc.addError("There was an error getting the last scan data");
                });
            }
        };


    };

}(angular.module("app")));