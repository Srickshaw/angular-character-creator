angular.module('character-creator')
.factory('getRaces', function($http) {
	return function() {
		return $http.get("/races");
	}
})
