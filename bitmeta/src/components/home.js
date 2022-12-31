// import react
import React from 'react'; 
// import components 
//------------------
// hero
import Header from './Hero/header'; 
import Main from './Hero/main'; 
// banner
import Banner from './banner/banner'; 
// About
import About from './About/about';
// Discover
import Discover from './Discover/discover';
// Services
import Services from './Services/services';
// Experience
import Experience from './Experience/experience';
// Journey
import Journey from './Journey/journey'
// Footer
import Footer from './Footer/footer'



function Homepage() {
  return ( 
    <div>  
      <div className="hero">  
        <Header />
        <Main /> 
      </div>
      <Banner /> 
      <About />
      <Discover />
      <Services />
      <Experience />
      <Journey />
      <Footer />
    </div>
  );
}

export default Homepage;
