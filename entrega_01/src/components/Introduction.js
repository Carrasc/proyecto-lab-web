import React from 'react';
import Button from '@material-ui/core/Button';

import global from "../styles/global.js";


function Introduction() {
//url(" + "../images/1.jpg" + ")

    const style = { 
        backgroundImage: `url(${require('../images/1.jpg')})`,
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
        height:'35em',
        backgroundSize: 'cover',
    };


    
    var textDiv = {
        textAlign: 'left',
        position: 'absolute',
        top: '40%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        
    };

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
            <div style={style}>
                <div style={textDiv}>
                    <h1 style={text}>Medu Lectures</h1>
                    <h3 style={text2}>Aprende medicina con los mejores médicos </h3>
                    <p style={text3}>Videoclases en línea con los contenidos médicos más relevantes. </p>
                    <p style={text4}>Más de 300 horas en video con 19 + instructores de alta calidad.</p>
                    <h3 style={{fontSize:'28px', color:'blue'}}>Por solo $199.00 al mes.</h3>
                    <Button variant="outlined" color="primary">
                        Iniciar ahora
                    </Button>
                </div>
            </div>
        </div>

    );

}
export default Introduction;


