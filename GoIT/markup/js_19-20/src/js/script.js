$(function($) {
$('#featured').orbit({
	'bullets': true,
	'timer' : true,
	'animation' : 'horizontal-slide',
	'animationSpeed': 1000
});

	//add class active to menu link
	var $menuLink = $('.menu__link');
	$menuLink.on('click', function(e) {
		e.preventDefault();
		$(this)
			.addClass('menu__link--active')
			.parent().siblings().find('.menu__link--active')
			.removeClass('menu__link--active');
	});


	// My Accordion
	$('.accordion__tab').on('click', function () {
		//reset all tabs
		$('.accordion_article').hide();
		$('.accordion__tab').removeClass('accordion__tab--active');
		$('.accordion__title').removeClass('accordion__title--active');

		//active clicked tab
		$(this).siblings('.accordion_article').toggle();
		$(this).toggleClass('accordion__tab--active');
		$(this).children('.accordion__title').toggleClass('accordion__title--active');
	});


	//	 smooth scrolling
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	//back to Home
	$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
	$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});


});
