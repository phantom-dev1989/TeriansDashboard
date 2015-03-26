/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    var signUpCtrl = function ($scope, $state) {

        $scope.cancelSignUp = function () {
            $state.go('signin');
        };

        $scope.signUp = function () {
            $state.go('dashboard.issues');
        };


    };

    module.controller("signUpCtrl", signUpCtrl);

}(angular.module("app")));