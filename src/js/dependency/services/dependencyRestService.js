(function (module) {

    var dependenciesRestSvc = function (Restangular) {

        var getDependencies = function (projectId, scanId) {
            return Restangular.one('projects', projectId).one('scans', scanId).getList('dependencies');
        };

        var getDependency = function (projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).get();
        };

        var getVulnerabilities = function (projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('vulnerabilities');
        };

        var getVulnerability = function (projectId, scanId, dependencyId, vulnerabilityId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('vulnerabilities', vulnerabilityId).get();
        };

        var getMethods = function (projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('methods');
        };

        var getMethod = function (projectId, scanId, dependencyId, methodId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('methods', methodId).get();
        };

        var getClazzes = function (projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('clazzes');
        };

        var getClazz = function (projectId, scanId, dependencyId, clazzId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('clazzes', clazzId).get();
        };

        var getIssues = function (projectId, scanId, dependencyId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).getList('issues');
        };

        var getIssue = function (projectId, scanId, dependencyId, issueId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('dependencies', dependencyId).one('issues', issueId).get();
        };

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
    };

    module.factory("dependenciesRestSvc", dependenciesRestSvc);

}(angular.module("app")));