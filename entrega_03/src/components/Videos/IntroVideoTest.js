import React from 'react';
import globalStyles from  "../../styles/globalStyles.js";
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';


function IntroVideoTest() {

    const styleblue = {
        backgroundImage: 'linear-gradient(to bottom , rgba(0,0,255,1) 0%, rgba(32,178,170,0.5) 90%, rgba(0,0,0,0) 90%, rgba(0,0,0,0) 100%)', 
        height:"100%",

    };

    /* Para mantener el mismo aspect ratio de 16/9 */
    const video = {
        position: "relative",
        paddingTop: "56.25%", /* Player ratio: 100 / (1280 / 720) */
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em', 
        overflow: "hidden"
    }



    return (
        <div style = {globalStyles.mainContainer}>
                <div style={{padding:'0 0 5em 0'}}>
                    <div style={styleblue} >
                        <Grid container={true} justify="center" >
                            <Grid item xs={10} sm={6} style={{paddingTop: "4em"}}>
                                <div style={video}>
                                    <ReactPlayer 
                                    // Para que no puedan descargar el video 
                                    config={{ file: { attributes: { controlsList: 'nodownload', preload: "auto" } } }}
                                    
                                    // Disable right click (para que tampoco puedan descargar con click derecho)
                                    onContextMenu={e => e.preventDefault()}
                                    style = {{position: 'absolute', top: '0', left: "0"}} 
                                    url='https://www.youtube.com/watch?v=yDTXfM1YEzw' 
                                    controls 
                                    //playing
                                    //light="'https://ak1.picdn.net/shutterstock/videos/3374171/thumb/1.jpg'"
                                    width={"100%"} 
                                    height={"100%"} />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
        </div>

    );

}
export default IntroVideoTest;


