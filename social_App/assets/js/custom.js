let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

// open privacy dropdown
let privacy_icons = document.querySelectorAll('.privacy_icons');
privacy_icons.forEach(e => {
    e.onclick = ()=> {
        e.firstElementChild.classList.toggle('show');
    }
});
// open privacy dropdown in create post modal
let post_privacy_current = document.querySelector('.create_post_privacy .current .inner_current');
let post_privacy_options = document.querySelectorAll('.create_post_privacy .dropdown .dropdown-option');
post_privacy_options.forEach(e => {
    e.onclick = function () {
        post_privacy_current.innerHTML = e.innerHTML;
        for (let i = 0; i < post_privacy_options.length; i++) {
            post_privacy_options[i].classList.remove('active');
        }
        e.classList.add('active');
    }
});
// Play and pause video 
var play_video = document.querySelectorAll('.vid_container');
// Event listener for the play/pause button
play_video.forEach(e => {
    e.onclick = function () {
            let Video = e.firstElementChild;
            if (Video.paused) {
                Video.setAttribute('controls','');
                Video.play(); 
                let playIcon = e.lastElementChild;
                playIcon.style.display = "none";
            }
    }
})

// open menu on mobile
let mobile_open_menu = document.querySelector('#mobile_open_menu');
let mobile_close_menu = document.querySelector('#close_mobile');
function OpenSideBarMobile() {
    sidebar.classList.toggle('show_mobile');
};
function CloseSideBarMobile() {
    sidebar.classList.toggle('show_mobile');
};

mobile_open_menu.addEventListener('click' , OpenSideBarMobile);
mobile_close_menu.addEventListener('click' , OpenSideBarMobile);

// My connections tabs control
let connections_tab_control = document.querySelectorAll('.my_conntections_tab_control a');
let connections_tabs = document.querySelectorAll('.connections_tab');
connections_tab_control.forEach((e , index_num) => {
    e.onclick = function () {
        for (let i = 0; i < connections_tab_control.length; i++) {
            connections_tab_control[i].classList.remove('active');
            e.classList.add('active');
        }
        // toggle tabs 
        for (let t = 0; t < connections_tabs.length; t++) {
            connections_tabs[t].classList.add('hide');
            connections_tabs[index_num].classList.remove('hide');
        }
    }
});
// close modal button
let close_modal = document.querySelector('#close_modal');
let modal_overlay = document.querySelector('#modal_overlay');
close_modal.onclick = function () {
    modal_overlay.classList.add('hide');
}
// open modal trigger
let create_post_trigger = document.querySelector('#create_post_trigger');
create_post_trigger.onclick = function () {
    modal_overlay.classList.remove('hide');
}