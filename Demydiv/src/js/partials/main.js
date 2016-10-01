$(function($) {
	// колонки одинаковой высоты
//	function heightBlock(column){
//		var myblock = 0;
//
//		column.each(function(){
//			thisHight = $(this).height();
//			center = $('.wrapper').height();
//			console.log('center:', center);
//			if(thisHight > myblock){
//				myblock = thisHight;
//			}
//			else if(center > myblock){
//				myblock = center*0.79;
//			}
//		});
//		column.height(myblock);
//	};
//
//	heightBlock($(".columns .column"));
//прелоадер
	$(window).on('load', function () {
		var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
		$spinner.fadeOut();
		$preloader.delay(250).fadeOut('slow');
	});


	//	запускаем модальное окно для истории
	$("#history_hidden").animatedModal({
		animatedIn:'fadeIn',
		animatedOut:'fadeOut',
		animationDuration:'1.5s'
	});



//показываем и прячем данные что бдут виводися в модальное окно истории
	$("#history_hidden" ).click(function() {
		$(".modal-content article" ).toggle();
	});
	$("#closebt-container" ).click(function() {
		$(".modal-content article" ).toggle();
	});



//показываем и прячем данные что бдут виводися в модальное окно глереи
	$("#gallery_hiden" ).click(function() {
		$(".gallery_modal-content" ).toggle();
	});
	$("#closebt-container2" ).click(function() {
		$(".gallery_modal-content" ).toggle( "slow", function() {
			// Animation complete.
		});
	});


	//находим перекрывающие изображение элементы в модальном окне и скрываем при наведениии мыши и показываем при сведнии мыши с элемента
	$(document).on({mouseenter: function() {
		$(this).find('.item-info').fadeOut(200).find('.line').css('width','0%');
	},mouseleave: function() {
		$(this).find('.item-info').fadeIn(700).find('.line').css('width','40%');
	}}, '.gallery-wrap');

	//ищем в модальном окне и запускаем lightgallery
	$(document).on('mouseenter', '.gallery-wrap', function(){
		$(".gallery-wrap > div").each(function() {
			allId = $(this).attr('id')
			//						console.log('allId:', allId);
		}).lightGallery({
			thumbnail:true,
			showThumbByDefault: false
		});

	});


	$(document).on('click', '.trigger-gallery', function (event) {
		event.preventDefault();
		$('#gallery-modal').iziModal('open');
	});

	$("#gallery-modal").iziModal({
		title: "Вітаємо в галереї зображень",
		subtitle: "Тут зібрані яскраві моменти життя села Демидів",
		icon: 'icon-chat',
		iconColor: 'white',
		fullscreen: true,
		width: 960,
		padding: 25,
		timeout: 777777,
		timeoutProgressbar: true,
		transitionIn: 'fadeInDown',
		transitionOut: 'bounceOutDown',
		pauseOnHover: true
	});


// добавляем первым двум блокам новостей клас для отображения на весь родительский блок
//	$(".news__box:lt(2)").addClass('news__box-big');

// убирем и добавляем первым двум блокам новостей клас box-big после определенного размера экрана
//	$(window).resize(function(){
//		var windowWidth = $(window).width();
//		if(windowWidth > 1032)$(".news__box:lt(2)").addClass("news__box-big");
//		else $(".news__box:lt(2)").removeClass("news__box-big");
//	});

// убирем и добавляем первым двум блокам новостей клас box-big после определенного размера экрана
	function windowSize(){
		var windowWidth = $(window).width();
		if(windowWidth > 1032)$(".news__box:lt(2)").addClass("news__box-big");
		else $(".news__box:lt(2)").removeClass("news__box-big");
		}

	// при загрузке
//	$(window).load(windowSize);
	// при изменении размеров
//	$(window).resize(windowSize);
	// или "два-в-одном", вместо двух последних строк:
	$(window).on('load resize',windowSize);


// запуск модальных окон для новостей

	$(".news__desc > .trigger-large").on('click',function (event) {
		event.preventDefault();
		$(this).parent(".news__desc").next(".iziModal").iziModal('open');
	});

	$(".iziModal.normal").iziModal({
		title: "Новини Демидова",
		subtitle: "найсвіжіші події з життя громади",
		icon: 'icon-chat',
		iconColor: 'white',
		fullscreen: true,
		transitionOut: 'bounceOutDown',
		timeout: 30000,
		timeoutProgressbar: true,
		pauseOnHover: true,
		timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
		width: 768,
		padding: 25
	});

	$(".iziModal.attention").iziModal({
		title: "Новини Демидова",
		subtitle: "найсвіжіші події з життя громади",
		icon: 'icon-chat',
		iconColor: 'white',
		headerColor: '#e25151',
		fullscreen: true,
		transitionOut: 'bounceOutDown',
		timeout: 30000,
		timeoutProgressbar: true,
		pauseOnHover: true,
		timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
		width: 768,
		padding: 25
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
