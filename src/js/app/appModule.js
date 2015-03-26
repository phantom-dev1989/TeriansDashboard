/**
 * Created by stromero on 8/18/2014.
 */

(function () {

    var app = angular.module('app', ['ui.router', 'restangular', 'gridster', 'ui.ace', 'ui.select', 'ngSanitize', 'ui.utils', 'ui.grid', 'ui.grid.autoResize', 'ui.bootstrap']);

// Restangular Configuration
    app.config(function (RestangularProvider) {
        // Note that we run everything on the localhost
        //RestangularProvider.setBaseUrl('http://127.0.0.1:8080/terians/api/v1');
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

            url: '/issues',
            templateUrl: 'src/html/partials/issues.html',
            controller: 'issuesCtrl'

        });

        $stateProvider.state('dashboard.critical', {

            url: '/critical',
            templateUrl: 'src/html/partials/critical.html',
            controller: 'criticalIssuesCtrl'

        });

        $stateProvider.state('dashboard.trending', {

            url: '/trending',
            templateUrl: 'src/html/partials/trending.html',
            controller: 'trendingCtrl'

        });

        $stateProvider.state('dashboard.techInvestment', {

            url: '/techInvestment',
            templateUrl: 'src/html/partials/techInvestment.html',
            controller: 'techInvestmentCtrl'

        });

        $stateProvider.state('dashboard.dependencies', {

            url: '/dependencies',
            templateUrl: 'src/html/partials/dependencies.html',
            controller: 'dependenciesCtrl'

        });

        $stateProvider.state('dashboard.issuesDrillDown', {

            url: '/issuesDrillDown',
            templateUrl: 'src/html/partials/issuesDrillDown.html',
            controller: 'issuesDrillDownCtrl'

        });

        $stateProvider.state('dashboard.low', {

            url: '/low',
            templateUrl: 'src/html/partials/low.html',
            controller: 'lowIssuesCtrl'

        });

        $stateProvider.state('dashboard.high', {

            url: '/high',
            templateUrl: 'src/html/partials/high.html',
            controller: 'highIssuesCtrl'

        });

        $stateProvider.state('dashboard.medium', {

            url: '/medium',
            templateUrl: 'src/html/partials/medium.html',
            controller: 'mediumIssuesCtrl'

        });

        $stateProvider.state('dashboard.bestPractices', {

            url: '/bestPractices',
            templateUrl: 'src/html/partials/bestPractices.html',
            controller: 'bestPracticesIssuesCtrl'

        });

        $stateProvider.state('dashboard.architecture', {

            url: '/architecture',
            templateUrl: 'src/html/partials/architecture.html',
            controller: 'architectureCtrl'

        });

        $urlRouterProvider.otherwise('/signin');

    });

}());