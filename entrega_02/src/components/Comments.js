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

const useStyles = makeStyles(theme => ({
   
    
    avatar: {
        backgroundColor: red[500],
    },
}));
const cardStyle = {
    backgroundImage: 'linear-gradient(to bottom right, #0A14FF,70%, #00FAAA)',
    borderRadius: '5em',
    //padding: '3%',
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
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar>
                }

                title="Jessica Ramirez"
                subheader="Tijuana, MEX"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
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