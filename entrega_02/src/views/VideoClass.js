import React, { Component } from 'react';
import Footer from '../components/Footer';
import Classes_Info from '../components/Classes_Info';
import global from '../styles/global'
import Video from '../components/Video'
import User_NavBar from '../components/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';
import Grid from '@material-ui/core/Grid';
import Subclass from '../components/Classes/Subclass';
import Carousel from '../components/Carousel';


const titles = ['45 + CLASES', 'El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. ', '327 LECCIONES', 'El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema.'
]
const classes = [
    ['01','Hemisferios Cerebrales','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['02', 'Núcles grises de la base','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['03', 'Nervios craneales y espinales','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.']
]
const data = [
    ['57', '147', require("../images/2.jpg"), 'BASES NEUROANATOMICAS', 'DEL SISTEMA NERVIOSO'],
    ['13', '153', require("../images/3.jpg"), 'LÓBULOS NEUROENCEFALÓGICOS', 'DEL SISTEMA NERVIOSO'],
    ['0', '80', require("../images/4.jpg"), 'ESTOY MAMADÍSIMO', 'DEL SISTEMA NERVIOSO'],
  ]



class VideoClass extends Component {

    STYLE = {
        backgroundColor: 'rgba(248, 248, 255, 1)',
        //padding: '5em',
        textAlign: 'center'
    }
    topicStyle = {
        width:'80%',
        margin:'3em 0',
        borderBottom: '1px solid rgba(248, 248, 255, 1)',
    }
    render() {        
        return (

            <div>
                <User_NavBar />
               
                
                <Grid style ={global.mainContainer}>
                    <Video source={'http://media.w3.org/2010/05/sintel/trailer.mp4'} thumbnail={'https://micarrerauniversitaria.com/wp-content/uploads/2018/03/neurologia-2-1024x516.jpg'}></Video>
                </Grid>

                <Classes_Info title={titles} />


                <Carousel component = {
                    data.map((data, index) =>{
                        return (
                        <Subclass data={data}/>
                        )})
                } >
                   
                
                </Carousel>

                <div style={global.mainContainer}>
                    <div style={this.STYLE}>
                        <div style={this.topicStyle}></div>
                        <h1 style={global.gTopic}>TOPICS:</h1>
                        <div style={this.topicStyle}></div>
                        {classes.map((classes) =>{
                            return(
                                <Topics classes={classes}/>
                            )
                        })}
                    </div>
                </div>
                
                <Footer />
                
            </div>
        )
    }
    //Navbar
    //Mini Navbar (menu)
    //Links(Ver todas las secciones, siguiente clase)
    //Video
    //Lecciones populare(carrusel)
    //Footer




}


export default VideoClass;