import React from 'react';
import global from "../styles/global.js";
import Video from './Video'
import Grid from '@material-ui/core/Grid';


function IntroVideo() {

    const styleblue = {
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
        height:"100%"
    };
    const stylewhite = {
        backgroundImage: 'white',
        margin: '0 auto',
        textAlign: 'center',
    };

    const video = {
        display: 'inline-block',
        padding: '3em 0',
        //bottom: '0'
    }



    return (
        <div style = {global.mainContainer}>
            <div style={{height:'100%'}}>
                <div style={stylewhite}>
                    <div style={styleblue} >
                        <Grid container={true} justify="center">
                                <Grid item xs={12} sm={6} style={video}>
                                    <Video source={'http://media.w3.org/2010/05/sintel/trailer_hd.mp4'} thumbnail={'https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles-.jpg'}></Video>
                                </Grid>
                        </Grid>             
                    </div>
                </div>
            </div>
        </div>

    );

}
export default IntroVideo;


