angular.module('character-creator')
.factory('getCharClasses', function() {
  var charClasses = {
    Fighter: {
      Strength: { min: 11 },
      Constitution: { min: 0 },
      Dexterity: { min: 0 },
      Intelligence: { min: 0 },
      Wisdom: { min: 0 },
      Charisma: { min: 0 }
    },
    Cleric: {
      Strength: { min: 0 },
      Constitution: { min: 0 },
      Dexterity: { min: 0 },
      Intelligence: { min: 0 },
      Wisdom: { min: 11 },
      Charisma: { min: 0 }
    },
    Thief: {
      Strength: { min: 0 },
      Constitution: { min: 0 },
      Dexterity: { min: 11 },
      Intelligence: { min: 0 },
      Wisdom: { min: 0 },
      Charisma: { min: 0 }
    },
    Mage: {
      Strength: { min: 0 },
      Constitution: { min: 0 },
      Dexterity: { min: 0 },
      Intelligence: { min: 11 },
      Wisdom: { min: 0 },
      Charisma: { min: 0 }
    },
    Bishop: {
      Strength: { min: 0 },
      Constitution: { min: 0 },
      Dexterity: { min: 0 },
      Intelligence: { min: 12 },
      Wisdom: { min: 12 },
      Charisma: { min: 0 }
    },
    Samurai: {
      Strength: { min: 15 },
      Constitution: { min: 14 },
      Dexterity: { min: 10 },
      Intelligence: { min: 11 },
      Wisdom: { min: 10 },
      Charisma: { min: 0 }
    },
    Lord: {
      Strength: { min: 15 },
      Constitution: { min: 15 },
      Dexterity: { min: 14 },
      Intelligence: { min: 12 },
      Wisdom: { min: 12 },
      Charisma: { min: 15 }
    },
    Ninja: {
      Strength: { min: 17 },
      Constitution: { min: 17 },
      Dexterity: { min: 17 },
      Intelligence: { min: 17 },
      Wisdom: { min: 17 },
      Charisma: { min: 17 }
    }
  }
  return function() {
    return charClasses;
  }
})
