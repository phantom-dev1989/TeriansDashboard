/**
 * Created by stromero on 8/18/2014.
 */

(function (module) {

    module.directive("teriansJointJsUmlClassDiagram", teriansJointJsUmlClassDiagram);

    function teriansJointJsUmlClassDiagram() {

        return {
            restrict: 'E',
            template: '<div id="umlclasschart"></div>',
            replace: true,
            link: function (scope, element, attrs) {

                var classes = scope[attrs.classes];
                var relations = scope[attrs.relations];

                var graph = new joint.dia.Graph();

                var paper = new joint.dia.Paper({
                    el: $('#umlclasschart'),
                    //width: 800,
                    // height: 600,
                    gridSize: 1,
                    model: graph
                });

                _.each(classes, function (c) {
                    graph.addCell(c);
                });
                _.each(relations, function (r) {
                    graph.addCell(r);
                });

            }
        };

    };

}(angular.module("app")));
