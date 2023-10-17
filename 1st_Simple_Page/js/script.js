jQuery(document).ready(function() {
    jQuery('.box-close').click(function(){
        // there is also: jQuery('.box').hide(); ..slideUp(); ..fadeOut();
        jQuery(this).parents('.box').fadeOut();
    })
})