window.onload = function () {
    var sw_main = new Swiper('.sw-main', {
        speed: 1000,
        pagination: {
            el: '.m-navi',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });

    var go_top = $('.go-top');

    go_top.click(function (e) {
        e.preventDefault();

        $('html').stop().animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        var scY = $(window).scrollTop();
        if (scY > 250) {
            go_top.addClass('go-top-focus');
        } else {
            go_top.removeClass('go-top-focus');
        }

        if (scY > 1) {
            $('.header').addClass('header-focus');
        } else {
            $('.header').removeClass('header-focus');
        }
    });

    var lis = $('.depth1 > li');

    $.each(lis, function (index, item) {
        $(this).mouseenter(function () {
            $(this).find('.depth2').show();
        });
        $(this).mouseleave(function () {
            $(this).find('.depth2').hide();
        });
    });
    
    
    var depth1Y = $('.depth1-y')
    var toggle_menu = $('.toggle-menu');
    depth1Y.click(function(e){
        e.preventDefault();
        $(this).toggleClass('footer-focus');
        
        if($(this).hasClass('footer-focus')){
            toggle_menu.show();
        }else{
            toggle_menu.hide();
        }

    });
    
    
    $('.modal-close').click(function(){
        $('.modal').hide();
    });
        


}
