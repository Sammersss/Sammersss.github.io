$(function($) {

	var $tab = $('li')

	$tab.on('click', function() {
		$(this).addClass('active').siblings().removeClass()
		
		.closest('div.wrapper').find('div.article').removeClass('active').eq($(this).index()).addClass('active');

	});
	var $body = $('body');
	$body.append('<form action = "#" class = "form wrapper"></form>');
	var $form = $('.form');
	$form.append("<div class = 'holder'></div>")
	//create holder__firstName box
		$('.holder').append("<div class = 'holder__firstName box'></div>")
		var $holder__firstName = $('.holder__firstName');
		$holder__firstName.append('<label class = "label" for = "firstName">First name</label>');
		$holder__firstName.append('<input type = "text" id = "firstName" class = "input_field">');
		$holder__firstName.append('<p class = "tooltip tooltip1">Please provide your first name</p>');
	//create holder__lastName box
		$('.holder').append("<div class = 'holder__lastName box'></div>")
		var $holder__lastName = $('.holder__lastName');
		$holder__lastName.append('<label class = "label" for = "lastName">Last name</label>');
		$holder__lastName.append('<input type = "text" id = "lastName" class = "input_field">');
		$holder__lastName.append('<p class = "tooltip tooltip2">Please provide your last name</p>');
	//create holder__address box
		$('.holder').append("<div class = 'holder__address box'></div>")
		var $holder__address = $('.holder__address');
		$holder__address.append('<label class = "label" for = "address">Address</label>');
		$holder__address.append('<input type = "text" id = "address" class = "input_field">');
		$holder__address.append('<p class = "tooltip tooltip3">Your home or work address</p>');
	//create button
		$form.append("<button class='help'>Show help</button>");

		//fistName tooltip 
			$('#firstName').on('mouseover', function(){
				$('.tooltip1').animate({
					opacity: 1
				}, 1000)
			})
			$('#firstName').on('mouseout', function(){
				$('.tooltip1').animate({
					opacity: 0
				}, 1000)
			})
		//lastName tooltip 
			$('#lastName').on('mouseover', function(){
				$('.tooltip2').animate({
					opacity: 1
				}, 1000)
			})
			$('#lastName').on('mouseout', function(){
				$('.tooltip2').animate({
					opacity: 0
				}, 1000)
			})
		//address tooltip 
			$('#address').on('mouseover', function(){
				$('.tooltip3').animate({
					opacity: 1
				}, 1000)
			})
			$('#address').on('mouseout', function(){
				$('.tooltip3').animate({
					opacity: 0
				}, 1000)
			})
			
		//help button animation
			$('.help').on('mouseover', function(){
				$('.help').css({
					background: '#f7b883',
					color: 'white'
				});
			})
			$('.help').on('mouseout', function(){
				$('.help').css({
					background: '#efefef',
					color: '#72675a'
					
				});
			})

		//help button on_click
			$('.help').on('click', function(){
					$('.tooltip').animate({
						opacity: 1
					}, 100)
				})

});
