import React from 'react';
import globalStyles from  "../../styles/globalStyles.js";
import Video from './Video'
import Grid from '@material-ui/core/Grid';


function IntroVideo() {

    const styleblue = {
        backgroundImage: 'linear-gradient(to bottom , rgba(0,0,255,1) 0%, rgba(32,178,170,0.5) 90%, rgba(0,0,0,0) 90%, rgba(0,0,0,0) 100%)', 
        height:"100%",

    };

    const video = {
        position: "relative",
        //paddingTop: "56.25%", /* Player ratio: 100 / (1280 / 720) */
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '1.5em', 
        overflow: "hidden"
       
    }



    return (
        <div style = {globalStyles.mainContainer}>
                <div style={{padding:'0 0 5em 0'}}>
                    <div style={styleblue} >
                        <Grid container={true} justify="center" >
                                <Grid item xs={10} sm={6} style={{paddingTop: '4em'}}>
                                    <div style={video}>
                                        <Video source={'http://media.w3.org/2010/05/sintel/trailer_hd.mp4'} thumbnail={'https://ak1.picdn.net/shutterstock/videos/3374171/thumb/1.jpg'}></Video>
                                    </div>
                                </Grid>
                        </Grid>             
                    </div>
                </div>
        </div>

    );

}
export default IntroVideo;


