(function (module) {

    var projectsRestSvc = function (Restangular) {

        var getProjects = function () {
            return Restangular.all('projects');
        };

        var getProject = function (id) {
            return Restangular.one('projects', id);
        };

        return {
            getProjects: getProjects,
            getProject: getProject
        };
    };

    module.factory("projectsRestSvc", projectsRestSvc);

}(angular.module("app")));