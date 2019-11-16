import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import globalStyles from  "../../styles/globalStyles.js";

import style from './StyleCarousel.css'

//import rightArrow from "../../images/rightArrow.png";
//import leftArrow from "../../images/leftArrow.png"
import rightArrow from "../../images/blueArrowRight.png";
import leftArrow from "../../images/blueArrowLeft.png"
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
    const CustomRightArrow = ({ onClick, ...rest }) => {
      // onMove means if dragging or swiping in progress.//style={{border:'2px', borderColor: 'coral'}}react-multiple-carousel__arrow--right
      return <img className="" src={rightArrow} style={{width:'2vh', height:'4vh', right:'0', position:'absolute', cursor:'pointer'}} onClick={() => onClick()} ></img>;

    };
    const CustomLeftArrow = ({ onClick, ...rest }) => {
      // onMove means if dragging or swiping in progress.//style={{border:'2px', borderColor: 'coral'}}
      return <img className="" src={leftArrow} style={{width:'2vh', height:'4vh', left:'0', position:'absolute', cursor:'pointer'}} onClick={() => onClick()} ></img>;

    };
  return (
    
    <div style={{margin: '2.5% 5% 0 5%',}}>
      <div style={{textAlign:"center",}}>
        
      <Carousel
        itemClass="image-item"
        infinite={true}
        responsive={responsive}
        focusOnSelect={false}
        showDots={false}
        arrows={true}
        //centerMode={true}
        //partialVisbile={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        autoPlay
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {this.props.component}
        
      </Carousel>
      </div>
    </div>
    
  )}
}
