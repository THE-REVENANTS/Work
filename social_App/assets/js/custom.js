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


// like and unlike
let like_buttons = document.querySelectorAll('.like_button');
let like_button_icons = document.querySelectorAll('.like_button i');
let like_button_text = document.querySelectorAll('.like_button div');
like_buttons.forEach( (e , e_index) => {
    e.onclick = function () {
        if (e.classList.contains('liked')) {
            like_button_icons[e_index].classList.remove('fa-solid');
            like_button_icons[e_index].classList.add('fa-light');
            like_button_text[e_index].textContent = "Like";            
            e.classList.remove('liked');
        } else {
            like_button_icons[e_index].classList.add('fa-solid');
            like_button_icons[e_index].classList.remove('fa-light');
            like_button_text[e_index].textContent = "Unlike";
            e.classList.add('liked');
        }
    }
});

// comment and reply triggers
let comment_triggers = document.querySelectorAll('.comment_trigger');
let add_comment = document.querySelectorAll('.add_comment');
comment_triggers.forEach( (comment , comment_index) => {
    comment.onclick = function () {
        add_comment[comment_index].classList.toggle('hide');
    }
});
let cancel_comment = document.querySelectorAll('.add_comment .buttons .false');
cancel_comment.forEach( (e , e_index) => {
    e.onclick = function () {
        add_comment[e_index].classList.toggle('hide');
    }
});

// Description triggers
let description_triggers = document.querySelectorAll('.description_trigger');
let add_description = document.querySelectorAll('div.add_description');
description_triggers.forEach( (e , e_index) => {
    e.onclick = function () {
        e.classList.toggle('hide');
        add_description[e_index].classList.toggle('hide');
    }
});
let cancel_description = document.querySelectorAll('.add_description .buttons .cancel');
cancel_description.forEach( (e , e_index) => {
    e.onclick = function () {
        add_description[e_index].classList.toggle('hide');
        description_triggers[e_index].classList.toggle('hide');
    }
});


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
let Upload_video_done = document.querySelector('#upload_video_modal a.done');
// file is too large modal event
let file_is_too_large_modal = document.querySelector('#file_too_large');
let close_file_is_too_large_modal = document.querySelector('#close_file_too_large');
close_file_is_too_large_modal.setAttribute('onclick' , "toggleHide_class(file_is_too_large_modal)");
let write_file_size = document.querySelector('#write_file_size');
function floorFigure(figure, decimals){
    if (!decimals) decimals = 2;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
};
// file is too large modal ends... [open condition is inside loadVideo() function ]
let uploaded_videos = document.querySelector('#uploaded_videos');
let upload_video_label = document.querySelector('#upload_video_label');
var loadVideo = function(event) {
    Upload_video_done.classList.remove('hide');
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
// Upload photos open/close
let open_upload_photos = document.querySelector('#photos_modal_show_btn');
let close_upload_photos = document.querySelector('#close_upload_photo');
let upload_photo_modal = document.querySelector('#upload_photo_modal');
open_upload_photos.setAttribute('onclick' , 'toggleHide_class(upload_photo_modal)');
close_upload_photos.setAttribute('onclick' , 'toggleHide_class(upload_photo_modal)');
// Upload form
let uploaded_photos = document.querySelector('#uploaded_photos');
let upload_photo_label = document.querySelector('#upload_photo_label');
let photos_Input = document.querySelector('#photos_Input');
let Upload_photo_status = document.querySelector('#upload_photo_modal .upload_photo_header h2');
let Upload_photo_done = document.querySelector('#upload_photo_modal a.done');
photos_Input.addEventListener('change' , (e) => {
    Upload_photo_done.classList.remove('hide');
    uploaded_photos.appendChild(upload_photo_label);
    upload_photo_label.classList.add('grid_view');
    let filess = e.target.files;
    Upload_photo_status.innerHTML = `Uploading... <span>1 out of ${filess.length} Uploaded</span>`;
    for (let i = 0; i < filess.length; i++) {
        let photo_container = document.createElement('div');
        photo_container.classList.add('img_container');
        photo_container.classList.add('loading_image');
        let Uploaded_photo = document.createElement('img');
        uploaded_photos.appendChild(photo_container);
        photo_container.innerHTML += '<i class="fa-solid fa-xmark"></i>';
        const imgReader = new FileReader();
        imgReader.addEventListener("load", function (event) {
            Uploaded_photo.src = event.target.result;
            photo_container.appendChild(Uploaded_photo);
            setTimeout(function timer() {
                photo_container.classList.remove('loading_image')
                Uploaded_photo.classList.add('no_blur');
                Upload_photo_status.innerHTML = `Uploading... <span>${i + 1} out of ${filess.length} Uploaded</span>`;
                if(filess.length - 1 === i) {
                    Upload_photo_status.innerHTML = `Upload <span>${filess.length} out of ${filess.length} uploaded</span>`;
                }
            }, i * 2000);
        });
        imgReader.readAsDataURL(filess[i]);
    }
    // delete uploaded photos function
    let uploaded_photos_children = document.querySelectorAll('.img_container');
    let uploaded_photos_close = document.querySelectorAll('.img_container i');
    uploaded_photos_close.forEach((e,e_index) => {
        e.onclick = function () {
            uploaded_photos_children[e_index].remove();
        }
    });
});

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
// tab system applied to
    let connections_requests_toggler = document.querySelectorAll('.conntections_requests_container .toggle');
    let connections_requests_tabs = document.querySelector('.connections_requests').children;
    tabSystem(connections_requests_toggler, connections_requests_tabs);
    //////
    let groups_invitations_toggler = document.querySelectorAll('.groups_invitations_container .toggle');
    let groups_invitations_tabs = document.querySelector('.groups_invitations').children;
    tabSystem(groups_invitations_toggler, groups_invitations_tabs);


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



// remove connections modal
let remove_connection_trigger = document.querySelectorAll('.remove_connection_trigger');
let remove_connection = document.querySelector('#remove_connection');
let cancel_remove_connection = document.querySelector('#cancel_remove_connection');
let close_remove_connection = document.querySelector('#close_remove_connection');
let users_names = document.querySelectorAll('.connections .single_connection .user_name .inner');
let singles_connections = document.querySelectorAll('.connections .single_connection');
let confirm_remove_connection = document.querySelector('#confirm_remove_connection');
let write_connection_name = document.querySelector('#write_connection_name');
remove_connection_trigger.forEach((e , e_index) => {
    e.onclick = function () {
        remove_connection.classList.remove('hide');
        write_connection_name.innerHTML = users_names[e_index].textContent;
        confirm_remove_connection.onclick = function () {
            singles_connections[e_index].remove();
            remove_connection.classList.add('hide');
        }
    }
}); 
close_remove_connection.onclick = function () {
    remove_connection.classList.add('hide');
} 
cancel_remove_connection.onclick = function () {
    remove_connection.classList.add('hide');
}
// remove groups modal
let leave_group_trigger = document.querySelectorAll('.leave_group_trigger');
let leave_group = document.querySelector('#leave_group');
let cancel_leave_group = document.querySelector('#cancel_leave_group');
let close_leave_group = document.querySelector('#close_leave_group');
let groups_names = document.querySelectorAll('.groups .single_group .middle h2');
let singles_group = document.querySelectorAll('.groups .single_group');
let confirm_leave_group = document.querySelector('#confirm_leave_group');
let write_group_name = document.querySelector('#write_group_name');
leave_group_trigger.forEach((e , e_index) => {
    e.onclick = function () {
        leave_group.classList.remove('hide');
        write_group_name.innerHTML = groups_names[e_index].textContent;
        confirm_leave_group.onclick = function () {
            singles_group[e_index].remove();
            leave_group.classList.add('hide');
        }
    }
}); 
close_leave_group.onclick = function () {
    leave_group.classList.add('hide');
} 
cancel_leave_group.onclick = function () {
    leave_group.classList.add('hide');
}





///////////////////////////////////////////////////////////////////////////
///                                                                     ///
///    A beautiful image slideshow to showcase your precious photos     ///
///                                                                     ///
///////////////////////////////////////////////////////////////////////////

const originalImages = document.querySelectorAll('.photos_albums_grid .photos .image_box img');
let slideshowIndex = 0;
const slideshowElement = document.querySelector('#slideshow');
const slideshowContainer = document.querySelector('#slideshow_container');
const closeButton = document.querySelector('#close_slideshow');
const leftButton = document.querySelector('#slideshow_to_left');
const rightButton = document.querySelector('#slideshow_to_right');

// Create a copy of the original images and add them to the slideshow container
for (const originalImage of originalImages) {
  const newImage = document.createElement('img');
  newImage.src = originalImage.src;
  slideshowContainer.appendChild(newImage);
}

// Get the images in the slideshow container
const slideshowImages = document.querySelectorAll('#slideshow_container img');

// Set up a click event listener for each of the original images
originalImages.forEach((originalImage, i) => {
  originalImage.addEventListener('click', () => {
    // Set the current slideshow index to the index of the clicked image
    slideshowIndex = i;
    // Display the slideshow element and update the displayed image
    slideshowElement.classList.remove('hide');
    updateSlideshow();
  });
});

// Set up a click event listener for the left button
leftButton.addEventListener('click', () => {
  // Decrement the slideshow index and update the displayed image
  slideshowIndex--;
  updateSlideshow();
});

// Set up a click event listener for the right button
rightButton.addEventListener('click', () => {
  // Increment the slideshow index and update the displayed image
  slideshowIndex++;
  updateSlideshow();
});

// Set up a click event listener for the close button
closeButton.addEventListener('click', () => {
  // Hide the slideshow element
  slideshowElement.classList.add('hide');
});

// Update the displayed image in the slideshow
function updateSlideshow() {
  // Apply the fade class to all images in the slideshow container
  slideshowImages.forEach((img) => img.classList.add('fade'));
  // Remove the fade class from the image at the current slideshow index
  slideshowImages[slideshowIndex].classList.remove('fade');
  // Toggle the hide class on the left and right buttons based on the current slideshow index
  leftButton.classList.toggle('hide', slideshowIndex === 0);
  rightButton.classList.toggle('hide', slideshowIndex === originalImages.length - 1);
}

///////////////////////////////////////////////////////////////////////////
///                                                                     ///
///    A beautiful video slideshow to showcase your precious videos     ///
///                                                                     ///
///////////////////////////////////////////////////////////////////////////

const originalVideos = document.querySelectorAll('.profile_tab .videos .video_container video');
let video_slideshowIndex = 0;
const video_slideshowElement = document.querySelector('#video_slideshow');
const video_slideshowContainer = document.querySelector('#videos_slideshow_container');
const video_closeButton = document.querySelector('#close_video_slideshow');
const video_leftButton = document.querySelector('#videos_slideshow_to_left');
const video_rightButton = document.querySelector('#videos_slideshow_to_right');

for (const originalVideo of originalVideos) {
  const newVideo = document.createElement('video');
  newVideo.src = originalVideo.src;
  newVideo.setAttribute('controls' , '')
  video_slideshowContainer.appendChild(newVideo);
}

const slideshowVideos = document.querySelectorAll('#videos_slideshow_container video');
originalVideos.forEach((originalVideo, i) => {
  originalVideo.addEventListener('click', () => {
    video_slideshowIndex = i;
    video_slideshowElement.classList.remove('hide');
    updateSlideshowVideos();
  });
});

video_leftButton.addEventListener('click', () => {
  video_slideshowIndex--;
  updateSlideshowVideos();
});

video_rightButton.addEventListener('click', () => {
  video_slideshowIndex++;
  updateSlideshowVideos();
});

video_closeButton.addEventListener('click', () => {
  video_slideshowElement.classList.add('hide');
});

function updateSlideshowVideos() {
  slideshowVideos.forEach((video) => video.classList.add('fade'));
  slideshowVideos[video_slideshowIndex].classList.remove('fade');
  video_leftButton.classList.toggle('hide', video_slideshowIndex === 0);
  video_rightButton.classList.toggle('hide', video_slideshowIndex === originalVideos.length - 1);
}
