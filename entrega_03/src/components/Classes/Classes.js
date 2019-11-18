import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

//App components
import ClassesModal from './ClassesModal'

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
    this.handleModal = this.handleModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleModal(){
    this.setState({
      show : true
    })
  }
  
  handleCloseModal(){
    this.setState({
      show : false
    })
  }

  
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
      <>
          <Grid item style = {this.img}>
            <div style={blurOverImage} onMouseOver={this.overClass.bind(this)} onMouseOut={this.outClass.bind(this)} onClick={this.handleModal}>
              <div style={STYLE.gradiantDiv}>
                  <div style={STYLE.textDiv}>
                      <h2 style={STYLE.titulo}>{this.props.row[0]}</h2>
                      <p style={STYLE.especialidad}>{this.props.row[1]}</p>
                  </div>
              </div>
            </div>
          </Grid>
        
          <ClassesModal
            show={this.state.show}
            onHide={this.handleCloseModal}
          />
      </>
    );
  }
}

export default Classes;
