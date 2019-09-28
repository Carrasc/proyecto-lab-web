import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//Styles
import global from "../../styles/global";

//Icons
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



class Classes_Topics extends Component {

    STYLE = {
        backgroundColor: 'rgba(248, 248, 255, 1)',
        //padding: '5em',
        textAlign: 'center'
    }
    topicStyle = {
        width:'80%',
        margin:'3em 0',
        borderBottom: '1px solid gray',
    }
    

    render(){
        return(
            <div style={global.mainContainer}>
                <div style={this.STYLE}>
                    <div>
                        <h1 style={global.gNumberTopic}>TOPICS:</h1>
                    </div>
                    <Grid container = {true} justify = "space-around" direction="row" justify="center" alignItems="center">
                        <div style={this.topicStyle}></div>
                        <Grid item xs = {3} alignItems = "center" direction="row" justify="center" >
                            <h1 style={global.gNumberTopic}>
                                01
                            </h1>
                        </Grid>
                        <Grid item xs = {6}>
                            <div style={{textAlign: 'left', verticalAlign:'center'}}>
                                <h1 style={global.gSecondaryTitleFont}>
                                    Hemisferios Cerebrales
                                </h1>
                                <p style={global.gmFont}>
                                    Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs = {3}>
                            <CheckCircleIcon fontSize="large" htmlColor="blue" />
                        </Grid>
                        <div style={this.topicStyle}></div>
                        <Grid item xs = {3} alignItems = "center" direction="row" justify="center" >
                            <h1 style={global.gNumberTopic}>
                                02
                            </h1>
                        </Grid>
                        <Grid item xs = {6}>
                            <div style={{textAlign: 'left'}}>
                                <h1 style={global.gSecondaryTitleFont}>
                                    Hemisferios Cerebrales
                                </h1>
                                <p style={global.gmFont}>
                                    Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs = {3}>
                            <CheckCircleOutlineIcon fontSize="large" htmlColor="gray"/>
                        </Grid>
                        <div style={this.topicStyle}></div>
                        <Grid item xs = {3} alignItems = "center" direction="row" justify="center" >
                            <h1 style={global.gNumberTopic}>
                                03
                            </h1>
                        </Grid>
                        <Grid item xs = {6}>
                            <div style={{textAlign: 'left'}}>
                                <h1 style={global.gSecondaryTitleFont}>
                                    Hemisferios Cerebrales
                                </h1>
                                <p style={global.gmFont}>
                                    Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs = {3}>
                            <CheckCircleOutlineIcon fontSize="large" htmlColor="gray"/>
                        </Grid>
                        <div style={this.topicStyle}></div>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Classes_Topics;