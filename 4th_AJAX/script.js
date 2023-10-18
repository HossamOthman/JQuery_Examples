$(document).ready(function() {

    $target = $('#target')

    //////////// Loading the HTML Document
    $classic_load = $('#classic-load');
    
    $classic_load.on('click', () => {
        $target.load('test.html', function(resTxt, statTxt, xhr){
            if (statTxt == 'success') {
                alert('it went fine!')
            } else if (statTxt == 'error'){
                alert('Error: ' + xhr.status)
            }
        })
    });

    //////////// Loading the HTML Document
    $classic_get = $('#classic-get');

    $classic_get.on('click', () => {
        $.get('test.html', (data) => {
            $target.html(data);
        })
    });

});