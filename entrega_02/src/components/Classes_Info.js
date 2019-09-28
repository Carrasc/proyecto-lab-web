import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import global from "../styles/global.js";
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';


class Classes_Info extends Component {
    render(){
        return(
            <div style = {global.mainContainer}>
                <Grid container = {true} justify = "space-around" direction="row" justify="center" alignItems="center"
>
                    <Grid item xs = {12} style = {{padding: '0'}} sm = {4} style = {{padding: '0 2em 0 7em'}}>
                        
                            <h style = {global.bSecondaryTitleFont}><strong>45 + CLASES</strong></h>
                        
                            <div style= {{marginTop:'15%',textAlign:'justify'}}>
                                <p style = {global.gmFont} >El curso de Neurología se divide en
                                    cuarenta y cinco clases generales que
                                    abordan cada una de las subespecialidades
                                    del tema. El curso de Neurología se divide
                                    en cuarenta y cinco clases generales que
                                    abordan cada una de las subespecialidades
                                    del tema. 
                                </p> 
                        </div>
                    </Grid>
                   
                    <Grid item xs = {12} style = {{padding: '0'}} sm = {4} style = {{padding: '0 2em 0 7em'}}>
                        <h style = {global.bSecondaryTitleFont}><strong>327 LECCIONES</strong></h>
                        <div style= {{marginTop:'15%',textAlign:'justify'}}>
                            <p style = {global.gmFont} >El curso de Neurología se divide en cuarenta y
                                cinco clases generales que abordan cada una
                                de las subespecialidades del tema. El curso de
                                Neurología se divide en cuarenta y cinco clases
                                generales que abordan cada una de las subespecialidades del tema. 
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs = {12} style = {{padding: '0'}} sm = {4} style = {{padding: '0 2em 0 7em'}}>
                        <div  >
                        <Button size="large" style={global.solidButtonStyle}>
                        <PlayCircleFilledWhiteOutlinedIcon/>
                            TOMAR CLASE
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );

    }
        
    

}


export default Classes_Info;