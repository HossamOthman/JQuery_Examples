$(document).ready(() => {
    $('.next').on('click', () => {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);

            
        } else if(currentImg.is(':last-child')) {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slider-inner img').eq(0).addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', () => {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        } else if(currentImg.is(':first-child')) {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slider-inner img:last').addClass('active').css('z-index', 10);
        }
    });
});