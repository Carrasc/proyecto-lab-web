import React from 'react';
import global from "../styles/global.js";
import Grid from '@material-ui/core/Grid';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

function Reviews() {

    const style = { 
        //backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'100%',
         'backgroundSize': 'cover',
         color: 'black'
         
    };
    

    var text = {
        textAlign: 'center',
        color: 'blue',
        fontSize:'18px',
        width:'80%',
        margin:'auto',
        marginTop:'5%',
        marginBottom:'5%'
    };
    var icons = {
        textAlign: 'left',
        color:'blue'
    };

    return (
        <div style ={global.mainContainer}>
    
            <Grid container= {true}  justify="center" style ={style}>
                

                <Grid container= {true}  justify="center" style ={text}>
                    
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


