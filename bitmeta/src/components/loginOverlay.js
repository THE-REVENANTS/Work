// import react
import React from 'react'; 
// import images 
//--------------
import SiteLogo from '../assets/images/logo.svg';
import x from '../assets/images/x.png';
import Loading from '../assets/images/loading.gif';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';

// hero
import Header from '../components/Hero/header'; 
import Main from '../components/Hero/main'; 
// import Script
import '../assets/js/login.js';


function LoginOverlay() {
  return ( 
        <div className="login-overlay">
            <div className="login">
                <div className="login-header">
                    <img src={SiteLogo} alt="" className="logo"/>
                    <a href="/"><i className="fa-solid fa-xmark"></i></a> 
                </div>
                <div className="fields">
                    <div className="alerts-container">
                        <div className="alert" id="incorrectInfo">
                            <img src={x} alt=""/>
                            <span>Email or Password incorrect. Please try again.</span>
                        </div>
                        <div className="alert" id="incorrectCode">
                            <img src={x} alt=""/>
                            <span>Google Authenticator code incorrect. Please try again.</span>
                        </div>
                    </div>
                    <form>
                         {/* elements displayed by default */}
                        <h3 className="will-hide">Log in to your account</h3>
                        <div className="element will-hide">
                            <label for="email">Email *</label>
                            <input type="email" placeholder="Enter Email..."/>
                        </div>
                        <div className="element will-hide">
                            <label for="Password">Password *</label>
                            <div className="input-password-container">
                                <input type="Password" placeholder="Enter Password..."/>
                                <i id="hidePassword" className="fa-solid hide-password fa-eye"></i>
                                <img id="loginLoading" src={Loading} alt=""/>
                            </div>
                            <span>Forgot your Password?</span>
                        </div>
                        <div className="button will-hide" id="beforeSubmit" type="submit">Sign in</div>
                         {/* elements that will show when button clicked */}
                        <div className="container-hide will-show">
                            <h2>Log in to your account</h2>
                            <div className="element">
                                <label for="Google Authentication Code">Google Authentication Code</label>
                                <div className='gac'>                                
                                    <input id='pasteHere' type="text"/>
                                    <span id='pasteBtn' className='paste'>Paste</span>
                                </div>
                            </div>
                            <div className="button" id="submit">Submit</div>
                        </div>
                    </form>
                    <div className="other-methods will-hide">
                        <div className="hr"></div>
                        <span>Or continue with</span>
                    </div>
                    <div className="facebook-google will-hide">
                        <div className="login-method facebook">
                            <img src={facebook} alt=""/>
                            <span>Facebook</span>
                        </div>
                        <div className="login-method google">
                            <img src={google} alt=""/>
                            <span>Google</span>
                        </div>
                    </div>
                </div>
                <div className="account-options">
                    <p>Need a Bitmeta account?<a href="">Create an account</a></p>
                    <p>Didn't receive a confirmation email?<a href="">Request a new one.</a></p>
                </div>
            </div>
        </div>
  );
}

export default LoginOverlay;
