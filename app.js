const app = angular.module('RSSFeedApp', [ 
    'ngRoute',
    'angular-loading-bar',
    'ui.bootstrap',
    'ngResource',
    'ngTable',
    'ngSanitize',
    'ngMessages'
])
    .config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'index.html',
                controller: 'FeedCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    });