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

// describe('gimmeFullNames()', function() {
// 	it ('returns all people\'s full names', function() {
// //     // follow the same procedure as above.
// //   });

// // });

