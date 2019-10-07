import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import Video from '../components/Video';
import Popup from "reactjs-popup";


const sources = [
    ['http://media.w3.org/2010/05/sintel/trailer.mp4']
];

const thumbnail = [
  ['https://media.istockphoto.com/photos/skilled-in-saving-lives-picture-id592647638?k=6&m=592647638&s=612x612&w=0&h=r9OPxixQe4qrZ9_4WCepXCBpqtQRqtTmvffB0jpXGfQ=']
];

const STYLE = {

    textDiv : {
        padding:'0 0 0 2em',
        position: 'absolute',
        bottom: '0',
        left: '0',
        textAlign: 'left'
    },

    titulo : {
        size: '50px',
        color: 'blue',
        display: 'inline',
        margin: 0,
        padding: 0
    },

    especialidad : {
        color: 'gray',
        margin: 0,
        padding: 0
    },
    gradiantDiv : {
        position: 'absolute',
        bottom: '0',
        width:'100%',
        height:'70%',        
        background:'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',  

    },
    st : {
        width: '70%',
    }
}

class Clases extends Component {
  
  constructor (props){
    super(props);
    this.state = {
        blur: "rgba(0, 0, 0, 0)"
    };
    this.overClass = this.overClass.bind(this);
    this.outClass = this.outClass.bind(this);
  }

  img = { 
    backgroundImage: `url(${this.props.row[2]})`,
    height:'100%',
    width:'100%',
    backgroundPosition:'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    cursor: 'pointer',
    };

  
  outClass(e){
    this.setState({
      blur: "rgba(0, 0, 0, 0)"
    });
  }
  overClass(e){
    this.setState({
        blur: "rgba(0, 0, 0, 0.35)"
  });
  }
    
render(){
  console.log(`url(${this.props.backgroundImage})`);
  var blurOverImage = {
    position: 'absolute',
    width:'100%',
    height:'100%',
    backgroundColor: this.state.blur
  } 
    return (
        <Popup trigger={
        <Grid item style = {this.img}>
          <div style={blurOverImage} onMouseOver={this.overClass.bind(this)} onMouseOut={this.outClass.bind(this)}>
            <div style={STYLE.gradiantDiv}>
                <div style={STYLE.textDiv}>
                    <h2 style={STYLE.titulo}>{this.props.row[0]}</h2>
                    <p style={STYLE.especialidad}>{this.props.row[1]}</p>
                </div>
            </div>
          </div>
        </Grid>
        } 
        lockScroll
        closeOnEscape
        modal
        contentStyle={STYLE.st}
        >
        {close => (
          <div className="modal">
            <a className="close" onClick={close} href='/#'>
              &times;
            </a>
            <div className="header"> Soy {this.props.nombre} y soy gay.</div>
            <div className="content">
              <Video source={sources[0]} thumbnail = {thumbnail[0]}></Video>
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
    }
}

export default Clases;
