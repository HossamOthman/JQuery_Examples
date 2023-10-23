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
     $('.head-container span').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 150);
    })

    // calculate body padding depending on navbar height
    $('body').css('paddingTop', $('.navbar').innerHeight());
    $('body').css('paddingBottom', 25)

    // add active class on navbar link and remove from siblings
    $('.navbar li').click((e) => {
        
        $($(e.currentTarget)).addClass('active').siblings().removeClass('active');
    })

    // sync navbar links with sections
    $(window).scroll(() => {
        
        const blocks = document.querySelectorAll('.block');

        var blocksArr = $.map((blocks), (block, i) => {
            const blockTop = block.offsetTop;
            const blockHeight = block.clientHeight;

            if(scrollY > (blockTop - 500 )) {
                var blockIDs =  block.getAttribute('id');
                return blockIDs
              }
        })

        var currentBlock = blocksArr[blocksArr.length-1];
        
            $('.navbar li #n' + currentBlock).addClass('active')
            console.log('.navbar li #n' + currentBlock)
        
        
        // .siblings().removeClass('active');
    })
})
