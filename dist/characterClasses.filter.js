angular.module('character-creator')
.filter('charClassEligibility', function() {
	return function(charClasses, charStats) {
		return Object.keys(charClasses).filter(function(classIndex) {
      return Object.keys(charClasses[classIndex]).every(function(statValue) {
        return (charStats[statValue] >= charClasses[classIndex][statValue].min);
      })
    })
  }
})
