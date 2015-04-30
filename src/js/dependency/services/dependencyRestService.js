(function (module) {

    module.factory("dependenciesRestSvc", dependenciesRestSvc);

    dependenciesRestSvc.$inject =['Restangular'];

    function dependenciesRestSvc(Restangular) {

        return {
            getDependencies: getDependencies,
            getDependency: getDependency,
            getVulnerabilities: getVulnerabilities,
            getVulnerability: getVulnerability,
            getMethods: getMethods,
            getMethod: getMethod,
            getClazzes: getClazzes,
            getClazz: getClazz,
            getIssues: getIssues,
            getIssue: getIssue
        };

        function getDependencies(projectId, scanId) {
            return Restangular.one('projects', projectId).one('scans', scanId).getList('dependencies');
        };

        function getDependency(projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).get();
        };

        function getVulnerabilities(projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('vulnerabilities');
        };

        function getVulnerability(projectId, scanId, dependencyId, vulnerabilityId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('vulnerabilities', vulnerabilityId).get();
        };

        function getMethods(projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('methods');
        };

        function getMethod(projectId, scanId, dependencyId, methodId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('methods', methodId).get();
        };

        function getClazzes(projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('clazzes');
        };

        function getClazz(projectId, scanId, dependencyId, clazzId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('clazzes', clazzId).get();
        };

        function getIssues(projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('issues');
        };

        function getIssue(projectId, scanId, dependencyId, issueId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('issues', issueId).get();
        };
    };

}(angular.module("app")));