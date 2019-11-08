import React from 'react';
import Grid from '@material-ui/core/Grid';
import globalStyles from  '../styles/globalStyles';
import Button from '@material-ui/core/Button';

const main = {
    backgroundColor: '#D9EAF2',
    borderRadius: '2em', 
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
}

const top = {
    background: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,1))', 
    height: '40%',
    borderRadius: '2em',
    padding: '1em'
}

const content = {
    height: '60%', 
    padding: '2em',
}

const buttons = {
    textAlign: 'center', 
    padding: '1em'
}

function Plan () {

        return (
            <div>
                <Grid container={true} justify="center" >
                    <Grid item xs={8} sm={5} md={4} lg={3} xl={2} style={main}>
                        <div style = {top}>
                            <h1 style={globalStyles.wMainTitleFont}>1.</h1>
                            <br/>
                            <h1 style={globalStyles.wlFont}>CLASE INDIVIDUAL</h1>
                        </div>
                        <div style = {content}>
                            <p style={globalStyles.gsFont}>Acceso a 1200 casos clínicos con video y 1500 casos clínicos tipo ENARM. Incluye simulador de examen y clínicos tipo ENARM. Incluye simulador de examen</p>
                            <div style={buttons}>
                                <h1 style={globalStyles.bSecondaryTitleFont}>$59.00 / mes</h1>
                                <div style={{padding: '2em 0 4em 0'}}>
                                    <Button size="large" style={globalStyles.solidButtonStyle}>INICIAR AHORA</Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        )

}


export default Plan;