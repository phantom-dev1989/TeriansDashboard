(function (module) {

    var teriansNavBar = function () {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/html/partials/directives/teriansNavBar.html',
            controller: function ($scope, projectsSvc, scanSvc, projectsRestSvc, $modal, alertingSvc) {

                projectsRestSvc.getProjects().then(function (projects) {
                    projectsSvc.setProjects(projects);
                    $scope.projects = _.slice(projects, 0, 5);
                }, function () {
                    alertingSvc.addError("There was an error getting Projects data");
                });

                $scope.openProjectModal = function () {

                    var modalInstance = $modal.open({
                        templateUrl: 'src/html/partials/projectsModal.html',
                        size: 'lg',
                        controller: function ($scope, $modalInstance, projectsLodashSvc, scanLodashSvc, scanRestSvc) {

                            $scope.scans = [];
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
                                minRowsToShow: projectsSvc.projects.length,
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
                                        projectsSvc.setCurrentProjectId(currentProjectIdSelected);
                                        scanRestSvc.getScans(currentProjectIdSelected).then(function (scans) {
                                            scanSvc.setScans(scans);
                                            $scope.scans = scanLodashSvc.getScanDateAndVersions(scans);
                                        }, function () {
                                            alertingSvc.addError("There was an error getting Project Scans data");
                                        });
                                    } else {
                                        $scope.scans = [];
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
                                minRowsToShow: 'scans.length',
                                columnDefs: [
                                    {field: 'date', enableSorting: false, enableColumnMenu: false},
                                    {field: 'projectVersion', enableSorting: false, enableColumnMenu: false},
                                    {field: 'teriansId', enableSorting: false, enableColumnMenu: false, visible: false}
                                ],
                                data: 'scans'
                            };

                            $scope.gridOptionsScan.onRegisterApi = function (gridApi) {
                                $scope.gridApi = gridApi;
                                gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                                    if (row.isSelected) {
                                        var projectId = projectsSvc.currentProjectId;
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

                    modalInstance.result.then(function(selectedScan){
                        // save scan so it can be used to populate visualizations
                        scanSvc.setCurrentScan(selectedScan);
                        alertingSvc.addInfo("Loading Scan Data");
                    }, function(){
                        alertingSvc.addInfo("Project Modal Dismissed");
                    });
                }
            }
        };
    };
    module.directive("teriansNavBar", teriansNavBar);

}(angular.module("app")));
