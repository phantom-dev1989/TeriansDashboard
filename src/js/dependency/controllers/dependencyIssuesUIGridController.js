/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var dependencyIssuesCtrl = function ($scope) {

        $scope.gridOptions2 = {
            columnDefs: [
                {field: 'Issue', enableSorting: true, enableColumnMenu: true},
                {field: 'Description', enableSorting: true, enableColumnMenu: true},
                {field: 'Severity', enableSorting: true, enableColumnMenu: true},
                {field: 'Category', enableSorting: true, enableColumnMenu: true},
                {field: 'Package', enableSorting: true, enableColumnMenu: true},
                {field: 'Class', enableSorting: true, enableColumnMenu: true},
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
            data: 'issues'
        };

        $scope.gridOptions2.onRegisterApi = function (gridApi) {
            $scope.gridApi2 = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                if (row.isSelected) {

                    // Get the Dependency Object using the dependency ID

                } else {

                }

            });
        };

        $scope.export = function () {
            if ($scope.export_format == 'csv') {
                $scope.gridApi2.exporter.csvExport($scope.export_row_type, $scope.export_column_type);
            } else if ($scope.export_format == 'pdf') {
                $scope.gridApi2.exporter.pdfExport($scope.export_row_type, $scope.export_column_type);
            }
            ;
        };
    };

    module.controller("dependencyIssuesCtrl", dependencyIssuesCtrl);

}(angular.module("app")));
