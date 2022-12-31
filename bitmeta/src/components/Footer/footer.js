import { logDOM } from '@testing-library/react';
import React from 'react';
// import images
import SiteLogo from '../../assets/images/logo.svg'; 
import EnglishPic from '../../assets/images/english.png'; 

function Footer() {
    return ( 
        // footer goes here
        <footer>
            {/* top content for footer */}
            <div className="top"> 
                {/* container of links and logo for footer */}
                <div className="links-logo">
                    <img src={SiteLogo} alt=""/>
                    <span className="copyright">© 2021 Bitmeta All rights reserved.</span>
                    <span className="email">Email: <a className="mail">contact@bitmeta.net</a></span>
                </div>
                {/* the two containers of links for footer--> */}
                <div className="links">
                    <h3>Support</h3>
                    <a href="">FAQs</a>
                    <a href="">VIP Obligations</a>
                    <a href="">Privacy Policy</a>
                </div>
                <div className="links">
                    <h3>Support</h3>
                    <a href="">Terms and Conditions</a>
                    <a href="">Risks Disclosure </a>
                    <a href="">Liability and Indemnity</a>
                </div> 
                {/* change language button container in the footer */}
                <div className="button-container">
                    <div className="button">
                        <img src={EnglishPic} alt=""/>
                        <span>English</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </div>
            {/* the very bottom text in the footer */}
            <div className="footer-text">
                <p>Risk Warning: Trading and investing in digital options involves significant level of risk and is not suitable and/or appropriate for all clients. Please make sure you carefully consider your investment objectives, level of experience and risk appetite before buying or selling any digital asset. You should be aware of and fully understand all the risks associated with trading and investing in digital assets, you should not invest funds you cannot afford to lose. You are granted limited non-exclusive rights to use the IP contained in this site for personal, non-commercial, non-transferable use only in relation to the services offered on the site</p>
            </div>
        </footer>
    );
}


export default Footer;