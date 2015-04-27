/**
 * Created by stromero on 4/6/2015.
 */
/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    var trendingChartSvc = function (moment) {

        var transformforAreaSplineChart = function (scans) {

            var tempScans = []
            for (var i = 0; i < scans.length; i++) {

                tempScans.push({
                    projectVersion: scans[i].projectVersion,
                    complexity: scans[i].complexity,
                    techdebt: scans[i].techdebt,
                    abstractness: scans[i].abstractness,
                    instability: scans[i].instability,
                    methodCount: scans[i].methodCount,
                    clazzCount: scans[i].clazzCount,
                    packageCount: scans[i].packageCount,
                    issueCount: scans[i].issueCount,
                    issueCriticalCount: scans[i].issueCriticalCount,
                    issueHighCount: scans[i].issueHighCount,
                    issueMediumCount: scans[i].issueMediumCount,
                    issueLowCount: scans[i].issueLowCount,
                    issueBestPracticeCount: scans[i].issueBestPracticeCount,
                    loc: scans[i].loc,
                    circularDependencyCount: scans[i].circularDependencyCount,
                    date: moment(scans[i].date).format('MM-DD-YYYY hh:mm A')
                });
            }

            return tempScans;
        }

        return {
            transformforAreaSplineChart: transformforAreaSplineChart
        };
    };

    module.factory("trendingChartSvc", trendingChartSvc);

}(angular.module("app")));