import React from 'react';
import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Clases';
import Footer from '../components/Footer';
import HeaderLinks from "../components/HeaderLinks.js";
//import SectionCarousel from "./components/Carousel";
//import "node_modules/video-react/dist/video-react.css"; // import css
import Video from '../components/Video.js';
import LoginPage from '../components/LoginPage'
import Carousel from '../components/Carousel'
import styles from "../styles/components";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import global from "../styles/global.js";
import BackgroundImage from '../images/doc.jpg'


const STYLE = {
  clase : {
      padding: '0 1em 2em 1em',
      height:'25vw',
      width:'100%'
  },
}


const useStyles = makeStyles(styles);

var data = [
  ['../images/doc.jpg','Urólogo', 'wow',1],
  ['Mauricio Peon','Ginecólogo', 'wow2',2],
  ['Alexandro Marcelo','Dios', 'wow3',3],

]


const dashboardRoutes = [];

function Home(props) {
  const classes = useStyles();

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
                    <Clases row = {data} BackgroundImage= {BackgroundImage} ></Clases>
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
