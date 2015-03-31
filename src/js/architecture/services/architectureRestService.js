(function (module) {

    var architectureRestSvc = function (Restangular) {

        var getPackages = function (projectId, scanId) {
            return Restangular.one('projects', projectId).one('scans', scanId).getList('packages');
        };

        var getPackage = function (projectId, scanId, packageId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).get();
        };

        var getClazzes = function (projectId, scanId, packageId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).getList('clazzes');
        };

        var getClazz = function (projectId, scanId, packageId, clazzId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).one('clazzes', clazzId).get();
        };

        var getMethods = function (projectId, scanId, packageId, clazzId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).one('clazzes', clazzId).getList('methods');
        };

        var getMethod = function (projectId, scanId, packageId, clazzId, methodId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).one('clazzes', clazzId).one('methods', methodId).get();
        };

        return {

            getMethods: getMethods,
            getMethod: getMethod,
            getClazzes: getClazzes,
            getClazz: getClazz,
            getPackages: getPackages,
            getPackage: getPackage
        };
    };

    module.factory("architectureRestSvc", architectureRestSvc);

}(angular.module("app")));