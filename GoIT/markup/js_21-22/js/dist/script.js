'use strict';

$(function () {
	setObject();
	var testing = JSON.parse(getObject());
	var tmpl = _.template($('#test').html());
	var result = tmpl(testing);
	$('body').append(result);
	function setObject() {
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

		var tmp = { data: data };

		localStorage.setItem('funnytest', JSON.stringify(tmp));
		//        console.log(localStorage);
	}

	function getObject() {
		return localStorage.getItem('funnytest');
	}

	//    console.log(testing);

	//leave one checkbox selectable
	$('.checkbox').click(function () {
		$(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
	});
	/*click button*/
	$('#buttonOn').on('click', function () {
		createModal();
		showResult();
	});

	/*show result*/
	function showResult() {
		var elements = $('input:radio');
		var indexElement = 0;

		var elementsCh = $('input:checkbox');
		var indexElementCh = 0;

		var _loop = function _loop(index) {
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
		};

		for (var index in testing.data) {
			_loop(index);
		}
		indexElement = 0;
	}
	function createModal() {

		var owerlay = $('<div class="owerlayWindov"></div>');
		var modal = $('<div class="modal"><h3>Результаты теста</h3><div class="modal_close">&otimes;</div></div>');
		var main = $('.main');
		main.append(owerlay).append(modal);

		var list = $('<ol class = "list"></ol>');
		modal.append(list);

		var _loop2 = function _loop2(index) {
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
			_loop2(index);
		}
		var button = $('.modal_close');
		button.click(removeModal);
	}
	/*delete modal window*/
	function removeModal() {
		$('input').attr('checked', false);
		$('.owerlayWindov').remove();
		$('.modal').remove();
	}
});

//let a = 5;
//
//if (true){
//	let a = 6;
//	console.log('a', a);
//}
//	console.log('a', a);

//const b = 5;
//a=10;

//let a= 2;
//let b= 3;
//console.log(`${a}+${b} = ${a+b}`);

//function showText(title = 'Default title', a = 200, b = 300) {
//	console.log(`${title} ${a} ${b}`);
//
//}
//showText('hello world');

//
//let sum = (a,b) => a + b;
//console.log('sum(2,3):', sum(2,3));

//
//let arr = [1, 2, 3];
//for (let value of arr) {
//	console.log('value:', value);
//}
