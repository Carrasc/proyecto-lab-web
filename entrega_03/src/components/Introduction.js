import React from 'react';
//import Button from '@material-ui/core/Button';

import globalStyles from '../styles/globalStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



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
        padding: '5em 0 5em 3em',

    };

    render(){
    return (
        <div style={globalStyles.mainContainer}>
            <Grid container={true} justify="flex-start" style={this.style}>
                <Grid item xs={10} sm={7} md={5} style={this.textDiv}>
                    <h1 style={globalStyles.bMainTitleFont}>Medu Lectures</h1>
                    <p style={globalStyles.gSecondaryTitleFont}>Aprende medicina con los mejores médicos </p>

                    <hr/>
                    <br/>
                    

                    <p style={globalStyles.blFont}>Medu es tu compañero de estudios en medicina, tu tutor para el
                    ENARM y tu colega en la práctica médica. </p>
                    <br></br>
                    <br></br>
                    <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', color: 'blue', letterSpacing: '1px'}}>Por solo $199.00 al mes.</h3>
                    <br/>

                    <Button variant="contained" style={globalStyles.gradientButtonStyle} onClick={this.handleClick}>
                        Iniciar ahora
                    </Button>

                </Grid>
            </Grid>
        </div>

    );
    }

}
export default Introduction;


