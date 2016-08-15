$(document).ready(function() {

	$('.resize').width($('.wrapper').width()+1);
	$('.header').height($('.header').width()/3.413333333333333);

	$(window).resize(function() {
		$('.resize').width($('.wrapper').width());
		$('.header').height($('.header').width()/3.413333333333333);
		 })
	});
