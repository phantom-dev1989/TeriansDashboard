(function (module) {

    var projectsDataSvc = function (projectsSvc) {

        var getProjectNames = function () {

            var projectNames = [];
            var currentProjects = projectsSvc.getCurrentProjects();

            for (var i = 0; i < currentProjects.length; i++) {
                projectNames.push({"name": currentProjects[i].name});
            }

            for (var i = 0; i < 10-currentProjects.length; i++) {
                projectNames.push({"name": " "});
            }

            return projectNames;
        };

        var getProjectId = function (name) {

            var currentProjects = projectsSvc.getCurrentProjects();
            var projectId = _.result(_.find(currentProjects, function (project) {
                return project.name === name;
            }), 'teriansId');

            return projectId;
        };

        return {
            getProjectNames: getProjectNames,
            getProjectId: getProjectId
        };
    };

    module.factory("projectsDataSvc", projectsDataSvc);

}(angular.module("app")));