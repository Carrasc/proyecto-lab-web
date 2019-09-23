import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction.js';
import Reviews from './components/Reviews';
import Clases from './components/Clases';
import Footer from './components/Footer';
import HeaderLinks from "./components/HeaderLinks.js";
//import SectionCarousel from "./components/Carousel";
//import "node_modules/video-react/dist/video-react.css"; // import css
import Video from './components/Video.js';
import LoginPage from './components/LoginPage'
import Carousel from './components/SectionCarousel'
import styles from "./styles/components";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";


const useStyles = makeStyles(styles);


const dashboardRoutes = [];

function App(props) {
  const classes = useStyles();

  const { ...rest } = props;

  return (
   
    <div className={classNames(classes.main, classes.mainRaised)}>

      <Carousel/>
   

      
    {/*  <NavBar
        color="white"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Introduction/>
      <Reviews/>
      <Clases/>
      <LoginPage/>
      <Video/>
      <Footer/>*/}
       </div>
  );
}

export default App;
