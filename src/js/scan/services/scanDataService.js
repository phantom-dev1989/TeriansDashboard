(function (module) {

    var scanDataSvc = function (moment) {

        var getScanDateAndVersions = function (scans) {

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

        var getScanDateAndVersionsEmpty = function () {

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


        return {
            getScanDateAndVersions: getScanDateAndVersions,
            getScanDateAndVersionsEmpty: getScanDateAndVersionsEmpty
        };
    };

    module.factory("scanDataSvc", scanDataSvc);

}(angular.module("app")));