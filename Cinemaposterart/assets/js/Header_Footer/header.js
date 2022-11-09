//////////////////////////////////
///// Add header to the page /////
//////////////////////////////////
let headerInner = '\
<header> \
        <div class="logo_container"> \
            <a href="/"> <img src="/assets/images/LogoHeader.png" alt="Header Logo"> </a> \
            <span>222, 000  unique movie posters and growing</span> \
        </div> \
        <i id="menu_icon" class="fa-solid fa-bars-staggered hide-desktop menu-icon"></i> \
        <div id="header_menu" class="right close_menu"> \
            <a href="/membership/" class="upgrade">Upgrade To Pro Account</a> \
            <a href="/Account/sign-up/">Sign Up</a> \
            <a href="/Account/sign-in/">Sign In</a> \
        </div> \
    </header> \
';
let headerWhere = document.querySelector('#page_header');
headerWhere.innerHTML = headerInner;