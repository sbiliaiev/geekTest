var userService = angular.module('app.userservice', []);

userService.factory('userService', [function() {
	var loginFunc = function(scope, user) {
		var userLoggedIn = function() {
			setTimeout(function() {
				console.log('SUCCESS');
				scope.succesLogin = true;
				scope.$apply();
			}, 2000);
		};
		var gotError = function(err) {
			setTimeout(function() {
				console.log( "error message - " + err.message );
	        	console.log( "error code - " + err.statusCode );
	        	scope.loginForm.login.$setValidity("badData", false);
	        	scope.loginForm.password.$setValidity("badData", false);
	        	scope.processing = false;
				scope.user = null;
	        	scope.$apply();	
			}, 2000);	
		};
		var username = user.login,
			password = user.password,
			remember = false;
		Backendless.UserService.login(username, password, remember, new Backendless.Async(userLoggedIn, gotError));	
	};
	return {
		loginFunc: loginFunc
	};
}]);