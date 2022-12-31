import React from 'react';
// import images
import Logo_1 from '../../assets/images/binance.svg';
import Logo_2 from '../../assets/images/bitcoin.svg';
import Logo_3 from '../../assets/images/tether.svg';

function Banner() {
    return (
        // <!-- banner section goes here -->
        <div className="banner">
            {/* companies logos goes here */}
            <img src={Logo_1}/>
            <img className="will-disappear" src={Logo_2} />
            <img className="will-disappear" src={Logo_3}/>
        </div>
    );
}


export default Banner;