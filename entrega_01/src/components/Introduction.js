import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';



function Introduction() {
//url(" + "../images/1.jpg" + ")

    const imageFilePath = '../images/1.jpg';
    const style = { 
        backgroundImage: `url(${require('../images/1.jpg')})`,
         height:'600px',
         'backgroundSize': 'cover',
        };

    var gradiant = {
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))'
    }
    
    var container = {
        //width: '80%',
        padding: '100px 100px 0 100px'
    }
    
    var textDiv = {
        'text-align': 'left',
        position: 'absolute',
        top: '40%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
    };

    var text = {

        color: 'blue',
        'font-size':'40px'
    };

    var text2 = {

        color: 'gray',
        'font-size':'24px'
    };
    var text3 = {

        color: 'gray',
        'font-size':'14px'
    };
    var text4 = {

        color: 'gray',
        'font-size':'14px'
    };
    return (
        <div style ={container}>
            <div style={style}>
                <div style={textDiv}>
                    <h1 style={text}>Medu Lectures</h1>
                    <h3 style={text2}>Aprende medicina con los mejores médicos </h3>
                    <p style={text3}>Videoclases en línea con los contenidos médicos más relevantes. </p>
                    <p style={text4}>Más de 300 horas en video con 19 + instructores de alta calidad.</p>
                    <h3 style={{'font-size':'28px', color:'blue'}}>Por solo $199.00 al mes.</h3>
                    <Button variant="outlined" color="primary">
                        Iniciar ahora
                    </Button>
                </div>
            </div>
        </div>

    );

}
export default Introduction;


