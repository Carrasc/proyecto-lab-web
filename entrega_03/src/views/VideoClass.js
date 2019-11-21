import React from 'react';
import Footer from '../components/Footer';
import ClassesInfo from '../components/Classes/Classes_Info';
import globalStyles from  '../styles/globalStyles'
import Video from '../components/Videos/Video'
import UserNavBar from '../components/NavBars/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';
import Grid from '@material-ui/core/Grid';
import Subclass from '../components/Classes/Subclass';
import Carousel from '../components/Carousels/Carousel';
import ReactSlickDemo from '../components/Carousels/newCarousel';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Sticky from 'react-sticky-el';
import CDashboardNavBar from '../components/NavBars/CDashboardNavBar.js';



import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { red } from '@material-ui/core/colors';
import TitleClass from '../components/TitleClass';


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
        color: '#4169E1',
        marginTop: '-50px',
        backgroundColor: 'transparent' ,
      outline: 'none',
      borderStyle:'none',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      '&:focus':{
        outline: 'none',
    }
    },
    expandOpen: {
        backgroundColor: 'transparent' ,
        marginTop: '-50px',
        color: '#4169E1',
      outline: 'none',
      borderStyle:'none',
      transform: 'rotate(180deg)',
      '&:focus':{
          outline: 'none',
      }
    },
    avatar: {
      backgroundColor: red[500],
    },
  }))


const titles = ['LUIS FERNANDO CARRASCO', 'El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. ', '327 LECCIONES', 'El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema. El curso de Neurología se divide en cuarenta y cinco clases generales que abordan cada una de las subespecialidades del tema.'
]
const classes = [
    ['01','Hemisferios Cerebrales','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['02', 'Núcles grises de la base','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['03', 'Nervios craneales y espinales','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['04','Hemisferios Cerebrales','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['05', 'Núcles grises de la base','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.'],
    ['06', 'Nervios craneales y espinales','Lóbulo frontal, Lóbulo parietal, Lóbulo temporal, Lóbulo occipital, .Ínsula.']

]
const data = [
    ['57', '147', require("../images/7.jpg"), 'BASES NEUROANATOMICAS', 'DEL SISTEMA NERVIOSO'],
    ['13', '153', require("../images/3.jpg"), 'LÓBULOS NEUROENCEFALÓGICOS', 'DEL SISTEMA NERVIOSO'],
    ['0', '80', require("../images/7.jpg"), 'ESTOY MAMADÍSIMO', 'DEL SISTEMA NERVIOSO'],
    ['57', '147', require("../images/4.jpg"), 'BASES NEUROANATOMICAS', 'DEL SISTEMA NERVIOSO'],

  ]


function VideoClass () {
    var size = 3;
    const classes_1 = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    const STYLE = {
        backgroundColor: 'rgba(248, 248, 255, 1)',
        //padding: '5em',
        textAlign: 'center',
        marginTop: '5em'
    }
    const topicStyle = {
        width:'80%',
        margin:'3em 0',
        borderBottom: '1px solid rgba(248, 248, 255, 1)',
    }
    
        return (

            <div>
                {/*<UserNavBar/>*/}

                

                <TitleClass class={'Neurología'} teacher={'LUIS FERNANDO CARRASCO'}></TitleClass>
                <CDashboardNavBar/>
               
               {/*
                <Grid container={true} justify="center" >
                    <Grid xs= {10} item style ={globalStyles.mainContainer}>
                        <Video source={'http://media.w3.org/2010/05/sintel/trailer_hd.mp4'} thumbnail={'https://micarrerauniversitaria.com/wp-content/uploads/2018/03/neurologia-2-1024x516.jpg'}></Video>
                    </Grid>
                </Grid>
               */}

                <ClassesInfo title={titles} />



                <div style={globalStyles.mainContainer}>
                    <div style={STYLE}>
                    <div style={topicStyle}></div>
                        <h1 style={globalStyles.gTopic}>TOPICS</h1>
                        
                        <div style={topicStyle}></div>
                        
                        {classes.slice(0,size).map((classes) =>{
                            return(
                                <Topics classes={classes}/>
                            )
                        })}
                       
     
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {classes.slice(size,classes.length).map((classes) =>{
                                return(
                                    <Topics classes={classes}/>
                                )
                            })}
                        </Collapse>
                        <IconButton
                            className={clsx(classes_1.expand, {
                                [classes_1.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </div>
                </div>
                <ReactSlickDemo/>
                <Footer />
                
            </div>
        )

}


export default VideoClass;