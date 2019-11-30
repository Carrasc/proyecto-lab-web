import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import globalStyles from  "../../styles/globalStyles.js";
//import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';


class ClassesInfo extends Component {
    render(){
        return(
            <div style = {globalStyles.mainContainer}>
                <Grid container = {true}  direction="row" justify="center" alignItems="center">
                    <Grid item xs = {12} sm = {6} style = {{padding: '2.5em 5% 2.5em 5%', textAlign: 'center', borderRight: '0.1em solid blue'}} >
                        <h1 style = {globalStyles.bSecondaryTitleFont}><strong>{this.props.title}</strong></h1>
                    
                        <div style= {{marginTop:'5%',textAlign:'justify'}}>
                            <p style = {globalStyles.gmFont} >{this.props.description}
                            </p> 
                        </div>
                    </Grid>
                   

                                     
                    <Grid item xs = {12} sm = {6} style = {{padding: '2.5em 5% 2.5em 5%',textAlign: 'center'}} >
                            <h1 style = {globalStyles.bSecondaryTitleFont}><strong>{this.props.numClasses}</strong></h1>
                            <div style= {{marginTop:'5%',textAlign:'justify'}}>
                                <p style = {globalStyles.gmFont} >{this.props.descCourse}
                                </p>
                            </div>
                        </Grid>

                </Grid>
            </div>
        );

    }
        
    

}


export default ClassesInfo;