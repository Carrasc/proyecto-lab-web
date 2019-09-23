import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Card from "./Card.js";

import image1 from "../images/bg.jpg";
import image2 from "../images/1.jpg";
import image3 from "../images/bg3.jpg";

import AwesomeSlider from 'react-awesome-slider';
import '../styles/styles.css';



import styles from "../styles/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const slider = (
    <AwesomeSlider>
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );
  return(
    slider;
  );
}
