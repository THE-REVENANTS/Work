import React from 'react';
// import images
import SiteLogo from '../../assets/images/logo.svg';
import '../../assets/js/script';

function Header() {
    return (
        <div>
            <div className="header-placeholder"></div>
            <header id='header'> 
                <img src={SiteLogo} className="logo"/> 
                <div className="right">
                    <a href="login" className="blue">Join now</ a>
                    <a href="login">login</a>
                </div>
            </header> 
        </div>
    );
}


export default Header;