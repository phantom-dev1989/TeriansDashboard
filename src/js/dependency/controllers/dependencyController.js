/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var dependencyCtrl = function ($scope, dependenciesRestSvc, alertingSvc, scanSvc, projectsSvc, dependencyDataSvc) {

        $scope.issues = dependencyDataSvc.getIssuesDataEmpty();
        $scope.vulnerabilities = dependencyDataSvc.getCVEDataEmpty();
        $scope.classes = dependencyDataSvc.getClassesDataEmpty();

        $scope.gridOptions1 = {
            columnDefs: [
                {field: 'Dependency', enableSorting: true, enableColumnMenu: true},
                {field: 'description', enableSorting: false, enableColumnMenu: false, visible: false},
                {field: 'teriansId', enableSorting: false, enableColumnMenu: false, visible: false},

            ],
            enableSorting: true,
            enableFiltering: true,
            showGridFooter: false,
            showColumnFooter: false,
            exporterMenuCsv: true,
            enableGridMenu: true,
            enableSelectAll: false,
            multiSelect: false,
            enableRowSelection: true,
            exporterCsvFilename: ' dependencies.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            data: dependencyDataSvc.getDependencyData($scope.dependencies)
        };

        $scope.gridOptions1.onRegisterApi = function (gridApi) {
            $scope.gridApi1 = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                $scope.sourceCode = " ";

                if (row.isSelected) {

                    var dependencyId = row.entity.teriansId;
                    var projectId = projectsSvc.getCurrentProjectId();
                    var scanId = scanSvc.getCurrentScan().teriansId;

                    // Get the Dependency Issues
                    dependenciesRestSvc.getIssues(projectId, scanId, dependencyId).then(function (issues) {

                        $scope.issues = dependencyDataSvc.getIssuesData(issues);

                    }, function () {
                        alertingSvc.addError("There was an error getting Scan Issues");
                    });
                    // Get the Dependency CVEs
                    dependenciesRestSvc.getVulnerabilities(projectId, scanId, dependencyId).then(function (vulnerabilities) {

                        $scope.vulnerabilities = dependencyDataSvc.getCVEData(vulnerabilities);
                    }, function () {
                        alertingSvc.addError("There was an error getting the Dependency Violations");
                    });
                    // Get the Dependency Classes
                    dependenciesRestSvc.getClazzes(projectId, scanId, dependencyId).then(function (classes) {

                        $scope.classes = dependencyDataSvc.getClassesData(classes)[0];
                        $scope.source = dependencyDataSvc.getClassesData(classes)[1];

                    }, function () {
                        alertingSvc.addError("There was an error getting Dependency Classes");
                    });

                }else{

                    $scope.issues = dependencyDataSvc.getIssuesDataEmpty();
                    $scope.vulnerabilities = dependencyDataSvc.getCVEDataEmpty();
                    $scope.classes = dependencyDataSvc.getClassesDataEmpty();
                }
            });
        };

        $scope.export = function () {
            if ($scope.export_format == 'csv') {
                $scope.gridApi1.exporter.csvExport($scope.export_row_type, $scope.export_column_type);
            } else if ($scope.export_format == 'pdf') {
                $scope.gridApi1.exporter.pdfExport($scope.export_row_type, $scope.export_column_type);
            }
        };

        $scope.gridOptions3 = {
            columnDefs: [
                {field: 'Name', enableSorting: true, enableColumnMenu: true},
                {field: 'teriansId', enableSorting: false, enableColumnMenu: false, visible: false},
            ],
            enableSorting: true,
            enableFiltering: true,
            showGridFooter: false,
            showColumnFooter: false,
            exporterMenuCsv: true,
            enableGridMenu: true,
            enableSelectAll: false,
            multiSelect: false,
            enableRowSelection: true,
            exporterCsvFilename: 'dependency_classes.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            data: 'classes'

        };

        $scope.gridOptions3.onRegisterApi = function (gridApi) {
            $scope.gridApi3 = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                $scope.sourceCode = " ";

                if (row.isSelected) {
                    // Get the Class object set the source code in the scope
                    _($scope.source).forEach(function (n) {

                        if (n.teriansId === row.entity.teriansId) {

                            $scope.sourceCode = n.sourceCode;

                            // get the line numbers and make sure they are unqiue
                            var lineNumbers = n.lineNumbers;
                            lineNumbers = lineNumbers.replace(/,/g, "|");
                            var lineNumbersArray = lineNumbers.split("|");
                            lineNumbersArray = _.uniq(lineNumbersArray);
                            $scope.lineNumbers = lineNumbersArray;
                        }

                    }).value();
                }
            });
        };

        $scope.export = function () {
            if ($scope.export_format == 'csv') {
                $scope.gridApi3.exporter.csvExport($scope.export_row_type, $scope.export_column_type);
            } else if ($scope.export_format == 'pdf') {
                $scope.gridApi3.exporter.pdfExport($scope.export_row_type, $scope.export_column_type);
            }
        };

    };

    module.controller("dependencyCtrl", dependencyCtrl);

}(angular.module("app")));
