var Jumbotron = function () {
	this.body = document.body;
}

Jumbotron.prototype = {
	getTarget: function () {
		return this.body;
	},
	
	getElem: function (elem) {
		return document.querySelector(elem);
	},
	
	mkText: function (text) {
		return document.createTextNode(text);
	},
	
	mkElem: function (elem) {
		return document.createElement(elem);
	},
	
	addClass: function (elem, cls) {
		return elem.classList.add(cls);
	},
	
	append: function (child, elem) {
		return child.appendChild(elem);
	},
	
	mkBase:  function () {
		var div	= this.mkElem('div');
		this.addClass(div, 'container');
		this.append(this.getTarget(), div);
		var div	= this.mkElem('div');
		this.addClass(div, 'jumbotron');	
		var container = this.getElem('.container');
		this.append(container, div);
		
		return div;
	},
	
	mkTest: function (target, title) {	
		var header = this.mkElem('h1');
		header.innerHTML = title;
		this.append(target, header);
		var lists = this.mkElem('ol');
		this.addClass(lists, 'lists');
		this.append(target, lists);
		
		return lists;
	},
		
	mkQuestion: function (target, question) {
		var li	= this.mkElem('li');
		li.innerHTML = "<h4>Вопрос №" + question + "</h4>";
		this.addClass(li, 'listsLi');
		this.append(target, li);
		var div = this.mkElem('div');
		this.addClass(div, 'checkbox');	
		this.append(li, div);
		
		return div;	
	},
	
	mkAnswer: function (target, answer) {
		var label = this.mkElem('label');
		label.innerHTML='<input type="checkbox"/> Вариант ответа №' + answer;
		this.append(target, label);
		
		return label;
	},

	step_button: function () {
		var button	= this.mkElem('button');
		button.classList.add('btn', 'btn-primary', 'btn-block','btn-lg');
		button.innerHTML='Проверить мои результаты';
		var jumbotron = this.getElem('.jumbotron');
		this.append(jumbotron, button);
	},

	run: function () {
		var test = this.mkTest(this.mkBase(), 'Тест по программированию');
		var question = this.mkQuestion(test, 1);
		
		this.mkAnswer(question, 1);
		this.mkAnswer(question, 2);
		this.mkAnswer(question, 3);
		
		var question = this.mkQuestion(test, 2);
		
		this.mkAnswer(question, 1);
		this.mkAnswer(question, 2);
		this.mkAnswer(question, 3);
		
		var question = this.mkQuestion(test, 3);
		
		this.mkAnswer(question, 1);
		this.mkAnswer(question, 2);
		this.mkAnswer(question, 3);
		
		this.step_button();
	},
}

try {
	window.onload = function () {
		var JB	= new Jumbotron();		
		JB.run();		
	}
} catch (e) {
	console.log(e.message);
}
	
