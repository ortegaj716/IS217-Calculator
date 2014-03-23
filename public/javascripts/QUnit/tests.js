var calculator = require('../calculator.js');

test("Single Digit Test", function() {
	calculator.check("0");
  	ok(calculator.numString == "0", "Passed!");
});
