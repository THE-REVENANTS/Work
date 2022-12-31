import React from 'react';
// import images
import PhoneImage from '../../assets/images/phone.png';

function Main() {
    return ( 
        <main>
             <div className="left-text">
                 <h1>An Ideal Platform To Earn</h1>
                 <p>Bitmeta is the world's premier trading platform, combining the latest innovations with  cutting-edge technology to provide traders with an extraordinary trading experience.</p>
                 <a>get start for free</a>
             </div> 
             <img className="right-photo" src={PhoneImage}/>
        </main>
    );
}


export default Main;