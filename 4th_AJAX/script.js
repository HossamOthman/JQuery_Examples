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
            alert('it went...')
        })
    });

    //////////// Loading the json Document
    $json_get = $('#json-get');

    $json_get.on('click', () => {
        $.getJSON('users.json', (data) => {
            $.each(data, (i, user) => {
                $target.append('<ul><li>'+ (i+1)+' - '+user.firstName+' '+ user.lastName+': ' +user.email +'</li></ul>')
            })
        })
    });

    //////////// Loading the json Document fromn URL
    $ajax_get = $('#ajax-get');

    $ajax_get.on('click', () => {
        $.ajax({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json'
        }).done((data) => {
            $.map(data, (post, i) => {
                $target.append(`<h3> ${post.title}</h3>
                <p>${post.body}</p>`)
            });
        });
    })
});