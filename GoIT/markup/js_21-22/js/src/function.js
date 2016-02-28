let app = {
	setObject ()
	{
		let data = {
			'1': {
				'question': 'Куда на курортных пляжах просят не заплывать отдыхающих?',
				'answers': [
					'За буйки',
					'За горизонт',
					'За границу',
					'В камыши',
				],
				'check': 0,
			},
			'2': {
				'question': 'Какое из этих животных чаще всего подвержено бреду?',
				'answers': [
					"Лапчатый гусь",
					"Дареный конь",
					"Злая собака",
					"Сивая кобыла",
				],
				'check': 3,
			},
			'3': {
				'question': 'При падении чего загадывают желание?',
				'answers': [
					"Температуры",
					"Дисциплины",
					"Звезды",
					"Курса рубля",
				],
				'check': 2,
			},
		}
		return data;
	},
	createTemplate (data)
	{
		let tmp = {data}
		return tmp;
	},


	/*show result*/
	showResult ()
	{
		let elements = $('input:radio');
		let indexElement = 0;

		let elementsCh = $('input:checkbox');
		let indexElementCh = 0;
		for(var index in testing.data){
			if(testing.data[index]){
				testing.data[index].answers.forEach((item,i)=>
													{
					if(elements[indexElement].checked){
						$('.list__answerOne')[indexElement].style.color = "red";
						$('.list__answerOne')[indexElement].style.background = "rgba(255, 69, 0, 0.4)";
					}
					if(i === testing.data[index].check){
						if(elements[indexElement].checked){
							$('.list__answerOne')[indexElement].style.color = "black";
							$('.list__answerOne')[indexElement].style.background = "rgba(0,255,0, 0.4)";
						}
					}
					indexElement++;
				})
			}
		}
		indexElement = 0;
	},
	createModal ()
	{
		let owerlay = $('<div class="owerlayWindov"></div>');
		let modal = $('<div class="modal"><h3>Результаты теста</h3><div class="modal_close">&otimes;</div></div>');
		let main = $('.main');
		main.append(owerlay)
			.append(modal);

		let list = $('<ol class = "list"></ol>');
		modal.append(list);
		for(let index in testing.data)
		{
			let item = $('<li class = "list__item"></li>');
			list.append(item);
			let quest = $('<h4 class="questionTitle"></h4>');
			item.append(quest);
			quest.text(testing.data[index].question);
			let answer = $('<ul class = "list__answer"></ul>');
			item.append(answer);
			testing.data[index].answers.forEach((item)=>
												{
				if(testing.data[index]){
					let answerItem = $('<li class = "list__answerOne"></li>');
				answer.append(answerItem);
				answerItem.text(item);
				}
			})
		}
		let button = $('.modal_close');
		button.click(app.removeModal);
	},
	/*delete modal window*/
	removeModal ()
	{
		$('input').attr('checked', false);
		$('.owerlayWindov').remove();
		$('.modal').remove();
	}

}

try{
	module.exports = app;
}catch(e){};
