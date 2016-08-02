angular.module('character-creator')
.factory('getStats', function() {
	//var charStats = ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'];
	var charStats = { Strength: 0, Constitution: 0, Dexterity: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 }
	return function() {
		return charStats;
	}
})
