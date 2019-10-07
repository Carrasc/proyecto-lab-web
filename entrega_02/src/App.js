import React from 'react';
import './App.css';
import Home from './views/Home';
import VideoClass from './views/VideoClass';
import Example from './components/Example'

import { BrowserRouter, Route, Link } from "react-router-dom";
//import GoogleFontLoader from 'react-google-font-loader';

import global from './styles/global.js';
import { height } from '@material-ui/system';




function App(props) {
  
  

  return (
    <Example/>

    // <BrowserRouter>
    //   <div>
    //     <Link to="/"></Link>
    //     <Link to="/video_class"></Link>
      
    //     <Route exact path="/" component={VideoClass} />
    //     <Route exact path="/video_class" component={VideoClass} />
    //   </div>
    // </BrowserRouter>
      
 
  );
}

export default App;
