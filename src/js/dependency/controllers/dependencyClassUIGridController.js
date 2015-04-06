(function (module) {

    var dependencyClassTableCtrl = function ($scope) {

        $scope.gridOptions = {
            columnDefs: [
                {field: 'Class', enableSorting: true, enableColumnMenu: true}
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
            exporterCsvFilename: 'dependency_classes.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            data: [
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                },
                {
                    "Class": "Main.java"
                }
            ]

        };

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                if (row.isSelected) {

                    // Get the Class object set the source code in the scope
                    // $scope.source = class.source
                    // $scope.lineNumber = class.linenumbers

                } else {

                }

            });
        };

        $scope.export = function(){
            if ($scope.export_format == 'csv') {
                $scope.gridApi.exporter.csvExport( $scope.export_row_type, $scope.export_column_type);
            } else if ($scope.export_format == 'pdf') {
                $scope.gridApi.exporter.pdfExport( $scope.export_row_type, $scope.export_column_type);
            };
        };

    };

    module.controller("dependencyClassTableCtrl", dependencyClassTableCtrl);

}(angular.module("app")));