'use strict'
$(function(){
    setObject();
    var testing = JSON.parse(getObject());
    var tmpl = _.template($('#test').html());
    var result = tmpl(testing);
    $('body').append(result);
    function setObject(){
        var data = {
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
            }
         };

        var tmp = {data};
        
        localStorage.setItem('funnytest', JSON.stringify(tmp));
        console.log(localStorage);
    }
    
    function getObject(){
        return localStorage.getItem('funnytest');
    }

    console.log(testing);

    //leave one checkbox selectable
    $('.checkbox').click(function() {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
    /*click button*/
    $('#buttonOn').on('click', function(){
        createModal();
        showResult();
    });
    
    /*show result*/	
    function showResult(){
        var elements = $('input:radio');
        var indexElement = 0;

        var elementsCh = $('input:checkbox');
        var indexElementCh = 0;
        for(var index in testing.data){
            if(testing.data[index]){
                testing.data[index].answers.forEach(function(item, i){
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
    }	

    function createModal(){
        
        var owerlay = $('<div class="owerlayWindov"><div class="modal"><h3>Результаты теста</h3><div class="modal_close">&otimes;</div></div></div>');
        var main = $(".main");
        main.append(owerlay);
        
        var list = $('<ol class = "list"></ol>');
        var modal = $(".modal");
        modal.append(list);
        for(var index in testing.data)
        {
            var item = $('<li class = "list__item"></li>');
            list.append(item);
            var quest = $('<h4 class="questionTitle"></h4>');
            item.append(quest);
            quest.text(testing.data[index].question);
            var answer = $('<ul class = "list__answer"></ul>');
            item.append(answer);
            testing.data[index].answers.forEach(function(item){
                if(testing.data[index])
                    var answerItem = $('<li class = "list__answerOne"></li>');
                answer.append(answerItem);
                answerItem.text(item);
            })
        }
        var button = $('.modal_close');
        button.click(removeModal);
    }
    /*delete modal window*/			
    function removeModal(){
        $("input").attr("checked", false);
        $('.owerlayWindov').remove();
    }

});
/*
$(function() {
'use strict';
//    var data = [
//        {
//            question: "Куда на курортных пляжах просят не заплывать отдыхающих?",
//            answer: [
//                "За буйки",
//                "За горизонт",
//                "За границу",
//                "В камыши",
//            ],
//        },
//        {
//            question: "Какое из этих животных чаще всего подвержено бреду?",
//            answer: [
//                "Лапчатый гусь",
//                "Сивая кобыла",
//                "Дареный конь",
//                "Злая собака",
//            ],
//        },
//        {
//            question: "При падении чего загадывают желание?",
//            answer: [
//                "Температуры",
//                "Дисциплины",
//                "Звезды",
//                "Курса рубля",
//            ]
//        }];
//	
    var correctAnswers = ["За буйки", "Сивая кобыла", "Звезды"];

//add to localStorage
    var tempIn = localStorage.setItem("funnytest", JSON.stringify( data ));

//pulled out from localStorage
    var tempOut = JSON.parse(localStorage.getItem( "funnytest" ));
	
	console.log(tempOut);

//generate content
//    var myTest = $('#test').html();
	var tmpl = _.template($('#test').html());
//    var content = tmpl(myTest, {data: tempOut});
    var content = tmpl(tempOut);
	
	
	

	console.log(content);
	
    $('body').append(content);

//leave one checkbox selectable
    $('.checkbox').click(function() {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });

//verification of results

    var checkResult = $('input[type="submit"]');
    checkResult.one('click', verification);

    function verification(event){
        event.preventDefault();
        var answersBlock = $('.answersBlock');
        var comparingAnswers=[];
        $('.answersBlock input:checkbox:checked').each(function(){
            comparingAnswers.push($(this).val());
        });

        var result =[];
        for(var j=0; j< answersBlock.length; j++){
            if ( comparingAnswers[j] === correctAnswers[j]){
                result.push('true');
            } else {
                result.push('false');
            }
        }
//            console.log(result);

//create modal
        var owerlay = $('<div class="owerlayWindov"><div class="modal"><h3>Результаты теста</h3><div class="modal_close">&otimes;</div></div></div>');
        var main = $(".main");
        main.append(owerlay);

        var modalResult = [];
        for(var k=0; k<result.length; k++){
            if(result[k] === 'true'){
                modalResult[k] = '<span style="color:green">Правильный ответ!</span>';
            } else {
                modalResult[k] = 'Вы ответили неверно!';
            }
        }
//console.log(modalResult);
        for (var l=0; l<tempOut.length; l++){
            var questionDiv = $('<div class="questionTitle">'+(l+1)+'.'+tempOut[l].question+'</div>');
            var modal = $(".modal");
            modal.append(questionDiv);
            var answerDiv = $('<div class="answer warning">'+modalResult[l]+'</div>');
            modal.append(answerDiv);
        }
//close modal, reload form
        $('.modal_close').click(function() {
            $('.owerlayWindov').remove();
            location.reload();
        });
    }
});
*/