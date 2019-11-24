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

import { withAuthenticator } from "aws-amplify-react";


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

    <div id = "app" style={{maxWidth: '1500px', margin: '0 auto',}}>
    	<BrowserRouter>
			<div style={{fontFamily:'Nunito'}}>
			
				
				<Route exact path="/" component={Home} />
				<Route exact path="/video_class" component={VideoClass} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/stats" component={Charts} />
			</div>
    	</BrowserRouter>
        {/*<button onClick={() => Auth.federatedSignIn()}>Sign In</button>*/}
		<button onClick={checkUser}>Check User</button>
		<button onClick={signOut}>Sign Out</button>

    </div>

 
  );
}

const MyTheme = {

	// Esconder el boton de login con amazon
	oAuthSignInButton: { display: 'none' },

	// El boton principal de sign in y sign up 
	button: {   background: 'linear-gradient(to bottom right, rgba(0,0,255), rgba(32,178,170))',
				borderRadius: '28px',
				color: 'white',
				boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', 
				fontWeight: 'bold',
				textTransform: 'uppercase',
				letterSpacing: '1px',
				outline: 'none',},

	//signInButtonIcon: { display: "none" }, 

	// El contenedor de solo la forma 
	formSection: {background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))', }, 

	// El contenedor globla de la forma 
	formContainer: {backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://3.bp.blogspot.com/-B5ELAwZBS2I/XNTwclI8r6I/AAAAAAAANNM/u-hoGYH8I3w4h6hOcKCXMTp3UU3E2anxgCLcBGAs/s1600/background%2Bpowerpoint%2Bmedical%2Bstethoscope.JPG")',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					position: 'relative', 
					height: '100vh', 
					margin: '0', 
					paddingTop: '5em',
					fontFamily: "Nunito",}, 

	// La separacion entre el login con amazon y el login normal (la quitamos porque no hay login con amazon)
	strike: { display: 'none' },

	a: {color: 'blue'}, 
	sectionHeader: {fontFamily: "Nunito",
					fontWeight: 'bold',
					letterSpacing: '1px',
					outline: 'none',
					fontSize: '20px'},
	

	// Lo que aparece arriba si pones algo mal
	//toast: {backgroundColor: '#e0e0e0', color: 'black'}
  };

export default withAuthenticator(App, 
	{
	includeGreetings: false, 
	usernameAttributes: 'email', 
	theme: MyTheme,
	signUpConfig: {
			hiddenDefaults: ["phone_number"],
			signUpFields: [
			{ label: "Nombre", key: "name", required: true, type: "string" }
			]
		}
	}
);