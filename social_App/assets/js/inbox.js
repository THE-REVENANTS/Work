let chat_dropdowns_trigger = document.querySelectorAll('.inbox_page .chat_dropdown_trigger'); 
let chat_dropdowns = document.querySelectorAll('.inbox_page .chat_dropdown'); 
chat_dropdowns_trigger.forEach((e , e_index) => {
    e.onclick = function () {
        for (let i = 0; i < chat_dropdowns.length; i++) {
            if (!i == e_index) {
                chat_dropdowns[i].classList.remove('show');            
            }
        }
        chat_dropdowns[e_index].classList.toggle('show');
    }
}); 
let search_txt = document.querySelector('#search_txt');
let friends = document.querySelectorAll('.inbox_left_body .contact_component');
let friend_names = document.querySelectorAll('.inbox_left_body .contact_component .contact_info h4');
search_txt.addEventListener('keypress' , search_friends);
function search_friends() {
    console.log('start');
    let input_value = search_txt.value.toUpperCase();
    for (i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let friend_name = friend_names[i].textContent;
        if (friend_name.toUpperCase().indexOf(input_value) > -1) {
            friend.classList.remove('hide');
        } else {
            friend.classList.add('hide');
        }
    }
    let hidden_friends_lenght = document.querySelectorAll('.inbox_left_body .contact_component.hide').length;
    const no_results_element = document.querySelector('#no_results');
    if (hidden_friends_lenght === friends.length) {
        no_results_element.classList.add('show');
    } else {
        no_results_element.classList.remove('show');
    }
    console.log('done');
}