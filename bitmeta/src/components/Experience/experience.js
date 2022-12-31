import React from 'react';
// import images
import Circle from '../../assets/images/circle.png'; 

function Experience() {
    return ( 
        <div className="experience">
             {/* text related to experience goes here */}
            <div className="left">
                <h1>Experience A Powerful Trading Platform</h1>
                <p>Get access to a complete set of trading management tools and technical indicators that will make         your trading easier and more profitable.
                </p>
            </div>
            <img className="circle" src={Circle} alt=""/> 
        </div>
    );
}


export default Experience;