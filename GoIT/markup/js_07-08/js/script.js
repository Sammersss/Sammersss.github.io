$(function($) {

	var $tab = $('li')

	$tab.on('click', function() {
		$(this).addClass('active').siblings().removeClass()
		
		.closest('div.wrapper').find('div.article').removeClass('active').eq($(this).index()).addClass('active');

	});

});
