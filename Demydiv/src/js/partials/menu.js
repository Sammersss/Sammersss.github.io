$(function($) {

	//	add class active to menu link
	var $menuLink = $('.menu__link');
	$menuLink.on('click', function(e) {
//		e.preventDefault();
		$(this)
			.addClass('active')
			.parent().siblings().find('.active')
			.removeClass('active');

	});
	var $preventLink = $('.menu__link:not(.myClass)');
	$preventLink.on('click', function(e) {
		e.preventDefault();

	});
});
