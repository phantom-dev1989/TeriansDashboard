(function (module) {

    var dependencyClassTableCtrl = function ($scope) {

        $scope.gridOptions = {
            enableSorting: true,
            enableFiltering: true,
            showGridFooter: true,
            showColumnFooter: true,
            exporterMenuCsv: true,
            enableGridMenu: true,
            enableSelectAll: false,
            multiSelect: false,
            enableRowSelection: true,
            columnDefs: [
                {field: 'Class', enableSorting: true, enableColumnMenu: true}
            ],
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

    };

    module.controller("dependencyClassTableCtrl", dependencyClassTableCtrl);

}(angular.module("app")));