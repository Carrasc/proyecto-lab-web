import React from 'react';
import global from "../../styles/global.js";
import Grid from '@material-ui/core/Grid';

function UserNavBar() {

    const style = { 
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'100%',
         'backgroundSize': 'cover', 
         verticalAlign: 'middle'        
    };


    return (
        <div style ={global.mainContainer}>
    
            <Grid container= {true} style ={style}>
                <Grid  item md = {2} sm={12} style= {{padding:'5em 3em 5em 3em', textAlign: 'center'}}>
                    <div >
                        <h1  style = {global.wMainTitleFont} >MEDU</h1>
                        <p style= {global.wmFont}>DASHBOARD</p>
                    </div>
                </Grid>
                <Grid item md = {8} sm={12} style= {{padding:'5em 3em 5em 3em', textAlign: 'right', display: 'inline-block'}}>
                    <div style={{width:'70%'}}>
                        <h1  style = {global.wSecondaryTitleFont} >Luis Fernando Carrasco</h1>
                        <p style= {global.wmFont}>Mi cuenta   Cerrar Sesion</p>
                    </div>
                </Grid>
                <Grid style={{padding:'2em 0 2em 0'}}>
                    <div style= {{width: '10em', height: '10em', borderRadius: '50%', backgroundColor: 'gray', textAlign:'center', }}></div>
                </Grid>
                
            </Grid>
                    
               
        </div>

    );

}
export default UserNavBar;


