/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var dependencyTableCtrl = function ($scope) {

        $scope.gridOptions = {
            columnDefs: [
                {field: 'Dependency', enableSorting: true, enableColumnMenu: true}
            ],
            enableSorting: true,
            enableFiltering: true,
            showGridFooter: true,
            showColumnFooter: true,
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
            data: [
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                },
                {
                    "Dependency": "org.apache.commons"
                }
            ]
        };

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                if (row.isSelected) {

                    // Get the Dependency Object using the dependency ID

                } else {

                }

            });
        };

        $scope.export = function () {
            if ($scope.export_format == 'csv') {
                $scope.gridApi.exporter.csvExport($scope.export_row_type, $scope.export_column_type);
            } else if ($scope.export_format == 'pdf') {
                $scope.gridApi.exporter.pdfExport($scope.export_row_type, $scope.export_column_type);
            }
            ;
        };
    };

    module.controller("dependencyTableCtrl", dependencyTableCtrl);

}(angular.module("app")));
