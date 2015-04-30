(function (module) {

    module.factory("projectsDataSvc", projectsDataSvc);

    projectsDataSvc.$inject =['projectsSvc'];

    function projectsDataSvc(projectsSvc) {

        return {
            getProjectNames: getProjectNames,
            getProjectId: getProjectId
        };

        function getProjectNames() {

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

        function getProjectId(name) {

            var currentProjects = projectsSvc.getCurrentProjects();
            var projectId = _.result(_.find(currentProjects, function (project) {
                return project.name === name;
            }), 'teriansId');

            return projectId;
        };


    };

}(angular.module("app")));