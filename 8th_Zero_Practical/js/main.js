$(() => {
    'use strict';

    // smooth scroll to element
    $('.navbar li a').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + e.target.getAttribute('data-scroll')).offset().top
        }, 500)
    })

     // smooth scroll to top
     $('.block span').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.navbar').offset().top
        }, 150)
    })

    // calculate body padding depending on navbar height
    $('body').css('paddingTop', $('.navbar').innerHeight() + 40)

    // add active class on navbar link and remove from siblings
    $('.navbar li').click((e) => {
        
        $($(e.currentTarget)).addClass('active').siblings().removeClass('active');
    })
})
