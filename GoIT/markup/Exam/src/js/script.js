(function($) {

	$.support.cors = true;

	$(function() {

		//	back to Home scroll

		$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
		$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 2000); return false;});

		//	jCARUSEL controls

		$('.jcarousel').jcarousel({
			animation: 'slow',
			wrap: 'circular'
		})
			.jcarouselAutoscroll({
			interval: 2000,
			target: '+=1',
			autostart: true
		});
		$('.arrows__prev')
			.jcarouselControl({
			target: '-=1'
		});
		$('.arrows__next')
			.jcarouselControl({
			target: '+=1'
		});
		$('.about__steps').hover(
			function(){
				$('.jcarousel').jcarouselAutoscroll('stop');
			},
			function(){
				$('.jcarousel').jcarouselAutoscroll('start')
			}
		);

		//	partners data generation

		var partnersList = $('#partners__list').html();
		var content = tmpl(partnersList, partners);
		$('.partners__wrap').append(content);


		//	partners slider

		var opened = false;

		function showMorePartners(e) {
			e.preventDefault();
			var $partners = $('.partners__list-hidden');
			if (opened) {

				opened = false;

				$partners.slideUp();
				$('.partners__button').html('See other partners');

			} else {
				opened = true;
				$partners.slideDown();
				$('.partners__button').html('Collapse');
			}
		}
		$('.partners__button').on("click", showMorePartners);


		// fancybox init
		$('.fancybox').fancybox();



		//	 smooth scrolling

		$('a[href^="#"]').bind('click.smoothscroll',function (e) {
			e.preventDefault();

			var target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 2000, 'swing', function () {
				window.location.hash = target;
			});
		});

		//	picture ajax request
		
				var picData = {
			"images":[
				{"imageurl": "dist/img/ideas__bg1.jpg", "word": "Sport"},
				{"imageurl": "dist/img/ideas__bg2.jpg", "word": "Wellnes"},
				{"imageurl": "dist/img/ideas__bg3.jpg", "word": "Extreme Sports"},
				{"imageurl": "dist/img/ideas__bg4.jpg", "word": "Games"},
				{"imageurl": "dist/img/ideas__bg5.jpg", "word": "Culture"},
				{"imageurl": "dist/img/ideas__bg6.jpg", "word": "Relaxation"},
				{"imageurl": "dist/img/ideas__bg7.jpg", "word": "Travelling"}
			]};
		var pictureData = tmpl($('#picture-template').html(), picData);
		$('.ideas__wrap').append(pictureData);
		$('.ideas__list').isotope({
			itemSelector: '.ideas__item',
			layoutMode: 'masonry',
			transitionDuration: '1.3s',
			masonry: {
				gutter: 20
			}
		});
		

		var pictureRequest = '';

		function renderList(pictureRequest) {
			$.ajax({
				type: "GET",
				dataType: "json",
				cache: false,
				url: 'http://api.pixplorer.co.uk/image?word=' + pictureRequest + '&amount=7&size=tb',
				success: function(data) {
//					console.log( 'API pixplorer is working now!' );
//					console.log(data);
					var pictureData = tmpl($('#picture-template').html(), data);

					$('.ideas__list').remove();
					$('.ideas__wrap').append(pictureData);
					$('.ideas__list').isotope({
						itemSelector: '.ideas__item',
						layoutMode: 'masonry',
						transitionDuration: '1.3s',
						masonry: {
							gutter: 20
						}
					});
				},
					error: function () {
						console.log( 'Attention! API pixplorer is not working again!' );
				}
			});
		}

		//	search img button
		$('.discover__search').submit(function(e) {
			e.preventDefault();
			var userInput = encodeURIComponent($('.discover__input').val());
			renderList(userInput);
		});

		renderList();

	});

})(jQuery);
