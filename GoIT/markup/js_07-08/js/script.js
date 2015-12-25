$(function($) {
	var $body = $('body');

    //=================CREATE TABS=================

	$body.append('<div class = "wrapper"></div>');
    var $tabWrapp = $('div.wrapper');

    //create ul

    $tabWrapp.append('<ul class="tabs"></ul>');
    var $tabs = $('ul.tabs');

    //create li

    $tabs.append(
        '<li class="active">Nunc tincidunt</li>'+
        '<li>Proin dolor</li>'+
        '<li>Aenean lacinia</li>'
    );
    //create artacle №1

    $tabWrapp.append('<div class = "article active"><p class = "nuncTab"></p></div>');

    //append text in p

    $('.nuncTab').text("Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.");

    //create artacle №2

    $tabWrapp.append('<div class = "article"><p class = "proinTab"></p></div>');

    //append text in p

    $('.proinTab').text("Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.");

    //create artacle №3

    $tabWrapp.append('<div class = "article"><p class = "aeneanTab"></p></div>').find('div:last').addClass('last').append('<p class = "aeneanTab2"></p>');

    //append text in p
    $('.aeneanTab').text("Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.");
    $('.aeneanTab2').text("Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.");

    //create on_click function

    var $tab = $('li');

    $tab.on('click', function() {
        $(this).addClass('active').siblings().removeClass()
            .closest('div.wrapper').find('div.article').removeClass('active').eq($(this).index()).addClass('active');
    });

    //  =====================CREATE FORM=====================

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

    //create on_click function

        var $input = $('input');
        $input.on('mouseover', function() {
            $(this).siblings('.tooltip').addClass('show');
        });
        var $input = $('input');
        $input.on('mouseout', function() {
            $(this).siblings('.tooltip').removeClass('show');
        });

    //help button on_click function

        $('.help').on('click', function(){
            $('.tooltip').addClass('show').css({
                transition: '0.5s'

            });
        });

    //help button modification

        $('.help').on('mouseover', function(){
            $('.help').css({
                background: '#f7b883',
                color: 'white'
            });
        });
        $('.help').on('mouseout', function(){
            $('.help').css({
                background: '#efefef',
                color: '#72675a'
            });
        });
});
