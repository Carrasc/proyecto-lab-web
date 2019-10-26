import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import global from "../../styles/global.js";



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

export default class SectionCarousel extends Component {
  render(){
  return (

    <div style={global.mainContainer}>
      <div style={{textAlign:"center",}}>
        
      <Carousel
        itemClass="image-item"
        infinite={false}
        responsive={responsive}
        focusOnSelect={false}
        showDots={false}
        arrows={true}
        //centerMode={true}
        //partialVisbile={false}
        >
        {this.props.component}
      </Carousel>
      </div>
    </div>
    
  )}
}
