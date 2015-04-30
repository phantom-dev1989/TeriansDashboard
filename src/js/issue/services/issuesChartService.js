/**
 * Created by stromero on 3/31/2015.
 */
(function (module) {

    module.factory("issuesChartSvc", issuesChartSvc);

    function issuesChartSvc() {

        return {
            transformforPIEChart: transformforPIEChart,
            transformforStackedBarChart: transformforStackedBarChart,
            transformforColumnStackedChart: transformforColumnStackedChart,
            transformforBasicColumnChart: transformforBasicColumnChart,
            transformforTreeMap: transformforTreeMap
        };

        function transformforPIEChart(issues) {

            var tempIssues = []
            for (var i = 0; i < issues.length; i++) {
                tempIssues.push(issues[i].issue);
            }
            tempIssues = tempIssues.sort();
            var uniqueArray = _.uniq(tempIssues, true);
            var counts = _.countBy(tempIssues);
            var data = [];
            for (var i = 0; i < uniqueArray.length; i++) {
                data.push([uniqueArray[i], counts[uniqueArray[i]]]);
            }

            var sortedData = data.sort(function (a, b) {
                return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
            });

            return sortedData.slice(0, 6);
        }

        function transformforStackedBarChart(issues) {

            var tempIssues = []
            for (var i = 0; i < issues.length; i++) {
                tempIssues.push(issues[i].packageName);
            }
            tempIssues = tempIssues.sort();
            var uniqueArray = _.uniq(tempIssues, true);
            var counts = _.countBy(tempIssues);
            var data = [];
            for (var i = 0; i < uniqueArray.length; i++) {
                data.push([uniqueArray[i], counts[uniqueArray[i]]]);
            }

            var sortedData = data.sort(function (a, b) {
                return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
            });
            return sortedData.slice(0, 6);
        }

        function transformforColumnStackedChart(issues) {

            var tempIssues = []
            for (var i = 0; i < issues.length; i++) {
                tempIssues.push(issues[i].className);
            }
            tempIssues = tempIssues.sort();
            var uniqueArray = _.uniq(tempIssues, true);
            var counts = _.countBy(tempIssues);
            var data = [];
            for (var i = 0; i < uniqueArray.length; i++) {
                data.push([uniqueArray[i], counts[uniqueArray[i]]]);
            }

            var sortedData = data.sort(function (a, b) {
                return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
            });
            return sortedData.slice(0, 6);
        }

        function transformforBasicColumnChart(issues) {

            var tempIssues = []
            for (var i = 0; i < issues.length; i++) {
                var category = issues[i].category.replace("_", " ");
                category = category.toUpperCase();
                tempIssues.push(category);
            }
            tempIssues = tempIssues.sort();
            var uniqueArray = _.uniq(tempIssues, true);
            var counts = _.countBy(tempIssues);
            var data = [];
            for (var i = 0; i < uniqueArray.length; i++) {
                data.push([uniqueArray[i], counts[uniqueArray[i]]]);
            }

            var sortedData = data.sort(function (a, b) {
                return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
            });
            return sortedData.slice(0, 10);
        }

        function transformforTreeMap(issues) {

            var tempIssues = []
            for (var i = 0; i < issues.length; i++) {
                tempIssues.push(issues[i].fileName);
            }
            tempIssues = tempIssues.sort();
            var uniqueArray = _.uniq(tempIssues, true);
            var counts = _.countBy(tempIssues);
            var data = [];
            for (var i = 0; i < uniqueArray.length; i++) {
                data.push([uniqueArray[i], counts[uniqueArray[i]]]);
            }

            var sortedData = data.sort(function (a, b) {
                return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
            });
            return sortedData;
        }
    };

}(angular.module("app")));