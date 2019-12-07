import React,{useEffect, useState} from 'react';
import Footer from '../components/Footer';

//COMPONENTS
import TopicsNavBar from '../components/NavBars/TopicsNavBar'
import ClassesTopics from '../components/Classes/Classes_Topics'
import Video from '../components/Videos/Video'


//AMPLIFT
import { withAuthenticator } from 'aws-amplify-react';

//STYLES
import globalStyles from  "../styles/globalStyles";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//API
import { API, graphqlOperation } from 'aws-amplify';
import { getCourse as GetCourse } from '../graphql/queries';

//DEPENDENCIES
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';


import Collapse from '@material-ui/core/Collapse';

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

function Topics (props) {
    const [course, setCourse] = useState([])
    const [classes, setClasses] = useState([])


	useEffect(() => {

        async function getCourse(){
            const tempCourse = await API.graphql(graphqlOperation(GetCourse, { id: '022e7867-28e7-4b1f-b916-36b214ba6819' }))
            
            setCourse(tempCourse.data.getCourse)
            console.log(tempCourse)
    
            if (tempCourse.data.getCourse != null){
                setClasses(tempCourse.data.getCourse.classes.items)
                //console.log(tempCourse)
            }
    
        }

		getCourse()
	  }, [props.match.params.idCurso])

	
    
    var size = 3;
    const classes_1 = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const STYLE = {
        backgroundColor: 'rgb(224,224,224, .2)',
        //padding: '5em',
        textAlign: 'center',
        marginTop: '5em'
    }
    const topicStyle = {
        width:'80%',
        margin:'3em 0',
        borderBottom: '1px solid rgba(248, 248, 255, 1)',
    }
    const videoStyle = {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '1.5em', 
        margin: '0 auto',
        width: '80%',
        overflow: "hidden"
    }   
    
    return (
        <div>
            <TopicsNavBar/>
            <div style={videoStyle}>
                <Video thumbnail='https://testmedu.s3.amazonaws.com/2.jpg' source= 'https://testmedu.s3.amazonaws.com/Welcome.mp4'/>
            </div>
            <div style={globalStyles.mainContainer}>
                <div style={STYLE}>
                <div style={topicStyle}></div>
                    <h1 style={globalStyles.gTopic}>TOPICS</h1>
                    
                    <div style={topicStyle}></div>
                    
                    {classes.slice(0,size).map((classes) =>{
                        return(
                            <ClassesTopics classes={classes}/>
                        )
                    })}
                    
    
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {classes.slice(size,classes.length).map((classes) =>{
                            return(
                                <ClassesTopics classes={classes}/>
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

export default withAuthenticator(Topics, 
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