import React, { useEffect }  from 'react';
import Home from './views/Home';
import VideoClass from './views/VideoClass';
import Dashboard from './views/Dashboard';
import Form from './components/form/form';
import Charts from './components/Charts';


//import Example from './components/Example'

import { BrowserRouter, Route, Link } from "react-router-dom";
//import GoogleFontLoader from 'react-google-font-loader';

import {Auth, Hub} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';


function checkUser() {
	Auth.currentAuthenticatedUser()
	  .then(user => console.log({ user }))
	  .catch(err => console.log(err))
  }
  
  function signOut() {
	Auth.signOut()
	  .then(data => console.log(data))
	  .catch(err => console.log(err))
  }
  
  

function App(props) {
	 // in useEffect, we create the listener
	 useEffect(() => {
		Hub.listen('auth', (data) => {
		  const { payload } = data
		  console.log('A new auth event has happened: ', data)
		   if (payload.event === 'signIn') {
			 console.log('a user has signed in!')
		   }
		   if (payload.event === 'signOut') {
			 console.log('a user has signed out!')
		   }
		})
	  }, [])
  return (
    <div id = "app" style={{maxWidth: '1500px', margin: '0 auto'}}>
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
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
		<button onClick={checkUser}>Check User</button>
		<button onClick={signOut}>Sign Out</button>

    </div>
 
  );
}

export default App;
