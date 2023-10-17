const faq_title = $('.faq-item__title')
const faq_content = $('.faq-item__content')

$('.faq-item__title').prepend('<span class="icon">+ </span>');

faq_title.click(function(){
    const this_title = $(this);
    const this_content = this_title.parent().find(faq_content);
    

    if (this_content.slideDown = true) {
        $(this_title).parent().find('.icon').text('- ');
        $(faq_title).not(this_title).parent().find('.icon').text('+ ');
    } 
      
    this_content.slideToggle('slow');
    this_content.toggleClass('hidden');

    faq_content.not(this_content).slideUp();

    // if (this_content.hasClass('hidden')) {
    //     $(this_title).parent().find('.icon').text('- ');
    //     $(faq_title).not(this_title).parent().find('.icon').text('+ ');
    // } 
});

