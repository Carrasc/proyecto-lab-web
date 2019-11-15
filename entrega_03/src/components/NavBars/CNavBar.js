import React from 'react';
import PropTypes from 'prop-types';
//import Toolbar from '@material-ui/core/Toolbar';
//import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import './NavStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

import Login from '../LoginPage';
import '../../styles/css/cNavBar.css';
//import global from '../../styles/global';



import globalStyles from  '../../styles/globalStyles';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const navBarStyle ={
  margin: '0 5% 0 5%',
  position:'fixed', 
  top: 0,
  width:'90%', 
  //left: '20%',
  zIndex: '1000',
  //maxWidth:'1500px'
}
const linksStyleLeft ={
  padding: '0 1.5em 0 0',
}
const linksStyleRight ={
  padding: '0 0 0 1.5em',
}
export default function CNavbar(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <React.Fragment className = "cNavBar">
      <HideOnScroll {...props}>
      <nav className="navbar navbar-expand-lg  bg-white" style={navBarStyle}>

          <div className="navbar-brand abs" style={{zIndex: '-1'}}>
              <Link smooth to="/#home">
                <img src={logo} style={{width: '50px', padding: '5px 5px 5px 5px'}} href='#'/>
              </Link>
          </div>

          <button className="navbar-toggler navbar-dark bg-light" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              <span className="navbar-toggler-icon" className="nav-link"></span>
          </button>

          <div className="navbar-collapse collapse" id="collapsingNavbar">
              <ul className="navbar-nav nav_ul">
                  <li className="nav-item" style={linksStyleLeft}>
                    <Link smooth to="/#contenidos" className="nav-link">CONTENIDOS</Link>
                  </li>

                  <li className="nav-item" style={linksStyleLeft}>
                    <Link smooth to="/#precios" className="nav-link">PRECIOS</Link>
                  </li>
              </ul>
              <ul className="navbar-nav ml-auto nav_ul">
                  <li className="nav-item" style={linksStyleRight}>
                      <a className="nav-link" href="" data-target="/#myModal" data-toggle="modal" onClick={() => setModalShow(true)}>INICIAR SESIÓN</a>
                  </li>
              </ul>
          </div>
      </nav>
      </HideOnScroll>
    </React.Fragment>
    <Login
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
    </>
  );
}