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

