import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Plan from '../components/Plan';
import Grid from '@material-ui/core/Grid';
import Comments from '../components/Comments';
import global from "../styles/global.js";
import IntroVideo from '../components/Videos/IntroVideo';
import Tendencies from '../components/Tendencies';
import antdCarousel from '../components/Carousels/antdCarousel';
import CNavbar from '../components/NavBars/CNavBar';

const STYLE = {
	clase : {
		padding: '0 1em 2em 1em',
		height:'25vw',
		width:'100%'
	},
}

  var data = [
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
          <div style={global.mainContainer}>
              <div style={{textAlign:"center"}}>
                  <Grid container = {true} >
                  {data.map((data,index) =>{
                      return(
                        <Grid item xs = {12} sm={6} style = {STYLE.clase} key= {index} >
                            <Clases  row = {data} size={STYLE.clase.height}></Clases>
                        </Grid>
                          
                      )
                  })}
                  </Grid>   
              </div>
          </div>
       
          <a href = '/'id="precios"> 	
        </a>
        <Plan/>
		{/*Comments*/}
        <div style = {global.cardContainer} >
            <Grid container={true}  justify="space-around"  alignItems="center" spacing={3} >
                <Grid item xs = {12} sm = {6} md = {4} width='1%'>
                  <Comments/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} width='1%'>
                  <Comments/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} width='1%'>
                  <Comments/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} width='1%'>
                  <Comments/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} width='1%'>
                  <Comments/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} width='1%'>
                  <Comments/>
                </Grid>
            </Grid>
        </div>
        <Footer />
		<antdCarousel />
    </div>
  );
}

export default Home;
