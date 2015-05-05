/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.controller("signUpCtrl", signUpCtrl);

    signUpCtrl.$inject = ['$scope', '$state', 'alertingSvc'];

    function signUpCtrl($scope, $state, alertingSvc) {

        $scope.cancelSignUp = function () {
            $state.go('signin');
        };

        $scope.signUp = function () {

            $state.go('dashboard.critical');
            alertingSvc.addSuccess("You are Signed In!!");
        };

    };

}(angular.module("app")));