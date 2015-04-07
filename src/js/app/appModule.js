/**
 * Created by stromero on 8/18/2014.
 */

(function () {

    var app = angular.module('app', ['ui.router', 'restangular', 'gridster', 'ui.ace', 'ui.select', 'ui.grid.selection',
        'ngSanitize', 'ui.utils', 'ui.grid', 'ui.grid.autoResize', 'ui.bootstrap', 'LocalStorageModule', 'ui.grid.exporter', 'ngAnimate', 'ngTouch']);

// Restangular Configuration
    app.config(function (RestangularProvider) {
        // Note that we run everything on the localhost
        RestangularProvider.setBaseUrl('http://localhost:8080/terians/api/v1');
    });

// Extra data from Collections Nested in JSON
    app.config(function (RestangularProvider) {

        // add a response intereceptor
        RestangularProvider.addResponseInterceptor(function (data, operation) {
            var extractedData;
            if (operation === "getList") {
                extractedData = data.data;
                extractedData.meta = data.size;
            } else {
                extractedData = data;
            }
            return extractedData;
        });

        RestangularProvider.setDefaultHttpFields({cache: true});

    });

// Enable Cross-Origin Resource Sharing
    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

// Router Configuration
    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('signin', {

            url: '/signin',
            templateUrl: 'src/html/partials/signIn.html',
            controller: 'signInCtrl'

        });

        $stateProvider.state('signup', {

            url: '/signup',
            templateUrl: 'src/html/partials/signUp.html',
            controller: 'signUpCtrl'

        });

        $stateProvider.state('dashboard', {

            url: '/dashboard',
            templateUrl: 'src/html/partials/dashboard.html',
            controller: 'dashboardCtrl'

        });

        $stateProvider.state('dashboard.issues', {

            url: '/issue',
            templateUrl: 'src/html/partials/issues.html',
            controller: 'issuesCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {

                    return issuesRestSvc.getIssues(scanSvc.getCurrentScan().teriansId);
                }
            }
        });

        $stateProvider.state('dashboard.critical', {

            url: '/critical',
            templateUrl: 'src/html/partials/critical.html',
            controller: 'criticalIssuesCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {
                    return issuesRestSvc.getCriticalIssues(scanSvc.getCurrentScan().teriansId);
                }
            }

        });

        $stateProvider.state('dashboard.trending', {

            url: '/trending',
            templateUrl: 'src/html/partials/trending.html',
            controller: 'trendingCtrl',
            resolve: {
                scans: function (scanRestSvc, projectsSvc) {
                    return scanRestSvc.getScans(projectsSvc.getCurrentProjectId());
                }
            }

        });

        $stateProvider.state('dashboard.techInvestment', {

            url: '/techInvestment',
            templateUrl: 'src/html/partials/techInvestment.html',
            controller: 'techInvestmentCtrl'

        });

        $stateProvider.state('dashboard.dependencies', {

            url: '/dependency',
            templateUrl: 'src/html/partials/dependencies.html',
            controller: 'dependenciesCtrl'

        });

        $stateProvider.state('dashboard.issuesDrillDown', {

            url: '/issuesDrillDown',
            templateUrl: 'src/html/partials/issuesDrillDown.html',
            controller: 'issuesDrillDownCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {
                    return issuesRestSvc.getIssues(scanSvc.getCurrentScan().teriansId);
                }
            }

        });

        $stateProvider.state('dashboard.low', {

            url: '/low',
            templateUrl: 'src/html/partials/low.html',
            controller: 'lowIssuesCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {
                    return issuesRestSvc.getLowIssues(scanSvc.getCurrentScan().teriansId);
                }
            }

        });

        $stateProvider.state('dashboard.high', {

            url: '/high',
            templateUrl: 'src/html/partials/high.html',
            controller: 'highIssuesCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {
                    return issuesRestSvc.getHighIssues(scanSvc.getCurrentScan().teriansId);
                }
            }
        });

        $stateProvider.state('dashboard.medium', {

            url: '/medium',
            templateUrl: 'src/html/partials/medium.html',
            controller: 'mediumIssuesCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {
                    return issuesRestSvc.getMediumIssues(scanSvc.getCurrentScan().teriansId);
                }
            }

        });

        $stateProvider.state('dashboard.bestPractices', {

            url: '/bestPractices',
            templateUrl: 'src/html/partials/bestPractices.html',
            controller: 'bestPracticesIssuesCtrl',
            resolve: {
                issues: function (issuesRestSvc, scanSvc) {
                    return issuesRestSvc.getBestPracticesIssues(scanSvc.getCurrentScan().teriansId);
                }
            }

        });

        $stateProvider.state('dashboard.architecture', {

            url: '/architecture',
            templateUrl: 'src/html/partials/architecture.html',
            controller: 'architectureCtrl'

        });

        $urlRouterProvider.otherwise('/signin');

    });

    app.run(['$state', '$stateParams',
        function ($state, $stateParams) {
            //this solves page refresh and getting back to state
        }]);

}());