// wengwengweng

'use strict';

require("mocha");
const assert = require("assert");
const isOdd = require("is-odd");
const isIsOdd = require("./");

describe("isOdd", function() {

	it("should return true if a function is is-odd:", function() {
		assert(isIsOdd(isOdd));
	});

	it("should return false if a function is not is-odd", function() {
		assert(!isIsOdd(function() {}));
	});

	it("should return false even if a function is in disguise", function() {
		assert(!isIsOdd(function() {
			console.log("I'm is-odd");
		}));
	});
	
	it("should return false even if the function body is the same", function() {
		assert(!isIsOdd(isIsOdd.toString()));
	});
});

