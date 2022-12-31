import React from 'react';
// import images
import ManPhone from '../../assets/images/man-phone.png'; 

function Journey() {
    return ( 
        // journey section goes here
        <div className="journey">
            {/* left text goes here */}
            <div className="left">
                <h1>Start your journey in minutes</h1>
                <p>Create your multiple streams of income today!</p>
                <a className="button">HET START FOR FREE</a>
            </div>
            <img src={ManPhone} alt=""/>
        </div>
    );
}


export default Journey;