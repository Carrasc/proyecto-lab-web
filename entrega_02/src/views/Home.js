import React from 'react';
import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Clases';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Grid from '@material-ui/core/Grid';
import global from "../styles/global.js";
import Classes_Info from '../components/Classes_Info';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import User_NavBar from '../components/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';


const STYLE = {
  clase : {
      padding: '0 1em 2em 1em',
      height:'25vw',
      width:'100%'
  },
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

var data = [
  ['Luis Fernando Carrasco','Urólogo', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  ['Mauricio Peon','Ginecólogo', images['2.jpg']],
  ['Alexandro Marcelo','Dios', images['5.jpg']],
  ['Romeo Varela','Caca', images['6.jpg']],

]

const dashboardRoutes = [];

function Home(props) {

  const { ...rest } = props;
  const matches = useMediaQuery('(min-width:600px)');

  return (
   
    <div >

        <NavBar />
        <Introduction />
        <Carousel/>
        <Reviews/>
        
        <div style={global.mainContainer}>
          <div style={{textAlign:"center"}}>
            <Grid container = {true} >
            {data.map((data,index) =>{
                return(
                  <Grid item xs = {12} sm={6} style = {STYLE.clase} key= {index} >
                    <Clases row = {data} size={STYLE.clase.height}></Clases>
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
