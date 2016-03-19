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

//		picture ajax request

		var pictureRequest = '';

		function renderList(pictureRequest) {
			$.ajax({
				type: "GET",
				dataType: "json",
				cache: false,
				url: 'http://api.pixplorer.co.uk/image?word=' + pictureRequest + '&amount=7&size=s',
				success: function(data) {
//					console.log(data);
					var pictureData = tmpl($('#picture-template').html(), data);

					$('.ideas__list').remove();

					$('.ideas__wrap').append(pictureData);
					$('.ideas__list').isotope({
						itemSelector: '.ideas__item',
						layoutMode: 'masonry',
						masonry: {
							gutter: 20
						}
					});
				}
			});
		}

		$('.discover__search').submit(function(e) {
			e.preventDefault();
			var userInput = encodeURIComponent($('.discover__input').val());
			renderList(userInput);
		});

		renderList();

	});

})(jQuery);
