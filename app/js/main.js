$(function () {

    var $li = $('li', this);
    var $prev = $('.portfolio__btn-next', this);
    var $next = $('.portfolio__btn-prev', this);
    var $pagination = $('.portfolio__btn-dots', this);

    $('.black_section_carousel li').each(function () {
        var $prevImg = $('.black_section_carousel_preving span', this);
        var $mainImg = $('.black_section_carousel_mining img', this);

        $prevImg.click(function () {
            $mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        }).eq(0).click();
    });

    $('.black_section_carousel').each(function () {
        var $li = $('li', this);
        var $prev = $('.portfolio__btn-prev', this);
        var $next = $('.portfolio__btn-next', this);

        $li.eq(0).addClass('active');

        $prev.click(function () {
            var index = $li.filter('.active').index();
            if (index == 0) {
                index = $li.length
            }
            $li.eq(index - 1).addClass('active').siblings().removeClass('active');
        });

        $next.click(function () {
            var index = $li.filter('.active').index();
            if (index == $li.length - 1) {
                index = -1
            }
            $li.eq(index + 1).addClass('active').siblings().removeClass('active');
        });
    });




    $li.eq(0).addClass('active');
    $li.each(function () {
        $pagination.append('<span></span>');
    });

    var $pagination = $($pagination.find('span'));

    $pagination.eq($li.filter('.active').index()).addClass('active');

    $prev.click(function () {
        var index = $li.filter('.active').index();
        if (index == 0) {
            index = $li.length
        }
        $li.eq(index - 1).addClass('active').siblings().removeClass('active');
        $pagination.eq(index - 1).addClass('active').siblings().removeClass('active');
    });

    $next.click(function () {
        var index = $li.filter('.active').index();
        if (index == $li.length - 1) {
            index = -1
        }
        $li.eq(index + 1).addClass('active').siblings().removeClass('active');
        $pagination.eq(index + 1).addClass('active').siblings().removeClass('active');
    });

    $pagination.click(function () {
        $li.eq($(this).index()).addClass('active').siblings().removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
    });



    $('.reviews__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false
    });

    $('.reviews__btn-next').click(function(event){
        $('.reviews__slider').slick('slickPrev');
    });
    $('.reviews__btn-prev').click(function(event){
        $('.reviews__slider').slick('slickNext');
    });
    
});

