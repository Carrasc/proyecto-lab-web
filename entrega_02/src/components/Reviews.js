import React from 'react';
// import globalStyles from  "../styles/global.js";
import Grid from '@material-ui/core/Grid';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import Fade from 'react-reveal/Fade';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


function Reviews() {

    const style = { 
        //backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,255,1), rgba(32,178,170,0.5))',
         height:'100%',
         'backgroundSize': 'cover',
         color: 'black'
         
    };
    

    var text = {
        textAlign: 'left',
        color: 'blue',
        fontSize:'1.5vw',
        width:'80%',
        margin:'auto',
        marginTop:'1%',
        marginBottom:'5%'
    };

    var h5 ={
        color: 'blue',
        fontSize:'1.5vw',
    }
    var icons = {
        textAlign: 'center',
        color:'blue'
    };
    var title = {
        
        display: 'block',
       ' margin-block-start':' 0.83em',
        'margin-block-end': '0.83em',
        'margin-inline-start': '0px',
        'margin-inline-end':' 0px',
       ' font-weight':' bold'
        
    }

    return (
        <div style ={global.mainContainer}>
            <Fade up delay={100}>
                <Grid container= {true}  justify="center" style ={style}>
                    <Grid className= "internal-grid" container= {true}  justify="center" style ={text}>
                        <Grid item  xs = {12} sm = {4}>
                            <ListItem  className= "internal-grid">
                                <ListItemIcon>
                                    <LibraryBooksOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5 style = {h5}><strong> 300+ lecciones</strong></h5> 
                                    <p className = 'paragraph' style = {{marginTop:'-10px'}}>promedio por clase</p>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item  xs = {12} sm = {4}>
                            <ListItem >
                                <ListItemIcon>
                                    <OndemandVideoOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5  style = {h5}><strong>19+ clases</strong></h5> 
                                    <p className = 'paragraph' style = {{marginTop:'-10px'}}>con los mejores médicos</p>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item  xs = {12} sm = {4}>
                            <ListItem >
                                <ListItemIcon>
                                    <WatchLaterOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5  style = {h5}><strong>10 Minutos</strong></h5> 
                                    <p className = 'paragraph' style = {{marginTop:'-10px'}}>por subtema de lección</p>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid> 
                </Grid>   
            </Fade> 
        </div>

    );

}
export default Reviews;


