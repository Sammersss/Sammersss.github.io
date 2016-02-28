var app = require('../js/app.js');

describe("app", function() {
	it("sayHello ()", function() {
		//prepare
		var result;

		//act
		result = app.sayHello('Vasya');

		//assert
		expect(result).toEqual('Hello, Vasya!');
	});




	it("sum ()", function() {
		//prepare
		var result;

		//act
		result = app.sum(1, 2);

		//assert
		expect(result).toEqual(3);
	});


	it("army ()", function() {
		//prepare
		var result;

		//act
		result = app.army(2);

		//assert
		expect(result).toBe(2);
	});
});









//var app = require('../js/app.js');
//
//describe("app", function() {
//	it("sayHello method", function() {
//		//prepare
//		var result;
//
//		//act
//		result = app.sayHello('Vasya');
//
//		//assert
//		expect(result).toBe('Hello, Vasya');
//	});
//});
