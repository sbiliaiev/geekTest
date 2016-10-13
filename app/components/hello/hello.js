var hello = angular.module('hello', [])
.controller('HelloController', ['$scope', '$state', function($scope, $state) {
    console.log('its hello controller!!');
}]);
