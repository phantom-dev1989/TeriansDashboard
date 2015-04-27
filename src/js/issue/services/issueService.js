(function (module) {

    var issuesSvc = function (localStorageService) {

        var setCurrentIssues = function (currentIssues) {
            localStorageService.set("currentIssues", currentIssues);
        }

        var getCurrentIssues = function () {
            localStorageService.get("currentIssues");
        }

        return {
            setCurrentIssues: setCurrentIssues,
            getCurrentIssues: getCurrentIssues
        };
    };

    module.factory("issuesSvc", issuesSvc);

}(angular.module("app")));