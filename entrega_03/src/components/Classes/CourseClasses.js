import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//Styles
import globalStyles from  "../../styles/globalStyles";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    mainDiv: {
        borderRadius: '1em',
        width: '250px', 
        height: '250px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        display: 'table', 
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        cursor: 'pointer',
        margin: '0.5em',
        '&:hover':{
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,255,0.22)',
        }

    },

    textDiv: {
        textAlign: 'center', 
        verticalAlign: 'middle', 
        display: 'table-cell', 
        padding: '0 0.5em'
    }
}))


function CourseClasses(props){

    const card = useStyles();

    return(
    <div className={card.mainDiv}>
        <div className={card.textDiv}>
         <h3 style={{color: 'gray',  fontWeight: 600}}>{props.classes.numClass}</h3>
         <h2 style={{color: 'gray', fontWeight: 200, fontSize: '1.6rem'}}>{props.classes.title}</h2>
         </div>
    </div>
    )

}

export default CourseClasses;