import React from 'react';
// import images
import COINFINEX_white from '../../assets/images/COINFINEX-white.svg';
import Trading_image from '../../assets/images/trading-image.png'; 

function About() {
    return (
        // about section goes here
        <div className="about"> 
            <img className="left" src={Trading_image} alt=""/> 
            {/* text and logo for about goes here */}
            <div className="right">
                <img className="logo" src={COINFINEX_white} alt=""/>
                <h1>Our Indicators Help Customers Win More</h1>
                <p>Bitmeta develops extremely advanced but simple-to-use indicators that help traders make better decisions in trading.</p>
            </div>
        </div>
    );
}


export default About;