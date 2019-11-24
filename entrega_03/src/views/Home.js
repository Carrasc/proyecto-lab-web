import React from 'react';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Plan from '../components/Plan';
import Grid from '@material-ui/core/Grid';
import Comments from '../components/Comments';
import globalStyles from  "../styles/globalStyles";
import IntroVideo from '../components/Videos/IntroVideo';
import IntroVideoTest from '../components/Videos/IntroVideoTest';
import Tendencies from '../components/Tendencies';
import CNavbar from '../components/NavBars/CNavBar';
//import Form from '../components/form/form';
//import Word from '../components/word/word';
//import Charts from '../components/Charts';


import '../styles/css/Class.css';

import database from '../api/api';

import { SignIn } from "aws-amplify-react";

var courses = database.courses;



function Home(props) {

  return (
   
    <div >
       
        <CNavbar></CNavbar>
        
        
        <a href = '/'id="home"> 	
        </a>
        <Introduction />
        <IntroVideo />
        {/*<IntroVideoTest />*/}
        <Tendencies/>
        
        <Reviews color={'#ffffff'}/>

       

        {/*Classes*/}
        <a href = '/'id="contenidos"> 	
        </a>
        <div  style= {{textAlign:"center", margin: '0 0 2em 0'}}>
        	<h1 style = {globalStyles.bSecondaryTitleFont}>AHORA DISPONIBLE</h1>
        </div>
          <div style={globalStyles.mainContainer}>
              <div style={{textAlign:"center"}}>
                  <Grid container = {true} >
                  {courses.map((courses,index) =>{
                      return(
                        <Grid item sm= {12} md={6} className = 'clase' key= {index} >
                            <Clases  row = {courses} ></Clases>
                        </Grid>
                          
                      )
                  })}
                  </Grid>   
              </div>
          </div>
       
          <a href = '/'id="precios"> 	
        </a>
        <div  style= {{textAlign:"center" ,margin:'3em 0 3em 0'}}>
          <h1 style = {globalStyles.bSecondaryTitleFont}>PLAN MEDU</h1>
          <br/>
          <h2 style = {globalStyles.blFont}>CANCELA CUANDO QUIERAS</h2>
        </div>
        <Plan/>


		{/*Comments*/}
		<div  style= {{textAlign:"center" ,margin: '5em 0 2em 0'}}>
        	<h1 style = {globalStyles.blFont}>LOS ESTUDIANTES COMENTAN</h1>
        </div>
        <div style = {globalStyles.cardContainer} >
            <Grid container={true}  justify="space-around"  alignItems="center" spacing={3} >
                <Grid >
                  <Comments/>
                </Grid>
                <Grid >
                  <Comments/>
                </Grid>
                <Grid >
                  <Comments/>
                </Grid>
                <Grid >
                  <Comments/>
                </Grid>
                <Grid >
                  <Comments/>
                </Grid>
                <Grid >
                  <Comments/>
                </Grid>
            </Grid>
        </div>
        {/*<Charts width={300}/>*/}
        <Footer />
        
    </div>
  );
}



export default Home;
