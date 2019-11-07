import React from 'react';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Plan from '../components/Plan';
import Grid from '@material-ui/core/Grid';
import Comments from '../components/Comments';
import global from "../styles/global";
import IntroVideo from '../components/Videos/IntroVideo';
import Tendencies from '../components/Tendencies';
import antdCarousel from '../components/Carousels/antdCarousel';
import CNavbar from '../components/NavBars/CNavBar';
import Form from '../components/form/form';
import Word from '../components/word/word';
import Charts from '../components/Charts';

import '../styles/css/Class.css';


  var data = [
	['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Alexandro Marcelo','Neurología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Romeo Varela','Cardiología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Alexandro Marcelo','Neurología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Romeo Varela','Cardiología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Alexandro Marcelo','Neurología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Romeo Varela','Cardiología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Alexandro Marcelo','Neurología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Romeo Varela','Cardiología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  
  ]

function Home(props) {


  return (
   
    <div >
       
        <CNavbar></CNavbar>
        
        <Introduction />
        <IntroVideo />
        <Tendencies/>
        
        <Reviews/>

       

        {/*Classes*/}
        <a href = '/'id="contenidos"> 	
        </a>
        <div  style= {{textAlign:"center"}}>
        	<h1 style = {global.bSecondaryTitleFont}>AHORA DISPONIBLE</h1>
        </div>
          <div style={global.mainContainer}>
              <div style={{textAlign:"center"}}>
                  <Grid container = {true} >
                  {data.map((data,index) =>{
                      return(
                        <Grid item sm= {12} md={6} className = 'clase' key= {index} >
                            <Clases  row = {data} ></Clases>
                        </Grid>
                          
                      )
                  })}
                  </Grid>   
              </div>
          </div>
       
          <a href = '/'id="precios"> 	
        </a>
        <div  style= {{textAlign:"center" ,margin:'3em 0 3em 0'}}>
          <h1 style = {global.bSecondaryTitleFont}>PLAN MEDU</h1>
          <br/>
          <h2 style = {global.blFont}>CANCELA CUANDO QUIERAS</h2>
        </div>
        <Plan/>


		{/*Comments*/}
		<div  style= {{textAlign:"center" ,marginTop:'5em '}}>
        	<h1 style = {global.blFont}>LOS ESTUDIANTES COMENTAN</h1>
        </div>
        <div style = {global.cardContainer} >
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
        <Charts width={300}/>
        <Footer />
        
        
		<antdCarousel />
    </div>
  );
}

export default Home;
