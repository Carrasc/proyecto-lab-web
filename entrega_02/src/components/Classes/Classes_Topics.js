import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Styles
import global from "../../styles/global";

class Classes_Topics extends Component {

    STYLE = {
        backgroundColor: 'rgba(248, 248, 255, 1)',
        padding: '1em',
        textAlign: 'center'
    }
    topicStyle = {
        width:'100%',
        borderBottom: '1px solid gray',
    }

    render(){
        return(
            <div style={global.mainContainer}>
                <div style={this.STYLE}>
                    <Grid container = {true} justify = "space-around" direction="row" justify="center" alignItems="center">
                        <div style={this.topicStyle}></div>
                        <Grid item xs = {3} justify = "center" direction="row" justify="center" >
                            <h1>
                                01
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
                            <h1>
                                %
                            </h1>
                        </Grid>
                        <div style={this.topicStyle}></div>
                        <Grid item xs = {3} justify = "center" direction="row" justify="center" >
                            <h1>
                                01
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
                            <h1>
                                %
                            </h1>
                        </Grid>
                        <div style={this.topicStyle}></div>
                        <Grid item xs = {3} justify = "center" direction="row" justify="center" >
                            <h1>
                                01
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
                            <h1>
                                %
                            </h1>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Classes_Topics;