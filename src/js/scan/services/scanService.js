(function (module) {

    var scanSvc = function () {

        var scans;
        var currentScan;

        var getScans = function () {
            return scans;
        };

        var setScans = function (scans) {
            this.scans = scans;
        };

        var getCurrentScan = function () {
            return currentScan;
        };

        var setCurrentScan = function (currentScan) {
            this.currentScan = currentScan;
        };

        return {
            scans: scans,
            getScans: getScans,
            setScans: setScans,
            getCurrentScan: getCurrentScan,
            setCurrentScan: setCurrentScan,
            currentScan: currentScan
        };
    };

    module.factory("scanSvc", scanSvc);

}(angular.module("app")));