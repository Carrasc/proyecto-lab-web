import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import global from "../../styles/global.js";
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import Divider from '@material-ui/core/Divider';


class Classes_Info extends Component {
    render(){
        return(
            <div style = {global.mainContainer}>
                <Grid container = {true} justify = "space-around" direction="row" justify="center" alignItems="center"
>
                    <Grid item xs = {12} style = {{padding: '0'}} sm = {4} style = {{padding: '0 8% 0 8%'}}>
                        
                        <h1 style = {global.bSecondaryTitleFont}><strong>{this.props.title[0]}</strong></h1>
                    
                        <div style= {{marginTop:'15%',textAlign:'justify'}}>
                            <p style = {global.gmFont} >{this.props.title[1]}
                            </p> 
                        </div>
                    </Grid>
                   

                                     
                        <Grid item xs = {12} style = {{padding: '0'}} sm = {4} style = {{padding: '0 8% 0 8%',borderRight: '0.01em solid blue',borderLeft: '0.01em solid blue', }}>
                            <h1 style = {global.bSecondaryTitleFont}><strong>{this.props.title[2]}</strong></h1>
                            <div style= {{marginTop:'15%',textAlign:'justify'}}>
                                <p style = {global.gmFont} >{this.props.title[3]}
                                </p>
                            </div>
                        </Grid>
                    <Grid item xs = {12} style = {{padding: '0', textAlign:'center'}} sm = {4} >
                        
                        <Button size="large" style={global.solidButtonStyle}>
                        <PlayCircleFilledWhiteOutlinedIcon style = {{marginRight: '3%'}}/>
                            TOMAR CLASE
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );

    }
        
    

}


export default Classes_Info;