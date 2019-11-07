import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import Video from '../Videos/Video';
import Popup from "reactjs-popup";



const sources = [
    'http://media.w3.org/2010/05/sintel/trailer.mp4'
];

const thumbnail = [
'https://ak1.picdn.net/shutterstock/videos/3374171/thumb/1.jpg'
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
        background: 'rgba(255,255,255,0)',
        borderStyle: 'none',
        
    }
}

class Classes extends Component {
  
  constructor (props){
    super(props);
    this.state = {
        blur: "rgba(0, 0, 0, 0)"
    };
    this.overClass = this.overClass.bind(this);
    this.outClass = this.outClass.bind(this);
  }

  img = { 
    backgroundImage: `url(${this.props.row.img})`,
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
                    <h2 style={STYLE.titulo}>{this.props.row.name}</h2>
                    <p style={STYLE.especialidad}>{this.props.row.title}</p>
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
          <div className="">
            {/*
            <a className="close" onClick={close} href='/#'>
              &times;
            </a>*/}
            <div className="content" >
              <div style = {{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em'}}>
                <Video source={sources[0]} thumbnail = {thumbnail[0]}></Video>
              </div>
            </div>
            
          </div>
        )}
      </Popup>
    );
    }
}

export default Classes;
