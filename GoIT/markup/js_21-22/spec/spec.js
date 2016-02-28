var app = require('../js/dist/function.js');

var data = {
	'1': {
		'question': 'Куда на курортных пляжах просят не заплывать отдыхающих?',
		'answers': ['За буйки', 'За горизонт', 'За границу', 'В камыши'],
		'check': 0
	},
	'2': {
		'question': 'Какое из этих животных чаще всего подвержено бреду?',
		'answers': ["Лапчатый гусь", "Дареный конь", "Злая собака", "Сивая кобыла"],
		'check': 3
	},

	'3': {
		'question': 'При падении чего загадывают желание?',
		'answers': ["Температуры", "Дисциплины", "Звезды", "Курса рубля"],
		'check': 2
	}
};
var tmp = { data };

describe("app", function() {
	it("call setObject: result is not equal", function() {
		var result;
		result = app.setObject();
		expect(result).toEqual(data);
	});

	it("call createTemplate: result is not equal", function() {
		var result;
		result = app.createTemplate(data);
		expect(result).toEqual(tmp);
	});

});

var appSimple = require('../js/app.js');

describe("appSimple", function() {
	it("sayHello ()", function() {
		//prepare
		var result;

		//act
		result = appSimple.sayHello('Vasya');

		//assert
		expect(result).toEqual('Hello, Vasya!');
	});

	it("sum ()", function() {
		//prepare
		var result;

		//act
		result = appSimple.sum(1, 2);

		//assert
		expect(result).toEqual(3);
	});

});
