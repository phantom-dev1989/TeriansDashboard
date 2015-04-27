/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var dependencyAceCtrl = function ($scope) {

        // The modes
        $scope.modes = ['Java', 'XML', 'Javascript'];
        $scope.mode = 'java';

        // The ui-ace option
        $scope.aceOptions1 = {
            theme: 'eclipse',
            mode: $scope.mode.toLowerCase(),
            onChange: function (_ace) {
                var _session = _ace[1].getSession();

                // Yeap I"m using the noconflict version
                var Range = ace.require('ace/range').Range;
                _($scope.lineNumbers).forEach(function (n) {
                    ;
                    _session.addMarker(new Range(n - 1, 0, n, 0), "ace_active-line", "fullLine");

                }).value();

            },
            advanced: {
                fontSize: '14px'
            }
        };

    };

    module.controller("dependencyAceCtrl", dependencyAceCtrl);

}(angular.module("app")));
