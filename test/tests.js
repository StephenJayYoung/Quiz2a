var chai = require("chai");
var expect = chai.expect;
var path = require("path");
var lib = require('../index');
var gimmeFullName = lib.gimmeFullName;
var gimmeBandFullNames = lib.gimmeBandFullNames;


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
it ('returns all band\'s full names', function() {
	//runs a forEach function and provides the first and last name of each band in array
var bandsArray = ['Shakey Graves', 'The Tallest Man On Earth'];
	});
expect(gimmeBandFullNames(bandsArray)).to.eql(["Shakey Graves", "TheTallestMan OnEarth"]);  
	});


