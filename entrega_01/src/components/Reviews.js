import React from 'react';

import global from "../styles/global.js";

function Reviews() {
//url(" + "../images/1.jpg" + ")

    const style = { 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'30em',
         'backgroundSize': 'cover',
         padding: '3em 0 0 0',
         
    };
    
    var text = {

        color: 'white',
        fontSize:'40px'
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
            <div style={style}>
                <div>
                    <p style={text4}>Medu Lectures es la mejor plataforma de educación médica en español. Los mejores médicos, los mejores contenidos, la mejor plataforma”</p>
                    <h1 style={text}>El PAÍS </h1>
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
                </div>
            </div>
        </div>

    );

}
export default Reviews;


