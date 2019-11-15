import React from 'react';
// import globalStyles from  "../styles/global.js";
import Grid from '@material-ui/core/Grid';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import Fade from 'react-reveal/Fade';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



function Reviews() {

    const style = { 
         height:'100%',
         //backgroundColor: '#ededed',
         margin:'0 5% 5% 5%',
         width: '90%'

    };
    

    var text = {
        color: 'blue',

    };

    var h5 ={
        color: 'blue',
        fontSize:'24px',
    }
    var icons = {
        textAlign: 'center',
        color:'blue'
    };


    return (
        <div style ={global.mainContainer}>
                <Grid container= {true}  justify="center" style ={style}>
                    <Grid className= "internal-grid" container= {true}  justify="center" style ={text}>

                        <Fade bottom delay={100}>
                        <Grid style={{padding: "0 3em"}}>
                            <ListItem  className= "internal-grid">
                                <ListItemIcon>
                                    <LibraryBooksOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5 style = {h5}><strong> 300+ lecciones</strong></h5> 
                                    <p className = 'paragraph' style = {{marginTop:'-10px'}}>promedio por clase</p>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                        </Fade> 

                        <Fade bottom delay={400}>
                        <Grid style={{padding: "0 3em"}}>
                            <ListItem >
                                <ListItemIcon>
                                    <OndemandVideoOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5  style = {h5}><strong>19+ clases</strong></h5> 
                                    <p className = 'paragraph' style = {{marginTop:'-10px'}}>con los mejores médicos</p>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                        </Fade>

                        <Fade bottom delay={700}>
                        <Grid style={{padding: "0 3em"}}>
                            <ListItem >
                                <ListItemIcon>
                                    <WatchLaterOutlinedIcon style = {icons} fontSize="large"/>
                                </ListItemIcon>
                                <ListItemText style ={text}><br/><h5  style = {h5}><strong>10 Minutos</strong></h5> 
                                    <p className = 'paragraph' style = {{marginTop:'-10px'}}>por subtema de lección</p>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                        </Fade>

                    </Grid> 
                </Grid>   
        </div>

    );

}
export default Reviews;


