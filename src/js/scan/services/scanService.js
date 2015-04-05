(function (module) {

    var scanSvc = function (localStorageService) {

        var getCurrentScans = function () {
            return localStorageService.get("currentScans");
        };

        var setCurrentScans = function (currentScans) {
            localStorageService.set("currentScans", currentScans);
        };

        var getCurrentScan = function () {
            return localStorageService.get("currentScan");
        };

        var setCurrentScan = function (currentScan) {
            localStorageService.set("currentScan", currentScan);
        };

        return {
            getCurrentScans: getCurrentScans,
            setCurrentScans: setCurrentScans,
            getCurrentScan: getCurrentScan,
            setCurrentScan: setCurrentScan
        };
    };

    module.factory("scanSvc", scanSvc);

}(angular.module("app")));