angular.module('character-creator')
.controller('creatorCtrl', function ($scope, $http, getRaces, getStats, getCharClasses) {
	$scope.createdChar = {};
	$scope.createdChar.stats = getStats();
	$scope.charClasses = getCharClasses();

	$scope.randomNumGen = function(minVal, maxVal) {
		  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
	}

	getRaces().then(function(response) {
		$scope.races = response.data;
		$scope.getSelectedRaceData = function(raceName) {
			$scope.createdChar.selectedRace = $scope.races[raceName];
			$scope.createdChar.raceName = raceName;
			Object.keys($scope.createdChar.stats).forEach(function(index) {
				$scope.createdChar.stats[index] = $scope.randomNumGen($scope.createdChar.selectedRace[index].min, $scope.createdChar.selectedRace[index].max);
				console.log($scope.createdChar.stats[index]);
			});
			$scope.bonus = $scope.randomNumGen($scope.createdChar.selectedRace.Bonus.min, $scope.createdChar.selectedRace.Bonus.max);
		}
	});

	$scope.disableButtonMin = function(statName) {
		if ($scope.createdChar.selectedRace) {
			if($scope.createdChar.stats[statName] <= $scope.createdChar.selectedRace[statName].min)
			{ return true; }
		}
		if (!$scope.createdChar.selectedRace) {
			if ($scope.createdChar.stats[statName] == 0) { return true; }
		}
		return false;
	}

	$scope.disableButtonMax = function(statName) {
		if ($scope.createdChar.selectedRace) {
			if($scope.createdChar.stats[statName] >= $scope.createdChar.selectedRace[statName].max || $scope.bonus <= 0)
			{ return true; }
		}
		if (!$scope.createdChar.selectedRace) {
			if ($scope.createdChar.stats[statName] == 0) { return true; }
		}
		return false;
	}

	$scope.decreaseStat = function(statName) {
			$scope.createdChar.stats[statName]--;
			$scope.bonus++;
	}

	$scope.increaseStat = function(statName) {
			$scope.createdChar.stats[statName]++;
			$scope.bonus--;
	}

	$scope.setClass = function(className) {
		$scope.createdChar.charClass = className;
	}

	$scope.setName = function(charName) {
		$scope.createdChar.charName = charName;
	}

	$scope.disableSave = function() {
		if(!$scope.createdChar.charName || !$scope.createdChar.raceName || !$scope.createdChar.stats || !$scope.createdChar.charClass) {
			return true;
		}
		return false;
	}

	$scope.saveChar = function() {
		console.log($scope.createdChar);
		$http.post('/character', {
			charName: $scope.createdChar.charName,
			raceName: $scope.createdChar.raceName,
			charStats: $scope.createdChar.stats,
			charClass: $scope.createdChar.charClass
		}).then(function() {
			console.log('success');
		})
	}
})
