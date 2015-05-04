/**
 * Created by stromero on 3/21/2015.
 */
(function (module) {

    module.controller("signInCtrl", signInCtrl);

    signInCtrl.$inject = ['$scope', 'alertingSvc', '$state', 'localStorageService',
        'scanSvc', 'scanRestSvc', 'projectsRestSvc', 'projectsSvc'];

    function signInCtrl($scope, alertingSvc, $state, localStorageService,
                               scanSvc, scanRestSvc, projectsRestSvc, projectsSvc) {

        $scope.signIn = function () {

            localStorageService.clearAll();
            // set if default scan for the project hack

            if (scanSvc.getCurrentScan() === undefined || scanSvc.getCurrentScan() === null) {

                scanRestSvc.getLastScan().then(function (scan) {

                    projectsRestSvc.getProjectByScan(scan.teriansId).then(function (project) {

                        scanSvc.setCurrentScan(scan);
                        projectsSvc.setCurrentProjectName(project.name);
                        projectsSvc.setCurrentProjectId(project.teriansId);
                        $state.go('dashboard.critical');
                        alertingSvc.addSuccess("You are Signed In!!");

                    }, function () {
                        alertingSvc.addError("There was an error getting the last scan data");
                    });

                }, function () {
                    alertingSvc.addError("There was an error getting the last scan data");
                });
            }

        };

        $scope.signUp = function () {
            $state.go('signup');
        };

    };

}(angular.module("app")));