angular.module('character-creator', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'creatorCtrl',
		templateUrl: 'creator.html'
	})
});
