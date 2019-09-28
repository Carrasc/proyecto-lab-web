import React from 'react';

import global from "../styles/global.js";

import Grid from '@material-ui/core/Grid';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import StarIcon from '@material-ui/icons/Star';

function Reviews() {

    const style = { 
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'100%',
         'backgroundSize': 'cover',
         padding: '3em 0 0 0',
         
    };
    
    var text = {
        color: 'white',
        fontSize:'1em',
        textAlign:'center',
        marginTop: '1em'
    };
    var text2 = {
        marginTop: '1em',
        marginBottom: '1.5em',
        color: 'white',
        fontSize:'1.5em',
        textAlign:'center',
        fontWeight: 'bold'
    };

    var text4 = {
        textAlign: 'center',
        color: 'white',
        fontSize:'18px',
        width:'80%',
        margin:'auto',
        marginTop:'5%',
        marginBottom:'5%'
    };
    var icons = {
        textAlign: 'left',
    };

    return (
        <div style ={global.mainContainer}>
    
            <Grid container= {true}  justify="center" style ={style}>
                <StarIcon style={{color:'white'}}></StarIcon>
                <StarIcon style={{color:'white'}}></StarIcon>
                <StarIcon style={{color:'white'}}></StarIcon>
                <StarIcon style={{color:'white'}}></StarIcon>
                <StarIcon style={{color:'white'}}></StarIcon>
                
                <Grid item xs = {12}  style = {text}>
                    "Medu Lectures es la mejor plataforma de educación médica en español. Los mejores médicos, los mejores contenidos, la mejor plataforma"
                </Grid>
                <Grid item xs = {12}  style = {text2}>
                    El PAÍS
                </Grid>
                
                
                <hr  style= {{margin:'auto',width:'80%'}}/>

                <Grid container= {true}  justify="center" style ={text4}>
                    
                    <Grid item xs = {12} sm = {4}>
                    <LibraryBooksOutlinedIcon style = {icons} fontSize="large"/><br/>
                        <strong> 300 + lecciones</strong><br/> promedio por clase 
                    </Grid>
                    <Grid item  xs = {12} sm = {4}>
                    <OndemandVideoOutlinedIcon fontSize="large"/><br/>
                        <strong>19 + clases</strong> <br/>con los mejores médicos 
                    </Grid>
                    <Grid item  xs = {12} sm = {4}>
                    <WatchLaterOutlinedIcon fontSize="large"/><br/>
                        <b>10 Minutos</b><br/>  por subtema de lección
                    </Grid>
                </Grid> 
            </Grid>
                    
               
        </div>

    );

}
export default Reviews;


