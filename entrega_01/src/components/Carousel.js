import React from "react";

import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import 'react-multi-carousel/lib/styles.css';

import Popup from "reactjs-popup"; //for the popup image in carrousel

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
const links = [
  "https://medu.mx", "https://medu.mx", "https://medu.mx"
]

export default function SectionCarousel() {

  var handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };
  return (
    <div style={global.mainContainer}>
      <div style={{'text-align':"center"}}>
      <Carousel
        itemClass="image-item"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        responsive={responsive}
        focusOnSelect={false}
        itemClass=""
        showDots={true}
        arrows={true}
        
        >

        {images.slice(0, 5).map(image => {
          return (
            <Popup trigger={<Image
            
              draggable={false}
              style={{ width: "90%", height: "100%" }}
              src={image}
              //href='https://www.google.com'
              onclick="window.open(https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);"
              />}
              closeOnEscape
              modal>
                {close => (
      <div className="modal" style={{position:"fixed", height:"10000em"}}>
        <a className="close" onClick={close}> 
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
              
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
            </Popup>
          );
        })}
      </Carousel>
      
      </div>
    </div>
    
  );
}
