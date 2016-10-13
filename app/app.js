var APPLICATION_ID = '39957A49-46F9-A413-FF94-43AF60796700';
var SECRET_KEY = 'A80E93A1-4626-EDD8-FFD6-5DB894768800';
var VERSION = 'v1';

Backendless.serverURL = "https://api.backendless.com";
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

var app = angular.module('app', [
    'ui.router',
    'hello',
    'app.partials',
    'login',
    'app.userservice'
]);

app.controller('StartCtrl', ['$scope', '$state', function($scope, $state) {
    $state.go('hello');
    console.log('its start controller!!');
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/404");

    $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: './components/404/404.html'
        })
        .state('hello', {
            url: '/hello',
            controller: 'HelloController',
            templateUrl: './components/hello/hello.html'
        });
}]);

var partials = angular.module('app.partials', []);
