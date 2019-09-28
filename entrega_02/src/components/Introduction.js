import React from 'react';
import Button from '@material-ui/core/Button';

import global from "../styles/global.js";
import Grid from '@material-ui/core/Grid';

function Introduction() {
//url(" + "../images/1.jpg" + ")

    const style = { 
        background: `linear-gradient(to bottom, rgba(255,255,255,1), rgba(0,0,0,0) 50%), url(${require('../images/info.jpg')})`,
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',        
        height:'35em',
    };

  
    
    var textDiv = {
        position: 'absolute', 
        top: '15%', 
        left: '15%',
        
    };
    return (
        <div style ={global.mainContainer}>
            <Grid container= {true} justify="center" style = {style}>                    
                    <Grid item xs = {12} sm = {12}  style = {textDiv}>
                        <h1 style={global.bMainTitleFont}>Medu Lectures</h1>
                        <h3 style={global.gSecondaryTitleFont}>Aprende medicina con los mejores médicos </h3>
                        
                        <hr style= {{margin:'auto',width:'100%'}}/><br></br><br></br>

                        <p style={global.bPFont}>Videoclases en línea con los contenidos médicos más relevantes. </p>
                        <p style={global.bPFont}>Más de 300 horas en video con 19 + instructores de alta calidad.</p>
                        <br></br>
                        <br></br>
                        <h3 style={{fontSize: '1.5em', fontWeight: '1em',color: 'blue'}}>Por solo $199.00 al mes.</h3>
                        <Button size="large" style={global.gradientButtonStyle}>
                            Iniciar ahora
                        </Button>
                    </Grid>
            </Grid>
        </div>

    );

}
export default Introduction;


