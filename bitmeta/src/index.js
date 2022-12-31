import React from 'react';
import ReactDOM from 'react-dom';
// get css file
import './assets/css/main.css';
// import the app.js file
import App from './App';
// import browser router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')); 