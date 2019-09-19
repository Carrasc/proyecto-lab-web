import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction.js';
import Footer from './components/Footer';
import HeaderLinks from "./components/HeaderLinks.js";
//import SectionCarousel from "./components/Carousel";

const dashboardRoutes = [];

function App(props) {
  const { ...rest } = props;
  return (
    <div className="App" >
      <NavBar
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
      <Footer/>
    </div>
  );
}

export default App;
