import React from 'react';
import globalStyles from  "../../styles/globalStyles.js";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import img from '../../images/1.jpg'
import '../../styles/css/UserNavBar.css';

import { selectActiveWord } from '../../store/word/reducer';
import { connect } from 'react-redux';




const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });
const UserNavBar = ({word}) => {
    const classes = useStyles();

    

    const style = { 
        backgroundImage: 'linear-gradient(141deg, #0A14FF 20%, #00FAAA 100%)',
        height:'100%',
        'backgroundSize': 'cover', 
        verticalAlign: 'middle'        
    };

    const main = {
        margin:' 0 5%',
        position: 'relative',
    }

    return (
        <div style = {main} >
            <Grid container= {true} style ={style} alignItems = 'center' justify = 'center'>
                <Grid  item  xs = {12} md={3} >
                    <div className='logoNavBar'>
                        <h1  style = {globalStyles.wMainTitleFont} >MEDU</h1>
                        <p style= {globalStyles.wmFont}>DASHBOARD</p>
                    </div>
                </Grid>
                <Grid item  xs = {12} md={6} >
                    <div  className='nameNavBar'>
                        <h1  style = {globalStyles.wSecondaryTitleFont} >{word}</h1>
                        <a href= '/' style= {globalStyles.wmFont}>Mi cuenta </a>
                        <a href= '/' style= {globalStyles.wmFont}> Cerrar sesión</a>
                    </div>
                </Grid>
                <Grid  item  xs = {12} md={3} >
                    <div className='photoNavBar'>
                        <img style={{width:'100px', height:'100px', borderRadius: '50%'}}src ={img}/>
                    </div>
                </Grid>
                
            </Grid>
                    
               
        </div>

    );

}


const mapStateToProps = state =>{
    return {
        word:selectActiveWord(state)
    }
}
{/*export default UserNavBar;*/}
export default connect(mapStateToProps)(UserNavBar);


