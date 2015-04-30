(function (module) {

    module.factory("architectureRestSvc", architectureRestSvc);

    architectureRestSvc.$inject =['Restangular'];

    function architectureRestSvc(Restangular) {

        return {
            getMethods: getMethods,
            getMethod: getMethod,
            getClazzes: getClazzes,
            getClazz: getClazz,
            getPackages: getPackages,
            getPackage: getPackage
        };

        function getPackages(projectId, scanId) {
            return Restangular.one('projects', projectId).one('scans', scanId).getList('packages');
        };

        function getPackage(projectId, scanId, packageId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).get();
        };

        function getClazzes(projectId, scanId, packageId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).getList('clazzes');
        };

        function getClazz(projectId, scanId, packageId, clazzId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).one('clazzes', clazzId).get();
        };

        function getMethods(projectId, scanId, packageId, clazzId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).one('clazzes', clazzId).getList('methods');
        };

        function getMethod(projectId, scanId, packageId, clazzId, methodId) {
            return Restangular.one('projects', projectId).one('scans', scanId).one('packages', packageId).one('clazzes', clazzId).one('methods', methodId).get();
        };
    };

}(angular.module("app")));