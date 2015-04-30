(function (module) {

    module.factory("scanDataSvc", scanDataSvc);

    scanDataSvc.$inject =['moment'];

    function scanDataSvc(moment) {

        return {
            getScanDateAndVersions: getScanDateAndVersions,
            getScanDateAndVersionsEmpty: getScanDateAndVersionsEmpty
        };

        function getScanDateAndVersions(scans) {

            var scanDateAndVersions = [];
            for (var i = 0; i < scans.length; i++) {
                scanDateAndVersions.push({
                    "date": moment(scans[i].date).format('MM-DD-YYYY hh:mm A'),
                    "projectVersion": scans[i].projectVersion,
                    "teriansId": scans[i].teriansId
                });
            }

            for (var i = 0; i < 10 - scans.length; i++) {
                scanDateAndVersions.push({
                    "date": " ",
                    "projectVersion": " ",
                    "teriansId": " "
                });
            }

            return scanDateAndVersions;
        };

        function getScanDateAndVersionsEmpty() {

            var scanDateAndVersions = [];
            for (var i = 0; i < 10; i++) {
                scanDateAndVersions.push({
                    "date": " ",
                    "projectVersion": " ",
                    "teriansId": " "
                });
            }

            return scanDateAndVersions;
        };
    };

}(angular.module("app")));