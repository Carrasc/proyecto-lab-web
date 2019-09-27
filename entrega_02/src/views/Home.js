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


const STYLE = {
  clase : {
      padding: '0 1em 2em 1em',
      height:'25vw',
      width:'100%'
  },
}


var data = [
  ['Luis Fernando Carrasco','Urólogo'],
  ['Mauricio Peon','Ginecólogo'],
  ['Alexandro Marcelo','Dios'],

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
            {data.map((data) =>{
                return(
                  <Grid item xs = {12} sm={6} style = {STYLE.clase} >
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
