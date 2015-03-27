(function (module) {

    var dependencyClassTableCtrl = function ($scope) {

        $scope.gridOptions = {
            enableSorting: true,
            enableFiltering: true,
            showGridFooter: true,
            showColumnFooter: true,
            exporterMenuCsv: true,
            enableGridMenu: true,
            columnDefs: [
                {field: 'firstName', enableSorting: true, enableColumnMenu: true},
                {field: 'lastName', enableSorting: true, enableColumnMenu: true},
                {field: 'company', enableSorting: true, enableColumnMenu: true},
                {field: 'employed', enableSorting: false, enableColumnMenu: true}
            ],
            gridMenuCustomItems: [
                {
                    title: 'Rotate Grid',
                    action: function ($event) {
                        this.grid.element.toggleClass('rotated');
                    }
                }
            ],
            data: [
                {
                    "firstName": "Cox",
                    "lastName": "Carney",
                    "company": "Enormo",
                    "employed": true
                },
                {
                    "firstName": "Lorraine",
                    "lastName": "Wise",
                    "company": "Comveyer",
                    "employed": false
                },
                {
                    "firstName": "Nancy",
                    "lastName": "Waters",
                    "company": "Fuelton",
                    "employed": false
                },
                {
                    "firstName": "Cox",
                    "lastName": "Carney",
                    "company": "Enormo",
                    "employed": true
                },
                {
                    "firstName": "Lorraine",
                    "lastName": "Wise",
                    "company": "Comveyer",
                    "employed": false
                },
                {
                    "firstName": "Nancy",
                    "lastName": "Waters",
                    "company": "Fuelton",
                    "employed": false
                },
                {
                    "firstName": "Cox",
                    "lastName": "Carney",
                    "company": "Enormo",
                    "employed": true
                },
                {
                    "firstName": "Lorraine",
                    "lastName": "Wise",
                    "company": "Comveyer",
                    "employed": false
                },
                {
                    "firstName": "Nancy",
                    "lastName": "Waters",
                    "company": "Fuelton",
                    "employed": false
                },
                {
                    "firstName": "Cox",
                    "lastName": "Carney",
                    "company": "Enormo",
                    "employed": true
                },
                {
                    "firstName": "Lorraine",
                    "lastName": "Wise",
                    "company": "Comveyer",
                    "employed": false
                },
                {
                    "firstName": "Nancy",
                    "lastName": "Waters",
                    "company": "Fuelton",
                    "employed": false
                }
            ]

        };

    };

    module.controller("dependencyClassTableCtrl", dependencyClassTableCtrl);

}(angular.module("app")));