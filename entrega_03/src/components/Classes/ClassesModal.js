import React, { Component } from "react";

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


//Styles
import '../../styles/LogIn.scss';
import '../../styles/Classes.scss';
import globalStyles from '../../styles/globalStyles';

const sources = [
    'http://media.w3.org/2010/05/sintel/trailer.mp4'
];

const thumbnail = [
'https://ak1.picdn.net/shutterstock/videos/3374171/thumb/1.jpg'
];

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

function ClassesModal(props){
    return (
        <Modal
            dialogClassName="classes_modal"
            {...props}
            centered
            aria-labelledby="classes_modal"
        >

            <div className="classes-content" >
                <div className="classes-above">
                  <Video source={sources[0]} thumbnail = {thumbnail[0]}></Video>
                    
                </div>
                <div>
                    <div >
                        <p>
                            The good news is that asynchronous JavaScript is a lot easier than it used to be. Before ES6, we were dependent on callback functions. If multiple callbacks were necessary (and they often were).
                        </p>
                    </div>
                    <div>
                        <div >
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
                        </div>
                        <div className="classes-btn">
                            <Button variant="contained" style={globalStyles.gradientButtonStyle}>
                                TOMAR CLASE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    );
}
export default ClassesModal;