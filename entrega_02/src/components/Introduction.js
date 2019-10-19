import React from 'react';
//import Button from '@material-ui/core/Button';

import global from "../styles/global.js";
import Grid from '@material-ui/core/Grid';



class Introduction extends React.Component{
    //url(" + "../images/1.jpg" + ")

    style = {
        background: `linear-gradient(to bottom, rgba(255,255,255,1), rgba(0,0,0,0) 50%), url(${require('../images/info.jpg')})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    };



    textDiv = {
        padding: '5em 0 5em 5em',

    };

    render(){
    return (
        <div style={global.mainContainer}>
            <Grid container={true} justify="flex-start" style={this.style}>
                <Grid item xs={8} sm={7} style={this.textDiv}>
                    <h1 style={global.bMainTitleFont}>Medu Lectures</h1>
                    <p style={global.gSecondaryTitleFont}>Aprende medicina con los mejores médicos </p>

                    <hr/><br></br><br></br>

                    <p style={global.blFont}>Medu es tu compañero de estudios en medicina, tu tutor para el
                    ENARM y tu colega en la práctica médica. </p>
                    <br></br>
                    <br></br>
                    <h3 style={{ fontSize: '1.5em', fontWeight: '1em', color: 'blue', letterSpacing: '1px'}}>Por solo $199.00 al mes.</h3>

                    <button style={global.gradientButtonStyle} onClick={this.handleClick}>
                        Iniciar ahora
                    </button>

                </Grid>
            </Grid>
        </div>

    );
    }

}
export default Introduction;


