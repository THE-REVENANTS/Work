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
search_txt.addEventListener('keydown' , search_friends);

// show chats in mobile
let open_in_mobile = document.querySelector('#open_in_mobile');
let mobile_chats = document.querySelector('.inbox_page .inbox_left');
open_in_mobile.onclick = function () {
    if (window.innerWidth <= 1024) {
        if (mobile_chats.classList.contains('show')) {
            open_in_mobile.innerHTML = '<i class="fa-solid fa-inboxes"></i> Select a chat';
            mobile_chats.classList.remove('show');
        } else {
            open_in_mobile.innerHTML = '<i class="fa-solid fa-x"></i> Close Chats';
            mobile_chats.classList.add('show');
        }
    } else {
        return false;
    }
}

// create message overlay
let create_message_overlay = document.querySelector('#create_message_overlay');
let create_message_overlay_input = document.querySelector('#message_to');
let close_create_message_overlay = document.querySelector('#close_create_message_overlay');
let open_create_message_overlay = document.querySelector('#open_create_message_overlay');
function toggle_Crete_Message_Overlay() {
    create_message_overlay.classList.toggle('show');
    create_message_overlay_input.focus();
}
open_create_message_overlay.addEventListener('click' , toggle_Crete_Message_Overlay);
close_create_message_overlay.addEventListener('click' , toggle_Crete_Message_Overlay);
function toggle_hint(event) {
    let start_typing_hint = document.querySelector('#start_typing_hint');
    if (create_message_overlay_input.value === "") {
        start_typing_hint.classList.remove('hide');
    }  else {
        start_typing_hint.classList.add('hide');
    }
}
create_message_overlay_input.addEventListener('keydown' , toggle_hint);