/**
 * Created by stromero on 3/9/2015.
 */

(function (module) {

    var dependencyAceCtrl = function ($scope) {

        // The modes
        $scope.modes = ['Java', 'XML', 'Javascript'];
        $scope.mode = 'java';

        var aceLoaded = function (_editor) {
            // Options

        };
        // The ui-ace option
        $scope.aceOptions = {
            theme: 'eclipse',
            mode: $scope.mode.toLowerCase(),
            onLoad: aceLoaded,
            advanced: {
                fontSize: '14px'
            }
        };

        // Initial code content...
        $scope.aceModel =
            '// Java code in here.\n' +
            'public class InfiniteLoop { \n' +
            '\n' +
            '/*\n' +
            '* This will cause the program to hang...\n' +
            '*\n' +
            '* Taken from:\n' +
            '* http://www.exploringbinary.com/java-hangs-when-converting-2-2250738585072012e-308/\n' +
            '*/\n' +
            'public static void main(String[] args) {\n' +
            ' double d = Double.parseDouble("2.2250738585072012e-308");\n' +
            '\n' +
            '// unreachable code\n' +
            ' System.out.println("Value: " + d);\n' +
            '}\n' +
            '}';

    };

    module.controller("dependencyAceCtrl", dependencyAceCtrl);

}(angular.module("app")));
