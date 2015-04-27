/**
 * Created by stromero on 4/14/2015.
 */
(function (module) {

    var dependencyDataSvc = function () {

        var getDependencyData = function (dependencies) {

            var dependencyData = [];
            for (var i = 0; i < dependencies.length; i++) {
                dependencyData.push({
                    Dependency: dependencies[i].fileName,
                    Description: dependencies[i].description,
                    teriansId: dependencies[i].teriansId

                });
            }

            // Push empty rows
            for (var i = 0; i < 9; i++) {
                dependencyData.push({
                    Dependency: " ",
                    Description: " ",
                    teriansId: " "

                });
            }
                return dependencyData;
        };

        var getIssuesData = function (issues) {

            var issueData = [];
            for (var i = 0; i < issues.length; i++) {
                issueData.push({
                    Issue: issues[i].issue,
                    Description: issues[i].description,
                    Severity: issues[i].severity,
                    Category: issues[i].category,
                    Package: issues[i].packageName,
                    Class: issues[i].className
                });
            }

            // Push empty rows
            for (var i = 0; i < 9 - issues.length; i++) {
                issueData.push({
                    Issue: " ",
                    Description: " ",
                    Severity: " ",
                    Category: " ",
                    Package: " ",
                    Class: " "
                });
            }

            return issueData;
        };

        var getIssuesDataEmpty = function () {

            var issueData = [];
            for (var i = 0; i < 9; i++) {
                issueData.push({
                    Issue: " ",
                    Description: " ",
                    Severity: " ",
                    Category: " ",
                    Package: " ",
                    Class: " "
                });
            }
            return issueData;
        };

        var getClassesData = function (classes) {

            var classData = [];
            var srcData = [];
            var combinedData = [];
            for (var i = 0; i < classes.length; i++) {
                classData.push({
                    Name: classes[i].name,
                    teriansId: classes[i].teriansId
                });
                srcData.push({
                    teriansId: classes[i].teriansId,
                    lineNumbers: classes[i].lineNumbers,
                    sourceCode: classes[i].sourceCode
                });
            }

            // Push empty rows
            for (var i = 0; i < 9-classes.length; i++) {
                classData.push({
                    Name: " ",
                    teriansId: " "
                });
            }

            combinedData.push(classData);
            combinedData.push(srcData);

            return combinedData;

        };

        var getClassesDataEmpty = function () {

            var classData = [];
            // Push empty rows
            for (var i = 0; i < 9; i++) {
                classData.push({
                    Name: " ",
                    teriansId: " "
                });
            }
            return classData;
        };

        var getCVEData = function (vulnerabilities) {

            var vulnerabilityData = [];
            for (var i = 0; i < vulnerabilities.length; i++) {
                vulnerabilityData.push({
                    Name: vulnerabilities[i].name,
                    CVE: vulnerabilities[i].cve,
                    CWE: vulnerabilities[i].cwe,
                    Description: vulnerabilities[i].description,
                    Severity: vulnerabilities[i].severity
                });
            }

            // Push empty rows
            for (var i = 0; i < 9-vulnerabilities.length; i++) {
                vulnerabilityData.push({
                    Name: " ",
                    CVE: " ",
                    CWE: " ",
                    Description: " ",
                    Severity: " "
                });
            }

            return vulnerabilityData;

        };

        var getCVEDataEmpty = function () {

            var vulnerabilityData = [];
            for (var i = 0; i < 9; i++) {
                vulnerabilityData.push({
                    Name: " ",
                    CVE: " ",
                    CWE: " ",
                    Description: " ",
                    Severity: " "
                });
            }

            return vulnerabilityData;

        };


        return {
            getIssuesData: getIssuesData,
            getIssuesDataEmpty: getIssuesDataEmpty,
            getClassesData: getClassesData,
            getClassesDataEmpty: getClassesDataEmpty,
            getCVEData: getCVEData,
            getCVEDataEmpty: getCVEDataEmpty,
            getDependencyData: getDependencyData

        };
    };

    module.factory("dependencyDataSvc", dependencyDataSvc);

}(angular.module("app")));