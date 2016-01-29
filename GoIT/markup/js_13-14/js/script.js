$(function() {
'use strict';
    var data = [
        {
            question: "Куда на курортных пляжах просят не заплывать отдыхающих?",
            answer: [
                "За буйки",
                "За горизонт",
                "За границу",
                "В камыши",
            ],
        },
        {
            question: "Какое из этих животных чаще всего подвержено бреду?",
            answer: [
                "Лапчатый гусь",
                "Сивая кобыла",
                "Дареный конь",
                "Злая собака",
            ],
        },
        {
            question: "При падении чего загадывают желание?",
            answer: [
                "Температуры",
                "Дисциплины",
                "Звезды",
                "Курса рубля",
            ]
        }];

    var correctAnswers = ["За буйки", "Сивая кобыла", "Звезды"];

//add to localStorage
    var tempIn = localStorage.setItem("funnytest", JSON.stringify( data ));

//pulled out from localStorage
    var tempOut = JSON.parse(localStorage.getItem( "funnytest" ));

//generate content
    var myTest = $('#test').html();
    var content = tmpl(myTest, {data: tempOut});  
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
