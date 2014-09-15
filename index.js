
module.exports = {};

module.exports.gimmeFullName = function(genericPersonThing) {
  var result = genericPersonThing.firstName + genericPersonThing.lastName;
  return result;
 };


//second problem
// /**
//  * Calculate many people's first names.
//  *
//  * @param {Array.<Person>} people The people.
//  * @return {Array.<String>} The people's first names.
//  */

module.exports.gimmeFullBandNames = function(bandNames) {
  var result = bandNames.array('Shakey Graves', 'The TallestMan onEarth');
  result.forEach(bandNames) function {

  }
  return result;
 };

// need to access the array, and will need to create a variable that adds firstname and lastname for each person
// after this array is accessed, will need to create a new array that calls on this function using .push
//lastly, will need to return this new array using return






