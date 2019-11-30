import React from "react";
import Grid from '@material-ui/core/Grid';

//Bootstrap components
import Modal from 'react-bootstrap/Modal'
//Material UI components
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
//Media
import Video from '../Videos/Video';
//App components
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';


//Styles
import '../../styles/LogIn.scss';
import '../../styles/Classes.scss';
import globalStyles from '../../styles/globalStyles';


var icons = {
    textAlign: 'center',
    color:'blue'
};

var text = {
    color: 'blue',
    textAlign: 'center',

};

var h5 ={
    color: 'blue',
    fontSize:'20px',
    textAlign:'center',
}

const video = {
    position: "relative",
    //paddingTop: "56.25%", /* Player ratio: 100 / (1280 / 720) */
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '1.5em', 
    overflow: "hidden"
   
}

function ClassesModal(props){
    const url = '/cursos/'+ props.id;
    return (
        <Modal
            dialogClassName="classes_modal"
            {...props}
            centered
            aria-labelledby="classes_modal"
        >

            <div className="classes-content" >
                <Grid container spacing={3} className="classes-below">
                
                    <Grid item xs={12}>
                        <div style={video}>
                            <Video source={'http://media.w3.org/2010/05/sintel/trailer_hd.mp4'} thumbnail={'https://ak1.picdn.net/shutterstock/videos/3374171/thumb/1.jpg'}></Video>
                        </div>
                    
                    </Grid>
                    <Grid item xs={12} sm={6} className="classes-txt">

                        <p>
                            The good news is that asynchronous JavaScript is a lot easier than it used to be. Before ES6, we were dependent on callback functions. If multiple callbacks were necessary (and they often were).
                        </p>
                          
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12}>
                            <ListItem  className= "internal-grid">
                                <ListItemIcon>
                                    <LibraryBooksOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5 style = {h5}><strong> 19+ clases</strong></h5></ListItemText>
                            </ListItem>
                            <ListItem  className= "internal-grid">
                                <ListItemIcon>
                                    <LibraryBooksOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5 style = {h5}><strong> 300+ lecciones</strong></h5></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} className="classes-btn" >
                            <Button variant="contained" style={globalStyles.gradientButtonStyle}>

                                <Link to={url} className="nav-link">TOMAR CLASE</Link>
                            </Button> 
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </Modal>
    );
}
export default ClassesModal;