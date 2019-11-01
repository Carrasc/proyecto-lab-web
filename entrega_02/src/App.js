import React from 'react';
import Home from './views/Home';
import VideoClass from './views/VideoClass';
import Dashboard from './views/Dashboard';
import Form from './components/form/form';
import Charts from './components/Charts';


//import Example from './components/Example'

import { BrowserRouter, Route, Link } from "react-router-dom";
//import GoogleFontLoader from 'react-google-font-loader';





function App(props) {
  
  

  return (
    //<Example/>
    <div>
    
    <BrowserRouter>
    
      <div style={{fontFamily:'Nunito'}}>
        <Link to="/"></Link>
        <Link to="/video_class"></Link>
        <Link to="/dashboard"></Link>
        <Link to="/stats"></Link>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/video_class" component={VideoClass} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/stats" component={Charts} />
      </div>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
