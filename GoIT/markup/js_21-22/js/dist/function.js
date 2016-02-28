'use strict';

var app = {
	setObject: function setObject() {
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
		return data;
	},
	createTemplate: function createTemplate(data) {
		var tmp = { data: data };
		return tmp;
	},


	/*show result*/
	showResult: function showResult() {
		var elements = $('input:radio');
		var indexElement = 0;

		var elementsCh = $('input:checkbox');
		var indexElementCh = 0;
		for (var index in testing.data) {
			if (testing.data[index]) {
				testing.data[index].answers.forEach(function (item, i) {
					if (elements[indexElement].checked) {
						$('.list__answerOne')[indexElement].style.color = "red";
						$('.list__answerOne')[indexElement].style.background = "rgba(255, 69, 0, 0.4)";
					}
					if (i === testing.data[index].check) {
						if (elements[indexElement].checked) {
							$('.list__answerOne')[indexElement].style.color = "black";
							$('.list__answerOne')[indexElement].style.background = "rgba(0,255,0, 0.4)";
						}
					}
					indexElement++;
				});
			}
		}
		indexElement = 0;
	},
	createModal: function createModal() {
		var owerlay = $('<div class="owerlayWindov"></div>');
		var modal = $('<div class="modal"><h3>Результаты теста</h3><div class="modal_close">&otimes;</div></div>');
		var main = $('.main');
		main.append(owerlay).append(modal);

		var list = $('<ol class = "list"></ol>');
		modal.append(list);

		var _loop = function _loop(index) {
			var item = $('<li class = "list__item"></li>');
			list.append(item);
			var quest = $('<h4 class="questionTitle"></h4>');
			item.append(quest);
			quest.text(testing.data[index].question);
			var answer = $('<ul class = "list__answer"></ul>');
			item.append(answer);
			testing.data[index].answers.forEach(function (item) {
				if (testing.data[index]) {
					var answerItem = $('<li class = "list__answerOne"></li>');
					answer.append(answerItem);
					answerItem.text(item);
				}
			});
		};

		for (var index in testing.data) {
			_loop(index);
		}
		var button = $('.modal_close');
		button.click(app.removeModal);
	},

	/*delete modal window*/
	removeModal: function removeModal() {
		$('input').attr('checked', false);
		$('.owerlayWindov').remove();
		$('.modal').remove();
	}
};

try {
	module.exports = app;
} catch (e) {};
