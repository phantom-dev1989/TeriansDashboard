(function (module) {

    var scanRestSvc = function (Restangular) {

        var getScans = function (projectId) {
            return Restangular.one('projects', projectId).getList('scans');
        };

        var getScan = function (projectId, scanId) {
            return Restangular.one('projects', projectId).one('scans', scanId).get();
        };

        var getFirstScan = function () {
            return Restangular.all('scans').getList({scanned: 'first'});
        };

        var getLastScan = function () {
            return Restangular.all('scans').getList({scanned: 'last'});
        };

        return {
            getScans: getScans,
            getScan: getScan,
            getFirstScan: getFirstScan,
            getLastScan: getLastScan
        };
    };

    module.factory("scanRestSvc", scanRestSvc);

}(angular.module("app")));