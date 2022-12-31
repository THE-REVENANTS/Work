// import react
import React from 'react'; 
// import components 
//------------------
import Dashboard_header from './dashboard_components/header';
import Left_sidebar from './dashboard_components/left_sidebar';


function Homepage() {
  return ( 
    <div>  
      <Dashboard_header />
      <Left_sidebar />
    </div>
  );
}

export default Homepage;
