import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import globalStyles from  "../../styles/globalStyles.js";
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';


class ClassesInfo extends Component {
    render(){
        return(
            <div style = {globalStyles.mainContainer}>
                <Grid container = {true}  direction="row" justify="center" alignItems="center">
                    <Grid item xs = {12} sm = {4} style = {{padding: '0 8% 0 8%'}}>
                        <h1 style = {globalStyles.bSecondaryTitleFont}><strong>{this.props.title[0]}</strong></h1>
                    
                        <div style= {{marginTop:'15%',textAlign:'justify'}}>
                            <p style = {globalStyles.gmFont} >{this.props.title[1]}
                            </p> 
                        </div>
                    </Grid>
                   

                                     
                        <Grid item xs = {12} sm = {4} style = {{padding: '0 8% 0 8%',borderRight: '0.01em solid blue',borderLeft: '0.01em solid blue', }}>
                            <h1 style = {globalStyles.bSecondaryTitleFont}><strong>{this.props.title[2]}</strong></h1>
                            <div style= {{marginTop:'15%',textAlign:'justify'}}>
                                <p style = {globalStyles.gmFont} >{this.props.title[3]}
                                </p>
                            </div>
                        </Grid>
                    <Grid item xs = {12} style = {{padding: '0', textAlign:'center'}} sm = {4} >
                        
                        <Button size="large" style={globalStyles.solidButtonStyle}>
                        <PlayCircleFilledWhiteOutlinedIcon style = {{marginRight: '3%'}}/>
                            TOMAR CLASE
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );

    }
        
    

}


export default ClassesInfo;