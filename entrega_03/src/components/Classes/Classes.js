import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

//App components
import ClassesModal from './ClassesModal'


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
    backgroundImage: `linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0) 60%), url(${this.props.row.img.key})`,
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

    return (
      <>
          <div style={{height:'100%', overflow: 'hidden', position: 'relative'}} onClick={this.handleModal}>
              <Grid item style = {this.img} className='hoverImage'></Grid>

              <div style={STYLE.textDiv}>
                  <h2 style={STYLE.titulo}>{this.props.row.name}</h2>
                 <p style={STYLE.especialidad}>{this.props.row.specialty}</p>
              </div>
          </div>
        
          <ClassesModal
            thumbnail={this.props.row.thumbnail.key}
            trailer={this.props.row.trailer.key}
            desc={this.props.row.descCourse}
            show={this.state.show}
            onHide={this.handleCloseModal}
            id = {this.props.row.id}
          />
      </>
    );
  }
}

export default Classes;