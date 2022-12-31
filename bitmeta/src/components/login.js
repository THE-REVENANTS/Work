// import react
import React from 'react'; 
import '../assets/css/login.css';

// hero
import Header from './Hero/header'; 
import Main from './Hero/main'; 
import LoginOverlay from './loginOverlay'; 
// import Script
import '../assets/js/login.js';


function Login() {
  return ( 
        <div className="hero">
            {document.getElementById('body').classList.add('no-scroll')}
            <Header />
            <Main />
            <LoginOverlay />
        </div> 
  );
}

export default Login;
