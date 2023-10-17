jQuery(document).ready(function() {
    jQuery('.box-close').click(function(){
        // there is also: jQuery('.box').hide(); ..slideUp(); ..fadeOut();
        jQuery(this).parents('.box').fadeOut();
    });
    jQuery('.fag_a').hide();
    jQuery('.fag_q').click(function() {
        jQuery(this).next('.fag_a').slideToggle()
    });
    jQuery('.faq .fag_q').addClass('fag_q-pointer')
    jQuery('.fag_q').append('<span class="icon">>></span>')

    jQuery('#more').click(function() {
        jQuery('#place-holder').load('more.html .more-items');
        return false;
    })
})