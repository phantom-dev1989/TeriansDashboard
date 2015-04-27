(function (module) {

    var projectsSvc = function (localStorageService) {


        var getCurrentProjects = function () {
            return localStorageService.get("currentProjects");
        };

        var setCurrentProjects = function (currentProjects) {
            localStorageService.set("currentProjects", currentProjects);
        };

        var getCurrentProjectId = function () {
            return localStorageService.get("currentProjectId");
        };

        var setCurrentProjectId = function (currentProjectId) {
            localStorageService.set("currentProjectId", currentProjectId);
        };

        var getCurrentProjectName = function () {
            return localStorageService.get("currentProjectName");
        };

        var setCurrentProjectName = function (currentProject) {
            localStorageService.set("currentProjectName", currentProject);
        };

        return {
            getCurrentProjects: getCurrentProjects,
            setCurrentProjects: setCurrentProjects,
            getCurrentProjectId: getCurrentProjectId,
            setCurrentProjectId: setCurrentProjectId,
            getCurrentProjectName: getCurrentProjectName,
            setCurrentProjectName: setCurrentProjectName

        };
    };

    module.factory("projectsSvc", projectsSvc);

}(angular.module("app")));