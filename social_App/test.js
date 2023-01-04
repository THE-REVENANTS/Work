// Videos slideshow
let slideshow_index = 0;

let vid_slideshow = document.querySelector('#slideshow');
let images_slideshow_container = document.querySelector('#slideshow_container');
let images_slideshow = document.querySelectorAll('.photos_albums_grid .photos .image_box > img');
for (let i = 0; i < images_slideshow.length; i++) {
    let created_img = document.createElement('img');
    const image_src = images_slideshow[i].src;
    created_img.setAttribute('src', image_src);
    images_slideshow_container.appendChild(created_img);
}
let slideshow_images = document.querySelectorAll('#slideshow_container img');
let images_slideshow_arr = document.querySelectorAll('.photos_albums_grid .photos .image_box img');
images_slideshow_arr.forEach( (single_img , img_indx) => {
    single_img.onclick = function () {
        slideshow_index = img_indx;
        vid_slideshow.classList.remove('hide');
        for (let a = 0; a < slideshow_images.length; a++) {
            const element = slideshow_images[a];
            element.classList.add('fade');
            slideshow_images[img_indx].classList.remove('fade'); 
        }
    }
});

let slideshow_to_right = document.querySelector('#slideshow_to_right');
let slideshow_to_left = document.querySelector('#slideshow_to_left');
function slide_left() {
    if (slideshow_index == 0) {
        slideshow_to_left.classList.add('hide');
        return false;
    } else if (slideshow_index == 1) {
        slideshow_to_left.classList.add('hide');
        slideshow_to_right.classList.remove('hide');
        slideshow_index--
        for (let a = 0; a < slideshow_images.length; a++) {
            const element = slideshow_images[a];
            element.classList.add('fade');
        }
        slideshow_images[slideshow_index].classList.remove('fade'); 
    } else {
        slideshow_to_right.classList.remove('hide');
        slideshow_index--
        for (let a = 0; a < slideshow_images.length; a++) {
            const element = slideshow_images[a];
            element.classList.add('fade');
        }
        slideshow_images[slideshow_index].classList.remove('fade'); 
    }
}
function slide_right() {
    if (slideshow_index == images_slideshow_arr.length - 1) {
        return false;
    } else if (slideshow_index == images_slideshow_arr.length - 2) {
        slideshow_to_right.classList.add('hide');
        slideshow_index++
        slideshow_to_left.classList.remove('hide');
        for (let a = 0; a < slideshow_images.length; a++) {
            const element = slideshow_images[a];
            element.classList.add('fade');
        }
        slideshow_images[slideshow_index].classList.remove('fade'); 
    } else {
        slideshow_index++
        slideshow_to_left.classList.remove('hide');
        for (let a = 0; a < slideshow_images.length; a++) {
            const element = slideshow_images[a];
            element.classList.add('fade');
        }
        slideshow_images[slideshow_index].classList.remove('fade'); 
    }
}
slideshow_to_left.addEventListener('click' , slide_left);
slideshow_to_right.addEventListener('click' , slide_right);
let close_slideshow = document.querySelector('#close_slideshow');
close_slideshow.onclick = function () {
    vid_slideshow.classList.add('hide')
}