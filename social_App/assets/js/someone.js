function toggleHide_class(willToggle_hide) {
    willToggle_hide.classList.toggle('hide');
} 
// Play and pause video 
var play_video = document.querySelectorAll('.vid_container');
// Event listener for the play/pause button
function playVideoFunction(e) {
    e.onclick = function () {
            let Video = e.firstElementChild;
            if (Video.paused) {
                Video.setAttribute('controls','');
                Video.play(); 
                let playIcon = e.lastElementChild;
                playIcon.style.display = "none";
            }
    }
}
play_video.forEach(playVideoFunction);

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
// open modal trigger
let create_post_trigger = document.querySelector('#create_post_trigger');
create_post_trigger.onclick = function () {
    modal_overlay.classList.remove('hide');
}

let dropdowns_trigger = document.querySelectorAll('.elipsis_dropdown > i'); 
let dropdowns_content = document.querySelectorAll('.elipsis_dropdown .dropdown_content'); 
dropdowns_trigger.forEach((e , e_index) => {
    e.onclick = function () {
        for (let i = 0; i < dropdowns_content.length; i++) {
            if (!i == e_index) {
                dropdowns_content[i].classList.remove('show');            
            }
        }
        dropdowns_content[e_index].classList.toggle('show');
    }
}); 

// Profile tabs control
let profile_tab_control = document.querySelectorAll('.my_profile_tab_control a');
let profile_tabs = document.querySelectorAll('.home-center-wrapper');
let profile_container = document.querySelector('#profile');
profile_tab_control.forEach(ClickVideoIcon);
function ClickVideoIcon(e , index_num) {
    e.onclick = function () {
        if (e.classList.contains('full_width')) {
            profile_container.classList.add('width_contain');
        } else {
            profile_container.classList.remove('width_contain')
        }
        for (let i = 0; i < profile_tab_control.length; i++) {
            profile_tab_control[i].classList.remove('active');
            e.classList.add('active');
        }
        // toggle tabs 
        for (let t = 0; t < profile_tabs.length; t++) {
            profile_tabs[t].classList.add('hide');
            profile_tabs[index_num].classList.remove('hide');
        }
    }
}

// toggle between photos and albums
let photos_albums_toggler = document.querySelectorAll('.photos_albums_toggle .toggle');
let photos_albums_tab_heads = document.querySelectorAll('.photos_albums_tab_heads .tab_head');
let photos_albums_tabs = document.querySelector('.photos_albums_grid').children;
function toggle_albums_photos(e, e_index) {
    e.onclick = function () {
        for (let i = 0; i < photos_albums_toggler.length; i++) {
            photos_albums_toggler[i].classList.remove('active');
            photos_albums_tabs[i].classList.add('hide');
            photos_albums_tab_heads[i].classList.add('hide');
        }
        photos_albums_toggler[e_index].classList.add('active');
        photos_albums_tabs[e_index].classList.remove('hide');        
        photos_albums_tab_heads[e_index].classList.remove('hide');        
    }
}
photos_albums_toggler.forEach(toggle_albums_photos);


// tab system function
function tabSystem(navArray, content_array) {
    navArray.forEach((e , e_index) => {
        e.onclick = function () {
            for (let i = 0; i < navArray.length; i++) {
                navArray[i].classList.remove('active');
                content_array[i].classList.add('hide');
            }
            navArray[e_index].classList.add('active');
            content_array[e_index].classList.remove('hide');
        }
    });
}

// classes change function
function changeClass(toNewEvent, backToDefaultEvent,currentClass, newClass, Victim) {
    toNewEvent.onclick = function () {
        Victim.classList.add(newClass);
        Victim.classList.remove(currentClass);
        backToDefaultEvent.classList.remove('active');
        toNewEvent.classList.add('active');
    }
    backToDefaultEvent.onclick = function () {
        Victim.classList.add(currentClass)
        Victim.classList.remove(newClass)
        toNewEvent.classList.remove('active');
        backToDefaultEvent.classList.add('active');
    }
}
// will apply to:
let connections = document.querySelector('#connections');
let gridIcon = document.querySelector('.connections_nav .grid_list_view_toggler .to_grid');
let listIcon = document.querySelector('.connections_nav .grid_list_view_toggler .to_list');
changeClass(listIcon,gridIcon,"grid","list",connections);
// second apply to:
let groups_container = document.querySelector('#groups');
let groups_gridIcon = document.querySelector('.groups_nav .grid_list_view_toggler .to_grid');
let groups_listIcon = document.querySelector('.groups_nav .grid_list_view_toggler .to_list');
changeClass(groups_listIcon,groups_gridIcon,"grid","list",groups_container);


// connect button
let connect_btn = document.querySelector('#connect_btn');
let connect_inner = '<i class="fa-solid fa-user-plus"></i> connect';
let request_inner = '<i class="fa-solid fa-check"></i> Request Sent';
let cancel_inner  = '<i class="fa-solid fa-user-xmark"></i> Cancel Request';
connect_btn.onclick = function () {
    if (this.classList.contains('connect')) {
        this.innerHTML = request_inner;
        this.classList.remove('connect');
        this.classList.add('request');
    } else if (this.classList.contains('request')) {
        this.innerHTML = connect_inner;
        this.classList.remove('request');
        this.classList.add('connect');
    }
}