import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import global from '../../styles/global'

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
            </Card>
        );
            }
    }

export default Subclass;
