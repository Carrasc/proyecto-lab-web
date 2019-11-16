
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalStyles from  '../../styles/globalStyles'
import { Image } from "semantic-ui-react";

import '../../styles/css/Subclass.css';
import 'react-multi-carousel/lib/styles.css';

const cardStyle ={
    margin:'20px',
    //height:'800px'
    boxShadow: 'none',
    backgroundColor: 'transparent'
}

const textDiv = {
    padding:'0 0 0 2em',
    position: 'absolute',
    bottom: '0',
    left: '0',
    textAlign: 'left'
}

const titulo = {
    size: '50px',
    color: 'blue',
    display: 'inline',
    margin: 0,
    padding: 0
}

const especialidad = {
    color: 'gray',
    margin: 0,
    padding: 0
}
const gradiantDiv = {
    position: 'absolute',
    bottom: '12%',
    width:'100%',
    height:'20%',        
    background:'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',  

}

const styles = {
    card: {
      maxWidth: 345
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: "cover"
    },
    actionArea: {
      "&:hover $focusHighlight": {
        opacity: 0
      }
    },
    focusHighlight: {}
  };
 class Subclass extends Component{
     
      render(){
        //console.log("props",this.props.comps);
        return (
            <Card style={cardStyle}>
                <CardActionArea 
                >
                    <CardContent>
                        <Typography gutterBottom variant="p" component="h2">
                            <h1 style={globalStyles.gsFont}>Completadas {this.props.data[0]} de {this.props.data[1]}</h1>
                        </Typography>
                    </CardContent>
                    <CardMedia>
                        <Image
                        className = 'hoverImageSubclass'
                        draggable={false}
                        style={{ width: "100%", height: "500px" }}
                        src={this.props.data[2]} />
                        <div style={gradiantDiv}>

                        </div>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <h1 style={globalStyles.bmFont}>{this.props.data[3]}</h1>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h1 style={globalStyles.gmFont}>{this.props.data[4]}</h1>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
            }
    }

export default Subclass;



/*

//LAST
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalStyles from  '../../styles/global'
import { Image } from "semantic-ui-react";

import 'react-multi-carousel/lib/styles.css';

const cardStyle ={
    margin:'20px',
}

 class Subclass extends Component{
      render(){
        //console.log("props",this.props.comps);
        return (
            <Card style={cardStyle}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="p" component="h2">
                            <h1 style={global.gsFont}>Completadas {this.props.data[0]} de {this.props.data[1]}</h1>
                        </Typography>
                    </CardContent>
                    <CardMedia>
                        <Image
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={this.props.data[2]} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <h1 style={global.bmFont}>{this.props.data[3]}</h1>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h1 style={global.gmFont}>{this.props.data[4]}</h1>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
            }
    }

export default Subclass;
*/



/*
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalStyles from  '../../styles/global'
import { Image } from "semantic-ui-react";

import 'react-multi-carousel/lib/styles.css';



 class Subclass extends Component{
      render(){
        //console.log("props",this.props.comps);
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="p" component="h2">
                            <h1 style={global.gsFont}>Completadas {this.props.data[0]} de {this.props.data[1]}</h1>
                        </Typography>
                    </CardContent>
                    <CardMedia>
                        <Image
                        draggable={false}
                        style={{ width: "90%", height: "100%" }}
                        src={this.props.data[2]} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <h1 style={global.bmFont}>{this.props.data[3]}</h1>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h1 style={global.gmFont}>{this.props.data[4]}</h1>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
            }
    }

export default Subclass;


import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import globalStyles from  '../../styles/global'

import 'react-multi-carousel/lib/styles.css';


const STYLE = {

    textDiv : {
        padding:'0 0 0 2em',
        position: 'absolute',
        bottom: '0',
        left: '0',
        textAlign: 'left'
    },

    titulo : {
        size: '50px',
        color: 'blue',
        display: 'inline',
        margin: 0,
        padding: 0
    },

    especialidad : {
        color: 'gray',
        margin: 0,
        padding: 0
    },
    gradiantDiv : {
        position: 'absolute',
        bottom: '0',
        width:'100%',
        height:'70%',        
        background:'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',  

    },
    st : {
        width: '70%',
        background: 'rgba(255,255,255,0)',
        borderStyle: 'none',
        
    }
}

 class Subclass extends Component{

        constructor (props){
        super(props);
        this.state = {
            blur: "rgba(0, 0, 0, 0)"
        };
        this.overClass = this.overClass.bind(this);
        this.outClass = this.outClass.bind(this);
      }
    
      img = { 
        backgroundImage: `url(${this.props.data[2]})`,
        height:'100%',
        width:'100%',
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        cursor: 'pointer',
        };
    
      
      outClass(e){
        this.setState({
          blur: "rgba(0, 0, 0, 0)"
        });
      }
      overClass(e){
        this.setState({
            blur: "rgba(0, 0, 0, 0.35)"
      });
      }
      render(){
        var blurOverImage = {
            position: 'absolute',
            width:'100%',
            height:'100%',
            backgroundColor: this.state.blur
          } 
        //console.log("props",this.props.comps);
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="p" component="h2">
                            <h1 style={global.gsFont}>Completadas {this.props.data[0]} de {this.props.data[1]}</h1>
                        </Typography>
                    </CardContent>
                    <CardMedia
                    
                    />
                    <div style = {this.img}> 
                    <div style={blurOverImage} onMouseOver={this.overClass.bind(this)} onMouseOut={this.outClass.bind(this)}>
                        <div style={STYLE.gradiantDiv}>
                            <div style={STYLE.textDiv}>
                                <h2 style={STYLE.titulo}>{this.props.data[3]}</h2>
                                <p style={STYLE.especialidad}>{this.props.data[4]}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <h1 style={global.bmFont}>{this.props.data[3]}</h1>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h1 style={global.gmFont}>{this.props.data[4]}</h1>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
            }
    }

export default Subclass;




*/