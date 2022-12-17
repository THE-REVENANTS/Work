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