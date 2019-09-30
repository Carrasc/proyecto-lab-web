import React, { Component } from 'react';
import Footer from '../components/Footer';
import Classes_Info from '../components/Classes_Info';
import global from '../styles/global'
import Video from '../components/Video'
import User_NavBar from '../components/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';
import Grid from '@material-ui/core/Grid';

const titles = ['45 + CLASES', 'El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. ', '327 LECCIONES', 'El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema.'
]

class VideoClass extends Component {
    render() {
        return (
            <div>
                <User_NavBar />
                <Grid container alignItems='center' justify='center'  >
                    <Grid item xs={10} md={8} lg = {6}>
                        <Video source={'http://media.w3.org/2010/05/sintel/trailer.mp4'} thumbnail={'https://micarrerauniversitaria.com/wp-content/uploads/2018/03/neurologia-2-1024x516.jpg'}></Video>
                    </Grid>
                </Grid>

                <Classes_Info title={titles} />



                <Topics />
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