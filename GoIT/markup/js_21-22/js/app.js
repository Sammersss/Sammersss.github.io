var app = {
	sayHello: function (name) {
		return 'Hello, ' + name + '!';
	},
	sum: function (a, b) {
		return a*b;
	}

}

//делаем рабочим для браузера и для коноли
try {
module.exports = app;
}catch (e) {}
