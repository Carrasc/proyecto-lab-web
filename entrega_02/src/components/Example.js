import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import img from '../images/1.jpg';

export default class Example extends Component{


render(){
  return(
  <StyleRoot style={{width:'100%'}}>
    <Coverflow
      displayQuantityOfSide={1}
      navigation
      infiniteScroll
      enableScroll={false}
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          width: 'auto',
          height: 'auto'
        },
        '@media (min-width: 900px)': {
          width: 'auto',
          height: '500px'
        }
      }}
    >
      <img src={require("../images/2.jpg")} alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src={require("../images/1.jpg")} alt='Album two' data-action="http://passer.cc"/>
      <img src={require("../images/2.jpg")}  alt='Album three' data-action="https://doce.cc/"/>
      <img src={require("../images/1.jpg")} alt='Album four' data-action="http://tw.yahoo.com"/>
    </Coverflow>
  </StyleRoot>
   ); 
  }
}
