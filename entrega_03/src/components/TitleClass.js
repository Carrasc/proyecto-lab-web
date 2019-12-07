import React from 'react';

const textDiv = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textTransform: 'uppercase',

};

function TitleClass (props) {

    const imgStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.banner})`,
    
        /* Set a specific height */
        height: '50vh',
      
        /* Position and center the image to scale nicely on all screens */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        
    };
    
    return (

        <div style={{margin: '0 0 0 0'}}>
        <div style={imgStyle}>
            <div style={textDiv}>
                <h1>{props.class}</h1>
                <h6>POR: {props.teacher}</h6>
            </div>
        </div>
        </div>
    )

}


export default TitleClass;