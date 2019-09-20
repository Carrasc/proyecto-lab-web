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

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../styles/footerStyle.js";

const useStyles = makeStyles(styles);

const style = { 
  width: "40%", 
  height: "40%",
  objectFit: "contain" 
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
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          
            <ListItem className={classes.inlineBlock}>
              <img src={logo} alt= "logo" style = {style}/>
              
            </ListItem>
            <ListItem className={classes.inlineBlock}>
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
           
          </List>
        </div>
        <div className={classes.right}>
          &copy; 2018, Medu S.A de C.V.{" "} 
          <div>
            Lago Victoria #52
          </div> 
          <div>
            Col. Granda, Del. Miguel Hidalgo, C.P. 11520
        
          </div> 
          <div>
            Ciudad de México. México. 
          </div>
          <div>
          contacto@medu.mx
          </div>   
          
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};