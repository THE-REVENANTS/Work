window.onload = function () {
    const loading_screen = document.querySelector('#loading');
    loading_screen.classList.add('hide');
    setTimeout(() => {
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");
        
        btn.onclick = function(){
            sidebar.classList.toggle("active");
        }
        
        
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
        
        
        // notifications and notifications dropdown
        let notifications_triggre = document.querySelector('#notifications_triggre');
        let notifications = document.querySelector('#notifications');
        let Messages_triggre = document.querySelector('#Messages_triggre');
        let Messages = document.querySelector('#Messages');
        function OpenNotifications(first, second) {
            Messages.classList.remove('show');
            notifications.classList.toggle('show');
        }
        function OpenMessages() {
            notifications.classList.remove('show');
            Messages.classList.toggle('show');
        }
        notifications_triggre.addEventListener('click' , OpenNotifications);
        Messages_triggre.addEventListener('click' , OpenMessages);
        
        
        // mark all as read
        let mark_all_as_read = document.querySelector('#mark_all_as_read');
        let notifications_body = document.querySelector('#notifications_body');
        function markAllRead() {
            notifications_body.innerHTML = "";
            if (notifications_body.children.length == 0) {
                notifications_body.innerHTML = '<div class="empty_notifications">You have no notifications right now.</div>';
            }
        }
        mark_all_as_read.addEventListener('click' , markAllRead); 
    }, 1000);
}