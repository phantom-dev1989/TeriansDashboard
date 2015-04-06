/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var dependencyTableCtrl = function ($scope) {

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
                {field: 'Dependency', enableSorting: true, enableColumnMenu: true}
            ],
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
    };

    module.controller("dependencyTableCtrl", dependencyTableCtrl);

}(angular.module("app")));
