(function (module) {

    module.factory("issuesSvc", issuesSvc);

    issuesSvc.$inject =['localStorageService'];

    function issuesSvc(localStorageService) {

        return {
            setCurrentIssues: setCurrentIssues,
            getCurrentIssues: getCurrentIssues
        };

        function setCurrentIssues(currentIssues) {
            localStorageService.set("currentIssues", currentIssues);
        }

        function getCurrentIssues() {
            localStorageService.get("currentIssues");
        }
    };

}(angular.module("app")));