import React from 'react';
//import PropTypes from 'prop-types';
//import Toolbar from '@material-ui/core/Toolbar';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './NavStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import Login from '../LoginPage';


const navBarStyle ={
  margin: '0 5% 0 5%',
  position:'sticky', 
  top: 0,
  width:'90%', 
  //left: '20%',
  zIndex: '1000',
  //boxShadow: 'none',
}


export default function CNavbar(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white " style={navBarStyle}>

          <div className="navbar-brand abs" style={{zIndex: '-1'}}>
            <Link smooth to="/#home">
                  <img alt='logo' src={logo} style={{width: '50px', padding: '5px 5px 5px 5px'}} href='#'/>
            </Link>
          </div>

          <div className='logoImg'>
              <Link style={{width: '50px', padding: '25px'}} smooth to="/#home"></Link>
          </div>

          <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse text-center" id="collapsingNavbar">
              <ul className="navbar-nav nav_ul">
                  <li className="nav-item linksStyleLeft">
                    <Link smooth to="/#contenidos" className="nav-link">CONTENIDOS</Link>
                  </li>

                  <li className="nav-item linksStyleLeft">
                    <Link smooth to="/#precios" className="nav-link">PRECIOS</Link>
                  </li>
              </ul>
              <ul className="navbar-nav ml-auto nav_ul">
                  <li className="nav-item linksStyleRight">
                      <button className="button_iniciar" data-target="/#myModal" data-toggle="modal" onClick={() => setModalShow(true)}>INICIAR SESIÓN</button>
                  </li>
              </ul>
          </div>
      </nav>

    <Login
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
    </>
  );
}