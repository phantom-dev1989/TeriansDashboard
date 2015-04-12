(function (module) {

    var teriansNavBar = function () {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/html/partials/directives/teriansNavBar.html',
            controller: function ($scope, projectsSvc, scanSvc, projectsRestSvc, $modal, alertingSvc, $state) {

                $scope.projectName = projectsSvc.getCurrentProjectName().replace(/_/g," ");

                $scope.signOut = function(){
                    // clear token data of the user
                    $state.go('signin');
                }

                projectsRestSvc.getProjects().then(function (projects) {
                    projectsSvc.setCurrentProjects(projects);
                    $scope.projects = _.slice(projects, 0, 5);
                }, function () {
                    alertingSvc.addError("There was an error getting Projects data");
                });

                $scope.openProjectModal = function () {

                    var modalInstance = $modal.open({
                        templateUrl: 'src/html/partials/projectsModal.html',
                        size: 'lg',
                        controller: function ($scope, $modalInstance, projectsLodashSvc, scanLodashSvc, scanRestSvc) {

                            $scope.currentScans = [];
                            $scope.isOkDisabled = true;
                            $scope.selectedScan = {};

                            $scope.ok = function () {
                                $modalInstance.close($scope.selectedScan);
                            };

                            $scope.cancel = function () {
                                $modalInstance.dismiss();
                            };

                            $scope.gridOptionsProject = {
                                enableSorting: false,
                                enableFiltering: false,
                                showGridFooter: true,
                                showColumnFooter: false,
                                enableRowSelection: true,
                                enableSelectAll: false,
                                multiSelect: false,
                                exporterMenuCsv: false,
                                enableGridMenu: false,
                                minRowsToShow: projectsSvc.getCurrentProjects().length,
                                columnDefs: [
                                    {field: 'name', enableSorting: false, enableColumnMenu: false}
                                ],
                                data: projectsLodashSvc.getProjectNames()
                            };

                            $scope.gridOptionsProject.onRegisterApi = function (gridApi) {
                                $scope.gridApi = gridApi;
                                gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                                    if (row.isSelected) {
                                        var currentProjectIdSelected = projectsLodashSvc.getProjectId(row.entity.name);
                                        projectsSvc.setCurrentProjectName(row.entity.name);
                                        projectsSvc.setCurrentProjectId(currentProjectIdSelected);
                                        scanRestSvc.getScans(currentProjectIdSelected).then(function (scans) {
                                            scanSvc.setCurrentScans(scans);
                                            $scope.currentScans = scanLodashSvc.getScanDateAndVersions(scans);
                                        }, function () {
                                            alertingSvc.addError("There was an error getting Project Scans data");
                                        });
                                    } else {
                                        $scope.currentScans = [];
                                    }

                                });
                            };

                            $scope.gridOptionsScan = {
                                enableSorting: false,
                                enableFiltering: false,
                                showGridFooter: true,
                                showColumnFooter: false,
                                enableRowSelection: true,
                                enableSelectAll: false,
                                multiSelect: false,
                                exporterMenuCsv: false,
                                enableGridMenu: false,
                                minRowsToShow: 'currentScans.length',
                                columnDefs: [
                                    {field: 'date', enableSorting: false, enableColumnMenu: false},
                                    {field: 'projectVersion', enableSorting: false, enableColumnMenu: false},
                                    {field: 'teriansId', enableSorting: false, enableColumnMenu: false, visible: false}
                                ],
                                data: 'currentScans'
                            };

                            $scope.gridOptionsScan.onRegisterApi = function (gridApi) {
                                $scope.gridApi = gridApi;
                                gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                                    if (row.isSelected) {
                                        var projectId = projectsSvc.getCurrentProjectId();
                                        var scanId = row.entity.teriansId;
                                        scanRestSvc.getScan(projectId, scanId).then(function (scan) {
                                            $scope.selectedScan = scan;
                                            $scope.isOkDisabled = false;
                                        }, function () {
                                            alertingSvc.addError("There was an error getting Scan data");
                                        });
                                    } else {
                                        $scope.selectedScan = {};
                                        $scope.isOkDisabled = true;
                                    }
                                });

                            };
                        }
                    });

                    modalInstance.result.then(function (selectedScan) {
                        // save scan so it can be used to populate visualizations
                        scanSvc.setCurrentScan(selectedScan);
                        alertingSvc.addInfo("Loading Scan Data");
                        $state.reload();
                    }, function () {
                        alertingSvc.addInfo("Project Modal Dismissed");
                    });
                }
            }
        };
    };
    module.directive("teriansNavBar", teriansNavBar);

}(angular.module("app")));
