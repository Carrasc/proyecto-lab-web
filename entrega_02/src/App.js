import React from 'react';
import './App.css';
import Home from './views/Home';
import VideoClass from './views/VideoClass';

import { BrowserRouter, Route, Link } from "react-router-dom";
//import GoogleFontLoader from 'react-google-font-loader';

import global from './styles/global.js';
import { height } from '@material-ui/system';




function App(props) {
  
  

  return (
    <BrowserRouter>
      <div>
        <Link to="/"></Link>
        <Link to="/video_class"></Link>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/video_class" component={VideoClass} />
      </div>
    </BrowserRouter>
      
 
  );
}

export default App;
