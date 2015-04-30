(function (module) {

    module.factory("projectsRestSvc", projectsRestSvc);

    projectsRestSvc.$inject =['Restangular'];

    function projectsRestSvc(Restangular) {

        return {
            getProjects: getProjects,
            getProject: getProject,
            getProjectByScan: getProjectByScan
        };

        function getProjects() {
            return Restangular.all('projects').getList();
        };

        function getProject(projectId) {
            return Restangular.one('projects', projectId).get();
        };

        function getProjectByScan(scanId) {
            return Restangular.one('projects', scanId).get({byScan: 'true'});
        };
    };

}(angular.module("app")));