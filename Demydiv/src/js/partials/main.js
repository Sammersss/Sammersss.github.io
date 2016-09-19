$(function($) {
	// колонки одинаковой высоты
	function heightBlock(column){
		var myblock = 0;

		column.each(function(){
			thisHight = $(this).height();
			center = $('.wrapper').height();
			console.log('center:', center);
			if(thisHight > myblock){
				myblock = thisHight;
			}else if(center > myblock){
				myblock = center*0.69;
			}
		});
		column.height(myblock);
	};

	heightBlock($(".columns .column"));


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


//запускаем модальное окно для галереи
	$("#gallery_hiden").animatedModal({
		modalTarget:'gallery_modal',
		animatedIn:'fadeIn',
		animatedOut:'fadeOut',
		color: 'hsla(0, 0%, 0%, 0.7)',
		animationDuration:'1.5s'
	});


//	запуск галереи для каждого блока картинок
	$(".gallery_modal-guts > div").each(function() {
		allId = $(this).attr('id')
	}).lightGallery({
		thumbnail:true,
		showThumbByDefault: false
	});


// добавляем первым двум блокам новостей клас для отображения на весь родительский блок
	$(".news__box:lt(2)").addClass('news__box-big');

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
