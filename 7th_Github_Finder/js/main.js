$(document).ready(() => {
    
    $('#searchUser').on('keyup', (e) => {
        let username = e.target.value;

        // make a request to github
        $.ajax({
            url: 'https://api.github.com/users/' + username
        }).done((user) => {
            
        });


    })


});