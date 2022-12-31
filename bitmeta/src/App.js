// import react
import React from 'react'; 
// Make route to allow multipage
import { Routes, Route } from "react-router-dom";
// Get Pages
import Homepage from './components/home';  
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return ( 
    <> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </>
  );
}

export default App;
