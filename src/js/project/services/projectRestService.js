(function (module) {

    var projectsRestSvc = function (Restangular) {

        var getProjects = function () {
            return Restangular.all('projects').getList();
        };

        var getProject = function (projectId) {
            return Restangular.one('projects', projectId).get();
        };

        var getProjectByScan = function (scanId) {
            return Restangular.one('projects', scanId).get({byScan: 'true'});
        };

        return {
            getProjects: getProjects,
            getProject: getProject,
            getProjectByScan: getProjectByScan
        };
    };

    module.factory("projectsRestSvc", projectsRestSvc);

}(angular.module("app")));