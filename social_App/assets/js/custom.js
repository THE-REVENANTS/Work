function toggleHide_class(willToggle_hide) {
    willToggle_hide.classList.toggle('hide');
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
// open modal trigger
let create_post_trigger = document.querySelector('#create_post_trigger');
create_post_trigger.onclick = function () {
    modal_overlay.classList.remove('hide');
}


// My profile tabs PHOTOS/VIDEOS/FILES
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

let videos_modal_show_btn = document.querySelector('#videos_modal_show_btn');
let upload_video_modal = document.querySelector('#upload_video_modal');
let close_upload_video = document.querySelector('#close_upload_video'); 
close_upload_video.setAttribute('onclick' , "toggleHide_class(upload_video_modal)");
videos_modal_show_btn.setAttribute('onclick' , "toggleHide_class(upload_video_modal)");
// file is too large modal event
let file_is_too_large_modal = document.querySelector('#file_too_large');
let close_file_is_too_large_modal = document.querySelector('#close_file_too_large');
close_file_is_too_large_modal.setAttribute('onclick' , "toggleHide_class(file_is_too_large_modal)");
let write_file_size = document.querySelector('#write_file_size');
// file is too large modal ends... [open condition is inside loadVideo() function ]

function floorFigure(figure, decimals){
    if (!decimals) decimals = 2;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
};
let uploaded_videos = document.querySelector('#uploaded_videos');
let upload_video_label = document.querySelector('#upload_video_label');
var loadVideo = function(event) {
    uploaded_videos.appendChild(upload_video_label);
    upload_video_label.classList.add('grid_view');
    let filess = event.target.files;
    for (let i = 0; i < filess.length; i++) {
        let file_size = floorFigure((filess[i].size * 0.00000095367432) , 2 );
        if (file_size > 20) {
            write_file_size.textContent = file_size;
            file_is_too_large_modal.classList.remove('hide');
            return false;
        }
        let video_container = document.createElement('div');
        video_container.classList.add('vid_container');
        let Uploaded_video = document.createElement('video');
        Uploaded_video.src = URL.createObjectURL(filess[i]);
            video_container.appendChild(Uploaded_video);
            video_container.innerHTML += '<i class="fa-solid fa-play play_video"></i>';
            uploaded_videos.appendChild(video_container);
        playVideoFunction(video_container);
    }
};