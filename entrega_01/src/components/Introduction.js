import React from 'react';
import Button from '@material-ui/core/Button';

import global from "../styles/global.js";
import Grid from '@material-ui/core/Grid';

function Introduction() {
//url(" + "../images/1.jpg" + ")

    const style = { 
        backgroundImage: `url(${require('../images/info.jpg')})`,
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
        height:'35em',
        backgroundSize: 'cover',
        backgroundColor: '#999'
    };

    const buttonStyle = {
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
        height:'100%',
         'backgroundSize': 'cover',
         borderRadius: '12px',
         color: 'white',
         fontWeight: 'bold'
    }


    
    var textDiv = {
        position: 'absolute', 
        top: '20%', 
        left: '15%',
        
    };

    var gradiantDiv = {
        padding:'0 0 0 2em',
        display: 'flex',
        alignItems: 'flex-end',
        position: 'absolute',
        top: '0',
        left: '0',
        width:'95%',
        height:'50%',
        background:'linear-gradient(to top, rgba(255,255,255, 0), rgba(255,255,255, 1))',
        
    }

    var text = {

        color: 'blue',
        fontSize:'40px'
    };

    var text2 = {

        color: 'gray',
        fontSize:'24px'
    };
    var text3 = {

        color: 'gray',
        fontSize:'14px'
    };
    var text4 = {

        color: 'gray',
        fontSize:'14px'
    };
    return (
        <div style ={global.mainContainer}>
            <Grid container= {true} justify="center" style = {style}>
                <Grid item xs = {12} sm = {12} justify="center" style = {gradiantDiv}>
                    <Grid item xs = {12} sm = {12} justify="center" style = {textDiv}>
                        <h1 style={text}>Medu Lectures</h1>
                        <h3 style={text2}>Aprende medicina con los mejores médicos </h3>
                        <p style={text3}>Videoclases en línea con los contenidos médicos más relevantes. </p>
                        <p style={text4}>Más de 300 horas en video con 19 + instructores de alta calidad.</p>
                        <h3 style={{fontSize:'28px', color:'blue'}}>Por solo $199.00 al mes.</h3>
                        <Button size="large" style={buttonStyle}>
                            Iniciar ahora
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );

}
export default Introduction;


