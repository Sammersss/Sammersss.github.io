$(function($) {

	//add class active to menu link
	var $menuLink = $('.menu__link');
	$menuLink.on('click', function(e) {
		e.preventDefault();
		$(this)
			.addClass('active')
			.parent().siblings().find('.active')
			.removeClass('active');
		console.log('this:', this);
	});

	//	 smooth scrolling
//	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
//		e.preventDefault();
//
//		var target = this.hash,
//			$target = $(target);
//
//		$('html, body').stop().animate({
//			'scrollTop': $target.offset().top
//		}, 900, 'swing', function () {
//			window.location.hash = target;
//		});
//	});

	//back to Home
//	$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
//	$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
//


});
