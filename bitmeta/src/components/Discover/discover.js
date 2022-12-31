import React from 'react';
// import images
import Desktop_app from '../../assets/images/desktop-app.png'; 

function Discover() {
    return (
        // discover section goes here
        <div className="Discover">
            {/* text for discover goes here */}
            <div className="text">
                <h1>Discover The Most Effective Ways To Earn</h1>
                <p>Explore a new world of earning opportunities ranging from daily trading to passive income from trading commissions or VIP commissions.</p>
                <a href="#" className="button">GET START FOR FREE</a>
            </div>
            <img className="laptop" src={Desktop_app} alt=""/>
        </div>
    );
}

export default Discover;