import React from 'react';
import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Clases';
import Footer from '../components/Footer';
import HeaderLinks from "../components/HeaderLinks.js";
import Carousel from '../components/Carousel';
import Grid from '@material-ui/core/Grid';
import global from "../styles/global.js";

import backgroundImage2 from '../images/2.jpg';
import backgroundImage3 from '../images/5.jpg';


const STYLE = {
  clase : {
      padding: '0 1em 2em 1em',
      height:'25vw',
      width:'100%'
  },
}


var data = [
  ['Luis Fernando Carrasco','Urólogo', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Mauricio Peon','Ginecólogo', backgroundImage2],
  ['Alexandro Marcelo','Dios', backgroundImage3],

]


const dashboardRoutes = [];

function Home(props) {

  const { ...rest } = props;

  return (
   
    <div >

        <NavBar
            color="white"
            routes={dashboardRoutes}
            brand="Material Kit React"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
            height: 400,
            color: "dark"
            }}
            {...rest}
        />
            
        <Introduction />
        <Carousel/>
        <Reviews/>
        
        <div style={global.mainContainer}>
          <div style={{textAlign:"center"}}>
            <Grid container = {true} >
            {data.map((data,index) =>{
                return(
                  <Grid item xs = {12} sm={6} style = {STYLE.clase} key= {index} >
                    <Clases row = {data} ></Clases>
                  </Grid>
                    
                )
            })}
            </Grid>   
          </div>
        </div>

        <Footer />
      
    </div>
  );
}

export default Home;
