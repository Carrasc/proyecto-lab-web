import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import 'react-multi-carousel/lib/styles.css';
import global from "../styles/global.js";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0
  }
};
const images = [
  require("../images/2.jpg"),
  require("../images/3.jpg"),
  require("../images/4.jpg"),
  //"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

];

/*
<Image
            
              draggable={false}
              style={{ width: "90%", height: "100%" }}
              src={image} 
              
              />
*/
export default class SectionCarousel extends Component {

    constructor (props){
      super(props);
    }
    

  render(){
  return (

    <div style={global.mainContainer}>
      <div style={{textAlign:"center"}}>
        
      <Carousel
        itemClass="image-item"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        responsive={responsive}
        focusOnSelect={false}
        showDots={true}
        arrows={true}
        >
          
        {images.slice(0, 5).map((image,index) => {
          return (
            <div>            
              {this.props.component}
            </div>
                            
          );
        })}
      </Carousel>
      </div>
    </div>
    
  )}
}
