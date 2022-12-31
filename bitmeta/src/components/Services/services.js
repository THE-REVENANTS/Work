import React from 'react';
// import images
import Content_1 from '../../assets/images/content-1.png'; 
import Content_2 from '../../assets/images/content-2.png'; 
import Content_3 from '../../assets/images/content-3.png'; 

function Services() {
    return (
        // services section goes here
        <div className="services">
            {/* services introduction goes here */}
            <div className="top">
                <h1>A Platform Built On Innovation</h1>
                <p>We are keeping up with the latest innovation in the trading world to make it possible for everyone to earn profits from trading on Bitmeta.</p>
            </div>
            {/* services content goes here */}
            <div className="bottom">
                <div className="content">
                    <img src={Content_1} alt=""/>
                    <span>Stable & Secure</span>
                    <p>Our platform is highly stable and available worldwide. We protect your assets with best security methods.</p>
                </div>
                <div className="content">
                    <img src={Content_2} alt=""/>
                    <span>Stable & Secure</span>
                    <p>Our platform is highly stable and available worldwide. We protect your assets with best security methods.</p>
                </div>
                <div className="content">
                    <img src={Content_3} alt=""/>
                    <span>Stable & Secure</span>
                    <p>Our platform is highly stable and available worldwide. We protect your assets with best security methods.</p>
                </div>
        </div>
        </div>
    );
}


export default Services;