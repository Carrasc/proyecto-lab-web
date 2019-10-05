import React, {Component} from 'react';
//import img from '../../images/1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../images/1.jpg'
import global from '../../styles/global'


import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const images = [
    require("../../images/2.jpg"),
    require("../../images/3.jpg"),
    require("../../images/4.jpg"),
    //"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    //"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    //"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  
  ];


 class Subclass extends Component{
      constructor (props){
          super(props);
          console.log(this.props);
          //console.log(this.props.pene);
          console.log("EL CACAS")

         
      }
     card = {
        maxWidth: 345,
        height: '30em'
      }
      render(){
        //console.log("props",this.props.comps);
        return (
            <Card style={this.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h1 style={global.gsFont}>Completadas {this.props.data[0]} de {this.props.data[1]}</h1>
                        </Typography>
                    </CardContent>
                    <CardMedia
                    component="img"
                    height="300"
                    image={this.props.data[2]}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <h1 style={global.bmFont}>{this.props.data[3]}</h1>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h1 style={global.gmFont}>{this.props.data[4]}</h1>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/*
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>*/
                }
            </Card>
        );
            }
    }

export default Subclass;
