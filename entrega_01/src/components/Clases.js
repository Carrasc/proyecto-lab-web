import React, { Component } from "react";
import global from "../styles/global.js";
import Grid from '@material-ui/core/Grid';

import Video from '../components/Video';
import Popup from "reactjs-popup";

const STYLE = {
    clase : {
        padding: '0 2em 2em 0',
        height:'30em',
        width:'100%'
    },

    img : { 
        'backgroundImage':
        //'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
        `url(${require('../images/doc.jpg')})`,
        height:'100%',
        width:'100%',
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        },

    textDiv : {
        position: 'absolute',
        bottom: '0',
        left: '0',
        textAlign:'left',
        width:'100%',
        background:'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1))'
    },

    titulo : {
        color: 'blue'
    },

    especialidad : {
        color: 'gray'
    }
}



class Clases extends Component {

    constructor(props){
        super(props);
    }

    
    

    
render(){
    return (
        <Popup trigger={
        <Grid item justify="center" style = {STYLE.img} >
            <div style={STYLE.textDiv}>
                <h2 style={STYLE.titulo}>{this.props.row}</h2>
            </div>
        </Grid>
        } 
        closeOnEscape
        modal
        >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Soy {this.props.row} y soy puto.</div>
            <div className="content">
              <Video></Video>
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
