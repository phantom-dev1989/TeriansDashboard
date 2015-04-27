(function (module) {

    var issuesRestSvc = function (Restangular) {

        var getIssues = function (scanId) {
            return Restangular.one('scans', scanId).getList('issues');
        };

        var getIssue = function (projectId, scanId, issueId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('issues', issueId);
        };

        var getCriticalIssues = function (scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'critical'});
        };

        var getHighIssues = function (scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'high'});
        };

        var getMediumIssues = function (scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'medium'});
        };

        var getLowIssues = function (scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'low'});
        };

        var getBestPracticesIssues = function (scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'bestpractices'});
        };

        return {
            getIssues: getIssues,
            getIssue: getIssue,
            getCriticalIssues: getCriticalIssues,
            getHighIssues: getHighIssues,
            getMediumIssues: getMediumIssues,
            getLowIssues: getLowIssues,
            getBestPracticesIssues: getBestPracticesIssues
        };
    };

    module.factory("issuesRestSvc", issuesRestSvc);

}(angular.module("app")));