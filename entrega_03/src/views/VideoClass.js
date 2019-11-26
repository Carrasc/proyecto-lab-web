import React from 'react';
import Footer from '../components/Footer';
import ClassesInfo from '../components/Classes/Classes_Info';
import globalStyles from  '../styles/globalStyles'
//import Video from '../components/Videos/Video'
//import UserNavBar from '../components/NavBars/User_NavBar';
import Topics from '../components/Classes/Classes_Topics';

import ReactSlickDemo from '../components/Carousels/newCarousel';

import CDashboardNavBar from '../components/NavBars/CDashboardNavBar.js';



import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

import Collapse from '@material-ui/core/Collapse';

import { red } from '@material-ui/core/colors';
import TitleClass from '../components/TitleClass';

import { withAuthenticator } from 'aws-amplify-react';




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


const MyTheme = {

	// Esconder el boton de login con amazon
	oAuthSignInButton: { display: 'none' },

	// El boton principal de sign in y sign up 
	button: {   background: 'linear-gradient(to bottom right, rgba(0,0,255), rgba(32,178,170))',
				borderRadius: '28px',
				color: 'white',
				boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', 
				fontWeight: 'bold',
				textTransform: 'uppercase',
				letterSpacing: '1px',
				outline: 'none',},

	//signInButtonIcon: { display: "none" }, 

	// El contenedor de solo la forma 
	formSection: {background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))', }, 

	// El contenedor globla de la forma 
	formContainer: {backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					position: 'relative', 
					height: '100vh', 
					margin: '0', 
					paddingTop: '5em',
					fontFamily: "Nunito",}, 

	// La separacion entre el login con amazon y el login normal (la quitamos porque no hay login con amazon)
	strike: { display: 'none' },

	a: {color: 'blue'}, 
	sectionHeader: {
					fontWeight: 'bold',
					letterSpacing: '1px',
					outline: 'none',
					fontSize: '20px'},
	

	// Lo que aparece arriba si pones algo mal
	//toast: {backgroundColor: '#e0e0e0', color: 'black'}
  };

export default withAuthenticator(VideoClass, 
	{
	includeGreetings: false, 
	usernameAttributes: 'email', 
	theme: MyTheme,
	signUpConfig: {
			hiddenDefaults: ["phone_number"],
			signUpFields: [
			{ label: "Nombre", key: "name", required: true, type: "string" }
			]
		}
	}
);
