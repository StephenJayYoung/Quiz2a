var chai = require("chai");
var expect = chai.expect;
var path = require("path");
var lib = require('../index');
var gimmeFullName = lib.gimmeFullName;


//@ param object which includes the properties first name and lastname
//@return: return person's first and last name
//
//



describe("gimmeFullName()", function() {
  // given an object, it returns the objects first and last name
  it("provides us with the objects first and last name", function() {
    //adds the firstName and lastName
		var stevePerson = {
		  "firstName": "Steve",
		  "lastName": "Young",
		};
	  expect(gimmeFullName(stevePerson)).to.eql("SteveYoung");  
  });  
});  

describe('gimmeBandFullNames()', function() {
	//given an array, it returns the objects in the array
it ('returns all people\'s full names', function() {
	//runs a forEach function and 
// will need to edit the syntax of this array below...
array = [
	person1:
	hisFirstName: 'Shakey';
	hisLastName: 'Graves';

	person2:
	hisFirstName: 'TheTallestMan';
	hisLastName: 'OnEarth';
]	
expect(gimmeBandFullNames(array)).to.eql("Shakey Graves", "TheTallestMan OnEarth");  
	});
});

