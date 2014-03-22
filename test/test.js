var expect = require("chai").expect;
var math = require("../lib/math.js");

describe ("Backend Math", function(){
	describe("Add 2 integers", function(){
		it("should return the sum of the 2 args", function(){
			var results = math.add(10,10);
			expect(results).to.equal(20);
		});
	});

	describe("Subtract 2 integers", function(){
		it("should return the difference of the 2 args", function(){
			var results = math.subtract(10,2);
			expect(results).to.equal(8);
		});
	});

	describe("Multiply 2 integers", function(){
		it("should return the product of the 2 args", function(){
			var results = math.multiply(8,2);
			expect(results).to.equal(16);
		});
	});

	describe("Divide 2 integers", function(){
		it("should return the quotient of the 2 args", function(){
			var results = math.divide(10,2);
			expect(results).to.equal(5);
		});
	});
});
