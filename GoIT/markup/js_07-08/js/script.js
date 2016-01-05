$(function($) {
    //=================CREATE TABS ON_CLICK FUNCTION=================
    
    var $tab = $('li');

    $tab.on('click', function() {
        $(this).addClass('active').siblings().removeClass()
            .closest('div.wrapper').find('div.article').removeClass('active').eq($(this).index()).addClass('active');
    });

    //  =====================CREATE FORM ON_CLICK FUNCTION=====================
    
        var $input = $('input');
        $input.on('mouseover', function() {
            $(this).siblings('.tooltip').addClass('show');
        });
        var $input = $('input');
        $input.on('mouseout', function() {
            $(this).siblings('.tooltip').removeClass('show');
        });

    //help button on_click function

        $('.help').on('click', function(){
            $('.tooltip').addClass('show').css({
                transition: '0.5s'

            });
        });

    //help button modification

        $('.help').on('mouseover', function(){
            $('.help').css({
                background: '#f7b883',
                color: 'white'
            });
        });
        $('.help').on('mouseout', function(){
            $('.help').css({
                background: '#efefef',
                color: '#72675a'
            });
        });
});
