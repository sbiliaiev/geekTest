var login  = angular.module('login', []);

login.controller('LoginController', ['$scope', 'userService', function($scope, userService) {
	console.log('its login controller');
	$scope.userService = userService;
}]);

login.directive('loginDirective', function() {
	return {
		templateUrl: './components/loginDirective/loginDirective.html',
		scope: true,
		link: function(scope) {
			scope.user = {};
			scope.processing = false;
			scope.succesLogin = false;
			scope.loginMe = function() {
				scope.processing = true;
				scope.userService.loginFunc(scope, scope.user);
			};
		}
	};
});