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
                                    <Video source={'http://media.w3.org/2010/05/sintel/trailer_hd.mp4'} thumbnail={'https://ak1.picdn.net/shutterstock/videos/3374171/thumb/1.jpg'}></Video>
                                </Grid>
                        </Grid>             
                    </div>
                </div>
            </div>
        </div>

    );

}
export default IntroVideo;


