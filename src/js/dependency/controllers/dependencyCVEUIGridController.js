/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    module.controller("dependencyCVECtrl", dependencyCVECtrl);

    dependencyCVECtrl.$inject = ['$scope'];

    function dependencyCVECtrl($scope) {

        $scope.gridOptions4 = {
            columnDefs: [
                {field: 'Name', enableSorting: true, enableColumnMenu: true, visible: false},
                {field: 'CVE', enableSorting: true, enableColumnMenu: true},
                {field: 'CWE', enableSorting: true, enableColumnMenu: true},
                {field: 'Description', enableSorting: true, enableColumnMenu: true},
                {field: 'Severity', enableSorting: true, enableColumnMenu: true}
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
            data: 'vulnerabilities'
        };

        $scope.gridOptions4.onRegisterApi = function (gridApi) {
            $scope.gridApi4 = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                if (row.isSelected) {

                    // Get the Dependency Object using the dependency ID

                } else {

                }

            });
        };

        $scope.export = function () {
            if ($scope.export_format == 'csv') {
                $scope.gridApi4.exporter.csvExport($scope.export_row_type, $scope.export_column_type);
            } else if ($scope.export_format == 'pdf') {
                $scope.gridApi4.exporter.pdfExport($scope.export_row_type, $scope.export_column_type);
            }
            ;
        };
    };

}(angular.module("app")));
