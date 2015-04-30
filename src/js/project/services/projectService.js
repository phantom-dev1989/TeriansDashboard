(function (module) {

    module.factory("projectsSvc", projectsSvc);

    projectsSvc.$inject =['localStorageService'];

    function projectsSvc(localStorageService) {

        return {
            getCurrentProjects: getCurrentProjects,
            setCurrentProjects: setCurrentProjects,
            getCurrentProjectId: getCurrentProjectId,
            setCurrentProjectId: setCurrentProjectId,
            getCurrentProjectName: getCurrentProjectName,
            setCurrentProjectName: setCurrentProjectName
        };

        function getCurrentProjects() {
            return localStorageService.get("currentProjects");
        };

        function setCurrentProjects(currentProjects) {
            localStorageService.set("currentProjects", currentProjects);
        };

        function getCurrentProjectId() {
            return localStorageService.get("currentProjectId");
        };

        function setCurrentProjectId(currentProjectId) {
            localStorageService.set("currentProjectId", currentProjectId);
        };

        function getCurrentProjectName() {
            return localStorageService.get("currentProjectName");
        };

        function setCurrentProjectName(currentProject) {
            localStorageService.set("currentProjectName", currentProject);
        };
    };

}(angular.module("app")));