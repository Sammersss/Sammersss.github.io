(function($){
    var defaults = {
        picWidth: 305,
        animate: false,
        animateSpeed: 1000,
        link: 'a.fancybox',
        leftControl : '.arrow-left',
        rightControl : '.arrow-right',
        elementsList :'.carousel-list'
    }

    var options;
    $.fn.carousel = function(params){
        //extend the default options with custom
        options = $.extend({}, defaults, options, params);

        /* обертка слайдера */
        var elementsList = $(options.elementsList);
        
        /* ссылки на предудыщий и следующий слайд */
        var leftControl = $(options.leftControl);
        var rightControl = $(options.rightControl);
        
        /*автостарт*/
        var playLink = $('.auto');
        var is_animate = false;

        /* смещение слайдера */
        var pixelsOffset = -options.picWidth;
        
        
        /* Клик по ссылке на следующий слайд */
        var scrollRight = (function(){
            if(!elementsList.is(':animated')) {
                elementsList.animate({left: pixelsOffset}, 500, function(){
                    elementsList
                        .find('.slide-item:first')
                        .appendTo(elementsList)
                        .parent()
                        .css({'left': 0});
                });
            };
        });

        /* Клик по ссылке на предыдующий слайд */
        var scrollLeft = (function(){
            if(!elementsList.is(':animated')) {
                elementsList
                    .css({'left': pixelsOffset})
                    .find('.slide-item:last')
                    .prependTo(elementsList)
                    .parent()
                    .animate({left: 0}, 500);
            };
        });
        
        leftControl.click(function() {
            pauseAnimation(scrollLeft);
        });

        rightControl.click(function() {
            pauseAnimation(scrollRight);
        });
            
        /*анимация*/
        function startAnimation() { 
            $timerId = setTimeout(function tick() {
                scrollRight();
                $timerId = setTimeout(tick, options.animateSpeed);
            }, options.animateSpeed);
        };

        function stopAnimation() {
            if ($timerId) clearTimeout($timerId);
        };

        function pauseAnimation(customFunction) {
            if ((options.animate)&&($timerId)) {
                stopAnimation();
            };
            customFunction();
            if (options.animate) {
                startAnimation();
            };
        };

        if (options.animate === true) {
            startAnimation();
            flag = true;
        } else {
            stopAnimation();
            flag = false;
        };
        
        /*fancybox*/
        var $body = $('body');
        var $modal;
        var $overlay;
        var link = $(options.link);

        link.on('click',function showModal (e) {
            if ((options.animate)&&($timerId)) {
                stopAnimation();
            }
            link = $(this); 
            var href = link.attr('href');

            $modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
            $overlay = $('<div class="fancybox-overlay"></div>');

            e.stopPropagation();
            e.preventDefault();

            $body.append($overlay);
            $body.append($modal);
            $overlay.one('click',  function hideModal() {
                $modal.hide();
                $overlay.hide();
                if (options.animate) {
                    startAnimation();
                };
            });
        });
        return this;
    };

})(jQuery);
$(function(){
    $('.carousel-list').carousel({
        animate: true,
        animateSpeed: 3000,
        leftControl : '.carousel-arrow-left',
        rightControl : '.carousel-arrow-right'
        
    });
});


$(function(){

    var html = $('#test').html();
    var data = {
        name: 'Артемчук Александр Владимирович',
        photo_url: "img/photo.jpg",
        work: "Работник картографической фирмы",
        learning_reasons: "Хочу учить frontend потому что:",
        reasons_list: ["Карты делать уже не интересно",
                       "Платят мало",
                       "Нет возможности работать удаленно"],
        contact_phone: "Мой контактный телефон",
        phone_number:"+380 66 7995886",
        social_profile: "Мой профиль в facebook",
        social_network: "https://www.facebook.com/Aleksandr.Artem",
        facebook_url: "facebook.com",
        feedback_title: "Мой feedback:",
        feedback: "Если нужно, помогу прокласть маршрут к дому )"
    };

    var content = tmpl(html,data)

    $('body').append(content);
});
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
    var cache = {};

    this.tmpl = function tmpl(str, data){
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
            tmpl(document.getElementById(str).innerHTML) :

        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj",
                     "var p=[],print=function(){p.push.apply(p,arguments);};" +

                     // Introduce the data as local variables using with(){}
                     "with(obj){p.push('" +

                     // Convert the template into pure JavaScript
                     str
                     .replace(/[\r\t\n]/g, " ")
                     .split("<%").join("\t")
                     .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                     .replace(/\t=(.*?)%>/g, "',$1,'")
                     .split("\t").join("');")
                     .split("%>").join("p.push('")
                     .split("\r").join("\\'")
                     + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn( data ) : fn;
    };
})();