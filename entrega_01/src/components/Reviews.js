import React from 'react';


function Reviews() {
//url(" + "../images/1.jpg" + ")

    const style = { 
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'450px',
         'backgroundSize': 'cover',
         padding: '50px 0 0 0',
         margin: '0 0 50px 0'
        };
    
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

        color: 'white',
        'font-size':'40px'
    };

    var text2 = {

        color: 'white',
        'font-size':'24px'
    };
    var text3 = {

        color: 'white',
        'font-size':'14px'
    };
    var text4 = {

        color: 'white',
        'font-size':'14px'
    };
    return (
        <div style ={container}>
            <div style={style}>
                <div>
                    <p style={text4}>Medu Lectures es la mejor plataforma de educación médica en español. Los mejores médicos, los mejores contenidos, la mejor plataforma”</p>
                    <h1 style={text}>El Pais </h1>
                    <p style={text3}>Videoclases en línea con los contenidos médicos más relevantes. </p>
                    <p style={text4}>Más de 300 horas en video con 19 + instructores de alta calidad.</p>
                </div>
            </div>
        </div>

    );

}
export default Reviews;


