$(function(){
    
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideToggle(500)
        }
    );

    $('nav li').hover(
        function () {
            $(this).animate({
                backgroundColor: "#AE7844",
                color: '#f26060',
            }, 500);
        },
        function () {
            $(this).animate({
                backgroundColor: "#D69456",
                color: '#fff',
            }, 500);
        }
    );

    $('.jcarousel')
        .jcarousel({
        animation: 'slow',
        wrap: 'circular'
    })

        .jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    })
    ;

    $('.jcarousel_prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel_next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel_pagination')
        .jcarouselPagination({
        item: function(page) {
            return '<a class = "jcarousel_page" href="#' + page + '"></a>';
        }
    })

        .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })

        .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    ;

    $('.jquery_checkbox input, select').styler();

});