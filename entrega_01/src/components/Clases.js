import React from "react";

function Clases(props) {

    var clase = {
        padding: '0 20px 0 0',
        height:'400px',
        width:'49%',
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
        'text-align':'left',
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
      <div style={{display:'flex', margin: '20px 100px'}}>
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
                    <h2 style={titulo}>Luis Carrasco</h2>
                    <h4 style={especialidad}>Urólogo</h4>
                </div>
            </div>
        </div>
  </div>
  );
}

export default Clases;
