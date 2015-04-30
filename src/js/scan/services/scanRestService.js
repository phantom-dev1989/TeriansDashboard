(function (module) {

    module.factory("scanRestSvc", scanRestSvc);

    scanRestSvc.$inject =['Restangular'];

    function scanRestSvc(Restangular) {

        return {
            getScans: getScans,
            getScan: getScan,
            getFirstScan: getFirstScan,
            getLastScan: getLastScan
        };

        function getScans(projectId) {
            return Restangular.one('projects', projectId).getList('scans');
        };

        function getScan(projectId, scanId) {
            return Restangular.one('projects', projectId).one('scans', scanId).get();
        };

        function getFirstScan() {
            return Restangular.all('scans').getList({scanned: 'first'});
        };

        function getLastScan() {
            return Restangular.one('scans', 'date').get({scanned: 'last'});
        };
    };

}(angular.module("app")));