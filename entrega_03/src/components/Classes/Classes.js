import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Video from '../Videos/Video';
import Popup from "reactjs-popup";

import '../../styles/css/Class.css'

const STYLE = {

    textDiv : {
        padding:'0 0 0 2em',
        position: 'absolute',
        bottom: '0',
        left: '0',
        textAlign: 'left'
    },

    titulo : {
        fontSize: '25px',
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

}

class Classes extends Component {
  
  img = { 
    backgroundImage: `linear-gradient(to top, rgba(255,255,255,1), rgba(0,0,0,0) 60%), url(${this.props.row.img})`,
    height:'100%',
    width:'100%',
    backgroundPosition:'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    cursor: 'pointer',
    };

  
render(){

    return (
        <Popup trigger={
        
          <div style={{height:'100%', overflow: 'hidden', position: 'relative'}} >
            <Grid item style = {this.img} className='hoverImage'></Grid>

            <div style={STYLE.textDiv}>
                <h2 style={STYLE.titulo}>{this.props.row.name}</h2>
                <p style={STYLE.especialidad}>{this.props.row.specialty}</p>
            </div>
        </div>
        
        
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
              <div style = {{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em', overflow: 'hidden'}}>
                <Video source={this.props.row.trailer} thumbnail = {this.props.row.thumbnail}></Video>
              </div>
            </div>
            
          </div>
        )}
      </Popup>
    );
    }
}

export default Classes;
