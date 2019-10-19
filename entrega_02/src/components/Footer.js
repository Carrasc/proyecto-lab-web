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
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { spacing } from '@material-ui/system';
import '../styles/footerStyle.css'



import styles from "../styles/footerStyle.js";

const useStyles = makeStyles(styles);

const style = { 
  width: "60%", 
  height: "60%",
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
	
    <footer style={global.footerContainer}>
     <hr />
	 <Grid
		container
		direction="row"
		justify="flex-start"
		alignItems="center"
		spacing={1}
		style={global.footerContainer} >
	 
		<Grid item xs = {10} sm = {3}  >
			<div className= 'textFooter'>
				<img src={logo} alt= "logo" style = {style}/>
			</div>
		</Grid>
		<Grid item xs = {10} sm = {3}  >
			<div className= 'textFooter' style ={global.gmFont}>
				<a href="/" target="_blank">
					<strong>CONTÁCTANOS</strong>
				</a>
				<br/>
				<br/>
				<a href="/" target="_blank">
					<strong>TÉRMINOS Y CONDICIONES</strong>
				</a>
				<br/>
				<br/>
				<br/>
				<br/>
				<a href="/twitter" target="_blank">< TwitterIcon /></a>	
				<a href="/twitter" target="_blank"><FacebookIcon/></a>
				<a href="/twitter" target="_blank"><YouTubeIcon/></a>
				<a href="/twitter" target="_blank"><InstagramIcon/></a>	
				
			</div>
		</Grid>
		<Grid xs = {10} sm = {5} item style ={global.gmFont} >
			<div className= 'textFooter' >
			&copy; <strong>2018, Medu S.A de C.V.</strong>{" "} 
				<br/>
				<br/>
				<strong>Lago Victoria #52</strong>
			
				<br/>
				<strong>Col. Granda, Del. Miguel Hidalgo, C.P. 11520</strong>
			
				<br/>
				<strong>Ciudad de México. México. </strong>
				<br/>
				<br/>
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