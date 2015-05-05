/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.controller("signInCtrl", signInCtrl);

    signInCtrl.$inject = ['$scope', '$state', 'alertingSvc'];

    function signInCtrl($scope, $state, alertingSvc) {

        $scope.signIn = function () {

            $state.go('dashboard.critical');
            alertingSvc.addSuccess("You are Signed In!!");

        };

        $scope.signUp = function () {
            $state.go('signup');
        };

    };

}(angular.module("app")));