/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../logos/LogoMedu1.png';
import Grid from '@material-ui/core/Grid';
import global from "../styles/global.js";


import styles from "../styles/footerStyle.js";

const useStyles = makeStyles(styles);

const style = { 
  width: "80%", 
  height: "80%",
  objectFit: "contain" 
  };

const text = { 
	fontSize:"14px"
};

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
	
    <footer className={footerClasses}>
		<hr/>
     <Grid container = {true} style={global.footerContainer} >
	
		<Grid item xs = {12} sm = {3}>
			<div >
				<img src={logo} alt= "logo" style = {style}/>
			</div>
		</Grid>
		<Grid item xs = {12} sm = {4} >
			<div style = {text}>
				<ListItem className={classes.inlineBlock} >
				<a
					href="https://www.creative-tim.com/?ref=mkr-footer"
					className={classes.block}
					target="_blank"
					>
					CONTÁCTANOS
				</a>
				<a
					href="https://www.creative-tim.com/presentation?ref=mkr-footer"
					className={classes.block}
					target="_blank"
				>
					TÉRMINOS Y CONDICIONES
				</a>
				<a
					href="http://blog.creative-tim.com/?ref=mkr-footer"
					className={classes.block}
					target="_blank"
				>
					AVISO DE PRIVACIDAD
				</a>
				</ListItem>
			</div>
		</Grid>
		<Grid xs = {12} sm = {5}item >
			<div style={{textAlign:"justify"}}>
			&copy; 2018, Medu S.A de C.V.{" "} 
				<br/>
				Lago Victoria #52
			
				<br/>
				Col. Granda, Del. Miguel Hidalgo, C.P. 11520
			
				<br/>
				Ciudad de México. México. 
				<br/>
			contacto@medu.mx
			
			
			</div>
		</Grid>
     </Grid>

    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};