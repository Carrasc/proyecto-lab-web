import React ,{Component}from 'react';
import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction.js';
import Reviews from '../components/Reviews';
import Clases from '../components/Clases';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Grid from '@material-ui/core/Grid';
import global from "../styles/global.js";
import Classes_Info from '../components/Classes_Info';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import User_NavBar from '../components/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';
const titles = ['45 + CLASES','El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. ' ,'327 LECCIONES','El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema.' 
]

class VideoClass extends Component {
    render(){
        return(
            <div>
                <User_NavBar/>
                <Classes_Info title = {titles}/>
                    
                
                
                <Topics/>
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