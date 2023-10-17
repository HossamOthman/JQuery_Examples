$(document).ready(() => {
    $add_btn = $('.btn');
    $txt_input = $('input');
    $todo_list = $('ul');
    $notify = $('.empty');
    // $('.todo-list .empty').addClass('show-notify')


    $add_btn.on('click', (e) => {
        e.preventDefault();
        if($txt_input.val() !== '') {
            $content = "<li class='list-item'>" + $txt_input.val() + "<span class='trash'>DELETE</span></li>";

            $todo_list.append($content);
            $txt_input.val('');
        }
    });
    $todo_list.on('click', 'span', (e) => {
        $(e.currentTarget).parent().remove();

        if($todo_list.find('li').length === 0) {
            $notify.addClass('show-notify')
        }
    })

})