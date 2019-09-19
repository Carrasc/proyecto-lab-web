import React from 'react';
import logo from '../images/1.jpg'; 
import {ImageBackground, Text} from 'react';


function Introduction() {
//url(" + "../images/1.jpg" + ")

    const imageFilePath = '../images/1.jpg';
    const style = { 
        backgroundImage: `url(${require('../images/1.jpg')})`,
         height:'600px',
         'backgroundSize': 'cover',
        };
    
    var text = {
        'text-align': 'center',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black'
    };
    return (
        <div>
            <div style={style}>
                <p style={text}>lorem</p>
            </div>
        </div>

    );

}
export default Introduction;


