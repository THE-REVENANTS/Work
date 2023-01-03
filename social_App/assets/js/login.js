let forgot_passowrd_link = document.querySelector('.sign_in_form .form_bottom a.right');
let forget_password_form = document.querySelector('.forget_password');
let sign_in_form = document.querySelector('.sign_in_form');
forgot_passowrd_link.addEventListener('click' , ()=> {
    sign_in_form.classList.add('hide');
    forget_password_form.classList.remove('hide');
});

let back_to_signin_link = document.querySelector('.forget_password .back_to_sign_in');
back_to_signin_link.addEventListener('click' , ()=> {
    sign_in_form.classList.remove('hide');
    forget_password_form.classList.add('hide');
});

let email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
sign_in_form.addEventListener('submit' , (event)=> {
    event.preventDefault();
    let email_username = document.querySelector('#email_username').value;
    let sign_in_alert = document.querySelector('.sign_in_form .alert');
    if (sign_in_alert.classList.contains('blue')) {
        sign_in_alert.classList.remove('blue');
        sign_in_alert.classList.add('red');
    }
    if (email_username.toLowerCase().match(email_format)) {
        sign_in_alert.innerHTML = '<strong>Error:</stong> the email <strong>'+email_username+'</strong> Is not registered on this site. If you are unsure of your email, try using your username instead';
    } else {
        sign_in_alert.innerHTML = '<strong>Error:</stong> the username <strong>'+email_username+'</strong> Is not registered on this site. If you are unsure of your username, try using your email instead';
    }
});