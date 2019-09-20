import React from "react";

function Clases(props) {

    var clases = {
        height:'1000px',
        width:'auto',
        padding:'0 5em 5em 5em',
        margin:'0'
    }
    var clase = {
        padding: '0 20px 0 0',
        height:'33%',
        width:'48%',
        float:'right'
    }

    const img = { 
        'backgroundImage':
        //'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
        `url(${require('../images/doc.jpg')})`,
        height:'100%',
        width:'100%',
        'backgroundSize': 'cover',
        position: 'relative',
        };

    var textDiv = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        textAlign:'left',
        width:'100%',
        background:'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1))'
    };

    var titulo = {
        color: 'blue'
    };
    var especialidad = {
        color: 'gray'
    };
    

    
  return (
    <div style={clases}>  
        <div style={clase}>
            <div style={img}>
                <div style={textDiv}>
                    <h2 style={titulo}>Luis Carrasco</h2>
                    <h4 style={especialidad}>Urólogo</h4>
                </div>
            </div>
        </div>
        <div style={clase}>
            <div style={img}>
                <div style={textDiv}>
                    <h2 style={titulo}>Mauricio Peón</h2>
                    <h4 style={especialidad}>Ginecólogo</h4>
                </div>
            </div>
        </div>
        <div style={clase}>
            <div style={img}>
                <div style={textDiv}>
                    <h2 style={titulo}>Alexandro Marcelo</h2>
                    <h4 style={especialidad}>Dios de la medicina</h4>
                </div>
            </div>
        </div>
        <div style={clase}>
            <div style={img}>
                <div style={textDiv}>
                    <h2 style={titulo}>Juan Velez</h2>
                    <h4 style={especialidad}>El Dios supremo</h4>
                </div>
            </div>
        </div>
        <div style={clase}>
            <div style={img}>
                <div style={textDiv}>
                    <h2 style={titulo}>Andres Campos</h2>
                    <h4 style={especialidad}>Cardiologo</h4>
                </div>
            </div>
        </div>
        <div style={clase}>
            <div style={img}>
                <div style={textDiv}>
                    <h2 style={titulo}>Luis Santiago</h2>
                    <h4 style={especialidad}>El de los cafés</h4>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Clases;
