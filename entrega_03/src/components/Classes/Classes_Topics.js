import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//Styles
import globalStyles from  "../../styles/globalStyles";

//Icons
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
            <Grid container = {true}  direction="row" justify="center" alignItems="center">
                <Grid item xs = {3} >
                    <h1 style={globalStyles.gNumberTopic}>
                        {this.props.classes.numClass}
                    </h1>
                </Grid>
                <Grid item xs = {6}>
                    <div style={{textAlign: 'left', verticalAlign:'center'}}>
                        <h1 style={globalStyles.gSecondaryTitleFont}>
                            {this.props.classes.title}
                        </h1>
                        <p style={globalStyles.gmFont}>
                            {this.props.classes.tags}
                        </p>
                    </div>
                </Grid>
                <Grid item xs = {3}>
                    <CheckCircleIcon fontSize="large" htmlColor="blue" />
                </Grid>
                <div style={this.topicStyle}></div>
            </Grid>
                        
        );
    }
}

export default Classes_Topics;