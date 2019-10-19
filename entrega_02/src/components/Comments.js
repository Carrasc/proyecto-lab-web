import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
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