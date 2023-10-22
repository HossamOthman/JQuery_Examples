$(() => {
    'use strict';

    // smooth scroll to element
    $('.navbar li a').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + e.target.getAttribute('data-scroll')).offset().top
        }, 500)
        getattribute(e)
        window.console.log('#' + e.target.getAttribute('data-scroll'));
    })

     // smooth scroll to top
     $('.block span').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.navbar').offset().top
        }, 150)
    })
})
