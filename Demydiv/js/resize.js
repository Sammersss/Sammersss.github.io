$(document).ready(function() {        

    $('.resize').width($('.wrapper').width());
    $('.header').height($('.header').width()/3.41333333333333);
  
    $(window).resize(function() {
        $('.resize').width($('.wrapper').width());
		$('.header').height($('.header').width()/3.41333333333333);
         })
    });
