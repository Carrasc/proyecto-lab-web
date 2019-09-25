import React from "react";
// react component for creating beautiful carousel
//import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import 'react-multi-carousel/lib/styles.css';


import global from "../styles/global.js";


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
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

];

export default function SectionCarousel() {
  return (
    <div style={global.mainContainer}>
      
      <Carousel
        itemClass="image-item"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
        focusOnSelect={false}
        itemClass=""
        showDots={true}
        
  >
        {images.slice(0, 5).map(image => {
          return (
            <Image
              draggable={false}
              style={{ width: "95%", height: "100%" }}
              src={image}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
