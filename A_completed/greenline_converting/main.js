// header menu toggle script goes here
let menu_links = document.querySelector('header .links');
let menu_button = document.querySelector('header i.menu-icon');
menu_button.onclick = function () {
    menu_links.classList.toggle('show');
}
// header toggle background on scroll 
let header = document.querySelector('header');
let header_logo = document.querySelector('header a.logo img');
window.addEventListener('scroll' , function () {
    let window_top = this.scrollY;
    if (window_top >= 600) {
        header.classList.add('white-background');
        header_logo.setAttribute('src', '/assets/images/GreenLine Converting.svg');
    }else {
        header.classList.remove('white-background');
        header_logo.setAttribute('src', '/assets/images/GreenLine Converting_white.svg')
    }
})