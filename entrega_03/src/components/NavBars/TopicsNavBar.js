import React from 'react';

//STYLES
import globalStyles from  '../../styles/globalStyles'
import Grid from '@material-ui/core/Grid';


function TopicsNavBar(props) {
    const barStyle={
        width: '100%',
        height: '100px',
        backgroundColor: 'rgba(200, 200, 200, 1)',
        display: 'table', 
    }
    const barContent = {
        padding: '0 5%',
        textAlign: 'center', 
        verticalAlign: 'middle', 
        display: 'table-cell', 
    }
    return (
        <div style={barStyle}>
            <div style={barContent}>
                <div>
                    <Grid container = {true}  direction="row" justify="center" alignItems="center" >
                        <Grid item xs = {3} alignItems="center" style={{textAlign:'left'}}>
                            <button>Video Anterior</button>
                        </Grid>
                        <Grid item xs = {6}>
                            <div style={{textAlign: 'center', verticalAlign:'center'}}>
                                <h1 style={globalStyles.gSecondaryTitleFont}>
                                    Cerebro: Lobulo Central
                                </h1>
                            </div>
                        </Grid>
                        <Grid item xs = {3} alignItems="center" style={{textAlign:'right'}}>
                            <button>Video Anterior</button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )


}

export default TopicsNavBar;