import React from 'react';
import Footer from '../components/Footer';
import ClassesInfo from '../components/Classes/Classes_Info';
import globalStyles from  '../styles/globalStyles'
import Video from '../components/Videos/Video'
import UserNavBar from '../components/NavBars/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';
import Grid from '@material-ui/core/Grid';
import Subclass from '../components/Classes/Subclass';
import Carousel from '../components/Carousels/Carousel';
import ReactSlickDemo from '../components/Carousels/newCarousel';

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
  
  

function VideoClass () {

    const STYLE = {
        backgroundColor: 'rgba(248, 248, 255, 1)',
        //padding: '5em',
        textAlign: 'center'
    }
    const topicStyle = {
        width:'80%',
        margin:'3em 0',
        borderBottom: '1px solid rgba(248, 248, 255, 1)',
    }
    
        return (

            <div>
                <UserNavBar/>
               
                <Grid container={true} justify="center" >
                    <Grid xs= {10} item style ={globalStyles.mainContainer}>
                        <Video source={'http://media.w3.org/2010/05/sintel/trailer_hd.mp4'} thumbnail={'https://micarrerauniversitaria.com/wp-content/uploads/2018/03/neurologia-2-1024x516.jpg'}></Video>
                    </Grid>
                </Grid>

                <ClassesInfo title={titles} />


                <Carousel component = {
                    
                    data.map((data, index) =>{
                        return (
                        <div onClick={() => alert("Hello from here")}>    
                        <Subclass data={data} />
                        
                        </div>
                        
                        )})
                        
                } />
                <div style={globalStyles.mainContainer}>
                    <div style={STYLE}>
                        <div style={topicStyle}></div>
                        <h1 style={globalStyles.gTopic}>TOPICS:</h1>
                        <div style={topicStyle}></div>
                        {classes.map((classes) =>{
                            return(
                                <Topics classes={classes}/>
                            )
                        })}
                    </div>
                </div>
                <ReactSlickDemo/>
                <Footer />
                
            </div>
        )

}


export default VideoClass;