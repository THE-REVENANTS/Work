let bulk_checkbox = document.querySelector('#bulk_checkbox');
function checkAll() {
    let notifications_checkboxes = document.querySelectorAll('.notifications_body .single_notification input[type=checkbox');
    for (let i = 0; i < notifications_checkboxes.length; i++) {
        const element = notifications_checkboxes[i];
        element.click();
    }
}
bulk_checkbox.addEventListener('click' , checkAll);


let toggle_buttons = document.querySelectorAll('.toggle_buttons a');
toggle_buttons.forEach(e => {
   e.onclick = function () {
        for (let i = 0; i < toggle_buttons.length; i++) {
            toggle_buttons[i].classList.remove('active');
        }
        e.classList.add('active');
   }
});