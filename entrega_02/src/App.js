import React from 'react';
import './App.css';
import Home from './views/Home';
import VideoClass from './views/VideoClass';
//import GoogleFontLoader from 'react-google-font-loader';

import global from './styles/global.js';




function App(props) {
  
  

  return (
    <div  >	
    
   
      <div style= {global.mainFont}>
        <VideoClass  />
      </div>
		 
		</div>
      
 
  );
}

export default App;
