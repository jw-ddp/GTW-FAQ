$(function() {
    $('#BackTop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    }).scroll();

    // chingchen 新增
    $(window).on("hashchange",function(){
        var _hash=location.hash;
        if(_hash){
            var _faq=$(_hash).find('.question').attr("data-target");
            $(_faq).collapse('show');
            $(_faq).on('shown.bs.collapse', function () {
                $("html,body").animate({
                    scrollTop:$(_hash).offset().top+1
                },600)
            })
        }
    })
    $(window).on("load",function(){
        var _hash=location.hash;
        if(_hash){
            $('html,body').animate({
                scrollTop:$(_hash).offset().top
            },600,function(){
                var _faq=$(_hash).find('.question').attr("data-target");
                $(_faq).collapse('show')
                $(_faq).on('shown.bs.collapse', function () {
                    $("html,body").animate({
                        scrollTop:$(_hash).offset().top+1
                    },600)
                })
            })
        }
    })
    $(".question").on('click',function(){
        var _faq=$(this).attr("data-target")
        $(_faq).on('shown.bs.collapse', function () {
            var _top=$(this).closest('li').offset().top+1;
            $("html,body").animate({
                scrollTop:_top
            },600)
        })
    })
});

(function($) { 
    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);