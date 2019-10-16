import React from 'react';
import Grid from '@material-ui/core/Grid';
import global from '..st/styles/global';
import Button from '@material-ui/core/Button';

const main = {
    backgroundColor: '#D9EAF2',
    borderRadius: '2em', 
    height: '400px'
}

const top = {
    background: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,1))', 
    height: '45%',
    borderRadius: '2em',
    padding: '1em'
}

const content = {
    height: '70%', 
    padding: '1em',
}

const buttons = {
    textAlign: 'center', 
    padding: '1em'
}

function Plan () {

        return (
            <div>
                <Grid container={true} justify="center" >
                    <Grid item xs={6} sm={3} style={main}>
                        <div style = {top}>
                            <h1 style={global.wMainTitleFont}>1.</h1>
                            <h1 style={global.wlFont}>CLASE INDIVIDUAL</h1>
                        </div>
                        <div style = {content}>
                            <p style={global.gsFont}>Acceso a 1200 casos clínicos con video y 1500 casos clínicos tipo ENARM. Incluye simulador de examen y clínicos tipo ENARM. Incluye simulador de examen</p>
                            <div style={buttons}>
                                <h1 style={global.bSecondaryTitleFont}>$59.00 / mes</h1>
                                <Button size="large" style={global.solidButtonStyle}></Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        )

}


export default Plan;