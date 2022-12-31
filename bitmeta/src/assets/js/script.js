// header toggle background on scroll 
window.onscroll = function () {
let header = document.querySelector('#header'); 
    let window_top = this.scrollY;
    if (window_top >= 600) {
        header.classList.add('show'); 
    }else {
        header.classList.remove('show'); 
    }
} 