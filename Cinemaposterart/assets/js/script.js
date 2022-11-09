const menu_icon = document.querySelector('#menu_icon');
const header_menu = document.querySelector('#header_menu');
const header = document.querySelector('header');
// Toggle Header Menu function
function toggleMenu() {
    header_menu.classList.toggle('close_menu');
    menu_icon.classList.toggle('fa-bars-staggered');
    menu_icon.classList.toggle('fa-x');
}
function stickyHeader() {
    let windowPosition = window.scrollY;
    if (windowPosition >= 200) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
}
menu_icon.addEventListener('click' , toggleMenu);
window.addEventListener('scroll' , stickyHeader);



function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
}
onload = function() {
  document.getElementById('cc').oninput = function() {
    this.value = cc_format(this.value)
  } 
  document.getElementById('cc_2').oninput = function() {
    this.value = cc_format(this.value)
  } 
}
function checkDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;
    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }
    return true;
}


// Show payment checkout on submit
let UpgradeProForm = document.querySelector('#UpgradeProForm');
let checkoutPopup = document.querySelector('#checkout');
function showPopup() {
  checkoutPopup.classList.add('show_popup');
}
UpgradeProForm.addEventListener('submit' , showPopup);