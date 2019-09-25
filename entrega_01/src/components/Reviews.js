import React from 'react';

import global from "../styles/global.js";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { textAlign } from '@material-ui/system';


function Reviews() {

    const style = { 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'30em',
         'backgroundSize': 'cover',
         padding: '3em 0 0 0',
         
    };
    
    var text = {

        color: 'white',
        fontSize:'40px',
        textAlign:'center'
    };


    var text3 = {

        color: 'white',
        fontSize:'14px'
    };
    var text4 = {
        color: 'white',
        fontSize:'18px',
        width:'80%',
        margin:'auto',
        marginTop:'5%'
    };
    return (
        <div style ={global.mainContainer}>
         
                    <Grid container= {true}  justify="center" style ={style}>
                        <Grid item xs = {12}  justify="center" style = {text}>
                            Medu Lectures es la mejor plataforma de educación médica en español. Los mejores médicos, los mejores contenidos, la mejor plataforma”
                        </Grid>
                        <Grid item md = {12}  justify="center">
                            El PAÍS
                        </Grid>
                        
                        <p style={text3}>Videoclases en línea con los contenidos médicos más relevantes. </p>
                        <hr style= {{margin:'auto',width:'80%'}}/>
                        <table style={text4}>
                            <tbody>
                                <tr>
                                    <td><b> 300 + lecciones</b><br/> PROMEDIO POR CLASE </td>
                                    <td><b>19 + clases</b> <br/>con los mejores médicos</td>
                                    <td><b>10 Minutos</b><br/>  por subtema de lección</td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                    
               
        </div>

    );

}
export default Reviews;


