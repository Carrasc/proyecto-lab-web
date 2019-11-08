import React from 'react';
import {Image} from 'semantic-ui-react';
import globalStyles from  "../styles/globalStyles.js";
import Grid from '@material-ui/core/Grid';
import lol from '../images/tendencies.jpg';


function Tendencies() {

    var textDiv = {
        textAlign: 'center',
        
    };

    return (
        <div style ={globalStyles.mainContainer}>
            <Grid item xs = {12} sm = {12}  style = {textDiv}>
                <h1 style={globalStyles.bSecondaryTitleFont}>CURSO COMPLETO ENARM 2019</h1>
                <h3 style={globalStyles.glFont}>Estudiar para el ENARM nunca fue tan fácil</h3>    
                <Image src={lol} style={{width: '100%', height:'auto', padding:'2em 0 0 0'}}></Image>                    
            </Grid>
            
        </div>

    );

}
export default Tendencies;


