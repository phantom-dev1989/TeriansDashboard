/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var signInCtrl = function ($scope, alertingSvc, $state) {

        $scope.signIn = function () {

            $state.go('dashboard.issues');
            alertingSvc.addSuccess("You are Signed In!!");

        };

        $scope.signUp = function () {
            $state.go('signup');
        };

    };

    module.controller("signInCtrl", signInCtrl);

}(angular.module("app")));