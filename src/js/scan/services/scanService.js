(function (module) {

    module.factory("scanSvc", scanSvc);

    scanSvc.$inject =['localStorageService'];

    function scanSvc(localStorageService) {

        return {
            getCurrentScans: getCurrentScans,
            setCurrentScans: setCurrentScans,
            getCurrentScan: getCurrentScan,
            setCurrentScan: setCurrentScan
        };

        function getCurrentScans() {
            return localStorageService.get("currentScans");
        };

        function setCurrentScans(currentScans) {
            localStorageService.set("currentScans", currentScans);
        };

        function getCurrentScan() {
            return localStorageService.get("currentScan");
        };

        function setCurrentScan(currentScan) {
            localStorageService.set("currentScan", currentScan);
        };
    };

}(angular.module("app")));