var login  = angular.module('login', []);

login.controller('LoginController', ['$scope', function($scope) {
	console.log('its login controller');
		$scope.user = {};
		$scope.processing = false;
		$scope.succesLogin = false;
		var userLoggedIn = function() {
			setTimeout(function() {
				console.log('SUCCESS');
				$scope.succesLogin = true;
				$scope.$apply();
			}, 2000);
		};
		var gotError = function(err) {
			setTimeout(function() {
				console.log( "error message - " + err.message );
	        	console.log( "error code - " + err.statusCode );
	        	$scope.loginForm.login.$setValidity("badData", false);
	        	$scope.loginForm.password.$setValidity("badData", false);
	        	$scope.processing = false;
				$scope.user = null;
	        	$scope.$apply();	
			}, 2000);	
		};
		$scope.loginMe = function() {
			var username = $scope.user.login,
				password = $scope.user.password,
				remember = false;
			$scope.processing = true;
			Backendless.UserService.login(username, password, remember, new Backendless.Async(userLoggedIn, gotError));
		};
}]);

login.directive('loginDirective', function() {
	return {
		templateUrl: './components/loginDirective/loginDirective.html'
	};
});