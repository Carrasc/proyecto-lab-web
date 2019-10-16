import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Image} from 'semantic-ui-react';
import img from '../images/tendencies.jpg';

import global from '../styles/global';

const useStyles = makeStyles(theme => ({
   
    
    avatar: {
        backgroundColor: red[500],
    },
}));
const cardStyle = {
    backgroundImage: 'linear-gradient(141deg, #0A14FF 20%, #00FAAA 100%)',
    borderRadius: '3em',
    padding: '10%',
}

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card} style={cardStyle}>
            <CardHeader
                avatar={
                    <Avatar >
                        <Image src={img} ></Image>                    
                    </Avatar>
                }
                style = {global.wmFont}
                title="Jessica Ramirez"
                subheader="Tijuana, MEX"
            />
            <CardContent>
                <Typography style = {global.wsFont}>
                    EL CURSO DE LA DRA. MARIANA BILBAO ME ENCANTÓ.
            MUY BUENAS CLASES, MUY BUEN CONTENIDO Y, SOBRE
            TODO, UNA DOCTORA LLENA DE ENTUSIASMO Y GANAS DE
            ENSEÑAR. COMPLETAMENTE RECOMENDABLE PARA LOS
            QUE ASPIRAN A LA RESIDENCIA EN PEDIATRÍA.
        </Typography>
            </CardContent>

        </Card>
    );
}