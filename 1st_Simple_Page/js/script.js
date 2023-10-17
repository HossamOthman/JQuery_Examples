$('.fag_a').hide();

jQuery(document).ready(function() {
    jQuery('.box-close').click(function(){
        // there is also: jQuery('.box').hide(); ..slideUp(); ..fadeOut();
        jQuery(this).parents('.box').fadeOut();
    });
    
    jQuery('.fag_q').click(function() {
        jQuery(this).next('.fag_a').slideToggle()
    });
    jQuery('.faq .fag_q').addClass('fag_q-pointer')
    jQuery('.fag_q').append('<span class="icon">>></span>')

    jQuery('#more').click(function() {
        jQuery('#place-holder-1').load('more.html .more-items');
        return false;
    })
    jQuery('#getData').click(function() {
        jQuery('#place-holder-2').load('https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt', function(data, status){
            console.log("Data: " + data + "\nStatus" + status)
        });
    })

})