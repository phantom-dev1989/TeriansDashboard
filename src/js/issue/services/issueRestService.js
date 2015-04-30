(function (module) {

    module.factory("issuesRestSvc", issuesRestSvc);

    issuesRestSvc.$inject =['Restangular'];

    function issuesRestSvc(Restangular) {

        return {
            getIssues: getIssues,
            getIssue: getIssue,
            getCriticalIssues: getCriticalIssues,
            getHighIssues: getHighIssues,
            getMediumIssues: getMediumIssues,
            getLowIssues: getLowIssues,
            getBestPracticesIssues: getBestPracticesIssues
        };

        function getIssues(scanId) {
            return Restangular.one('scans', scanId).getList('issues');
        };

        function getIssue(projectId, scanId, issueId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('issues', issueId);
        };

        function getCriticalIssues(scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'critical'});
        };

        function getHighIssues(scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'high'});
        };

        function getMediumIssues(scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'medium'});
        };

        function getLowIssues(scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'low'});
        };

        function getBestPracticesIssues(scanId) {
            return Restangular.one('scans', scanId).getList('issues', {severity: 'bestpractices'});
        };

    };

}(angular.module("app")));