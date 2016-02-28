let testing;
let tmpl;
let result;

$(function(){

	let tmp = app.createTemplate(app.setObject());
	localStorage.setItem('funnytest', JSON.stringify(tmp));
	testing = JSON.parse(localStorage.getItem('funnytest'));
	tmpl = _.template($('#test').html());
	result = tmpl(testing);
	$('body').append(result);

	//leave one checkbox selectable
	$('.checkbox').click(function() {
		$(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
	});
	/*click button*/
	$('#buttonOn').on('click', function(){
		app.createModal();
		app.showResult();
	});
});
