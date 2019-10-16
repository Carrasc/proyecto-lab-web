import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import Comments from '../components/Comments';
import global from "../styles/global.js";
import IntroVideo from '../components/Videos/IntroVideo';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import { Image } from "semantic-ui-react";
import Tendencies from '../components/Tendencies';



const STYLE = {
	clase : {
		padding: '0 1em 2em 1em',
		height:'25vw',
		width:'100%'
	},
}

const imagesCarousel = [
  require("../images/2.jpg"),
  require("../images/3.jpg"),
  require("../images/4.jpg"),
  //"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

];

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  var data = [
	['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', images['2.jpg']],
	['Alexandro Marcelo','Neurología', images['5.jpg']],
	['Romeo Varela','Cardiología', images['6.jpg']],
  
  ]

const dashboardRoutes = [];

function Home(props) {

  const { ...rest } = props;
  const matches = useMediaQuery('(min-width:600px)');

  /*<Carousel component = {
          imagesCarousel.map((img,index) =>{
            return (
              <Image
              draggable={false}
              style={{ width: "90%", height: "100%" }}
              src={img} 
              />
            
              )})
            
          } /> */
  return (
   
    <div >

        <NavBar />
        <Introduction />
        <IntroVideo />
        <Tendencies/>
        <Reviews/>

        {/*Classes*/}
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
           
        <a id="footer">  <Footer /></a>
      
		
		
      
    </div>
  );
}

export default Home;
