import React, { useEffect, useState }  from 'react';
import Home from './views/Home';
import VideoClass from './views/VideoClass';
import Dashboard from './views/Dashboard';
import Charts from './components/Charts';


//import Example from './components/Example'

import { BrowserRouter, Route, Redirect } from "react-router-dom";
//import GoogleFontLoader from 'react-google-font-loader';

import {Auth, Hub} from 'aws-amplify';


function App(props) {

	const [username, setUsername] = useState('');
	
	Auth.currentAuthenticatedUser()
		.then(user => { setUsername(user.attributes.name); })
		.catch(err => console.log(err));

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

    <div id = "app" style={{maxWidth: '1500px', margin: '0 auto',}}>
    	<BrowserRouter>
			<div style={{fontFamily:'Nunito'}}>
				
				<Route exact path="/">
					{(username !== '') ? <Redirect to="/dashboard" /> : <Home />}
				</Route>
				<Route exact path="/dashboard">
					{(username === '') && <Redirect to="/" />}
				</Route>

				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/video_class" component={VideoClass} />
				<Route exact path="/stats" component={Charts} />
			</div>
    	</BrowserRouter>
        {/*<button onClick={() => Auth.federatedSignIn()}>Sign In</button>*/}

    </div>

 
  );
}


export default App;