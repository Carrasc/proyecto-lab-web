import React from 'react';
import global from "../styles/global.js";
import Grid from '@material-ui/core/Grid';

function User_NavBar() {

    const style = { 
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'100%',
         'backgroundSize': 'cover', 
         verticalAlign: 'middle'        
    };


    return (
        <div style ={global.mainContainer}>
    
            <Grid container= {true}  justify="space-around" style ={style}>
                <Grid  itesm md = {2} style= {{padding:'5em 3em 5em 3em', textAlign: 'center'}}>
                    <div style = {{display: 'inline-block'}}>
                        <h1  style = {global.wMainTitleFont} >MEDU</h1>
                        <p style= {global.wmFont}>DASHBOARD</p>
                    </div>
                </Grid>
                <Grid itesm md = {4} style= {{padding:'5em 3em 5em 3em', textAlign: 'right'}}>
                    <div style = {{display: 'inline-block',}}>
                        <h1  style = {global.wSecondaryTitleFont} >Luis Fernando Carrasco</h1>
                        <p style= {global.wmFont}>Mi cuenta   Cerrar Sesion</p>
                    </div>
                </Grid>
                <Grid tesm md = {1} style= {{paddingTop:'3em', textAlign:'center'}}>
                    <div style= {{width: '5em', height: '5em', borderRadius: '50%', backgroundColor: 'gray', textAlign:'center'}}></div>
    
                </Grid>
                <Grid itesm md = {1} style= {{padding:'5em 3em 5em 3em', textAlign:'center'}}>
                    <div  style = {{display: 'inline-block'}}>
                        <p style= {global.wMainTitleFont}>99</p>  
                        <p style= {global.wmFont}>PERCENTIL</p>  
                    </div> 
                </Grid>
                
            </Grid>
                    
               
        </div>

    );

}
export default User_NavBar;


