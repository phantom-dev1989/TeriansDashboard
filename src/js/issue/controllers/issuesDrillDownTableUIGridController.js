/**
 * Created by stromero on 4/5/2015.
 */
(function (module) {

    module.controller("issuesDrillDownTableCtrl", issuesDrillDownTableCtrl);

    issuesDrillDownTableCtrl.$inject = ['$scope','$modal'];

    function issuesDrillDownTableCtrl($scope, $modal) {

        var issueData = [];
        for (var i = 0; i < $scope.issues.length; i++) {
            issueData.push({
                Issue: $scope.issues[i].issue,
                Description: $scope.issues[i].description,
                Severity: $scope.issues[i].severity,
                Class: $scope.issues[i].className,
                Category: $scope.issues[i].category.toUpperCase(),
                Package: $scope.issues[i].packageName,
                File: $scope.issues[i].fileName,
                LineNumber: $scope.issues[i].lineNumber
            });
        }

        // Push empty rows
        for (var i = 0; i < 30; i++) {
            issueData.push({
                Issue: "",
                Description: "",
                Severity: "",
                Class: "",
                Category: "",
                Package: "",
                File: "",
                LineNumber: ""
            });
        }

        $scope.gridOptions = {
            columnDefs: [
                {field: 'Issue', enableSorting: true, enableColumnMenu: true},
                {field: 'Description', enableSorting: true, enableColumnMenu: true},
                {field: 'Severity', enableSorting: true, enableColumnMenu: true},
                {field: 'Category', enableSorting: true, enableColumnMenu: true},
                {field: 'Package', enableSorting: true, enableColumnMenu: true},
                {field: 'Class', enableSorting: false, enableColumnMenu: true},
                {field: 'LineNumber', enableSorting: false, enableColumnMenu: true},
                {field: 'File', enableSorting: true, enableColumnMenu: true}

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
            exporterCsvFilename: 'issues.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            data: issueData
        };

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                var modalInstance;

                if (row.isSelected) {

                    modalInstance = $modal.open({
                        templateUrl: 'src/html/partials/issueDetailModal.html',
                        controller: function ($scope) {

                            $scope.issue = row.entity.Issue;
                            $scope.description = row.entity.Description;
                        }
                    });

                } else {
                    $modalInstance.dismiss();
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

}(angular.module("app")));