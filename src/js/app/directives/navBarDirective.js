(function (module) {

    module.directive("teriansNavBar", teriansNavBar);

    function teriansNavBar() {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/html/partials/directives/teriansNavBar.html',
            controller: ['$scope', 'projectsSvc', 'scanSvc', 'projectsRestSvc', '$modal', 'alertingSvc', '$state',
                function ($scope, projectsSvc, scanSvc, projectsRestSvc, $modal, alertingSvc, $state) {

                $scope.projectName = projectsSvc.getCurrentProjectName().replace(/_/g," ");

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
                        controller: ['$scope', '$modalInstance', 'projectsDataSvc', 'scanDataSvc', 'scanRestSvc',
                            function ($scope, $modalInstance, projectsDataSvc, scanDataSvc, scanRestSvc) {

                            $scope.currentScans = [];
                            $scope.isOkDisabled = true;
                            $scope.selectedScan = {};

                            $scope.ok = function () {
                                $modalInstance.close($scope.selectedScan);
                            };

                            $scope.cancel = function () {
                                $modalInstance.dismiss();
                            };

                                // code to show projects in modal breakout of here
                            $scope.gridOptionsProject = {
                                enableSorting: false,
                                enableFiltering: false,
                                showGridFooter: false,
                                showColumnFooter: false,
                                enableRowSelection: true,
                                enableSelectAll: false,
                                multiSelect: false,
                                exporterMenuCsv: false,
                                enableGridMenu: false,
                                columnDefs: [
                                    {field: 'name', enableSorting: false, enableColumnMenu: false}
                                ],
                                data: projectsDataSvc.getProjectNames()
                            };

                            // Empty Current scans to show empty rows (hack)
                            $scope.currentScans = scanDataSvc.getScanDateAndVersionsEmpty();

                            $scope.gridOptionsProject.onRegisterApi = function (gridApi) {
                                $scope.gridApi = gridApi;
                                gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                                    if (row.isSelected) {
                                        var currentProjectIdSelected = projectsDataSvc.getProjectId(row.entity.name);
                                        projectsSvc.setCurrentProjectName(row.entity.name);
                                        projectsSvc.setCurrentProjectId(currentProjectIdSelected);
                                        scanRestSvc.getScans(currentProjectIdSelected).then(function (scans) {
                                            scanSvc.setCurrentScans(scans);
                                            $scope.currentScans = scanDataSvc.getScanDateAndVersions(scans);
                                        }, function () {
                                            alertingSvc.addError("There was an error getting Project Scans data");
                                        });
                                    } else {
                                        $scope.currentScans = scanDataSvc.getScanDateAndVersionsEmpty();
                                    }

                                });
                            };

                                // code to display scans in modal break out of here
                            $scope.gridOptionsScan = {
                                enableSorting: false,
                                enableFiltering: false,
                                showGridFooter: false,
                                showColumnFooter: false,
                                enableRowSelection: true,
                                enableSelectAll: false,
                                multiSelect: false,
                                exporterMenuCsv: false,
                                enableGridMenu: false,
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
                        }]
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
            }]
        };
    };


}(angular.module("app")));
