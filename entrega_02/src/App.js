import React from 'react';
import './App.css';
import Home from './views/Home';
//import GoogleFontLoader from 'react-google-font-loader';

import global from './styles/global.js';




function App(props) {
  
  

  return (
    <div  >	
    
   
      <div style= {global.mainFont}>
      <Home  />
      </div>
		 
		</div>
      
 
  );
}

export default App;
