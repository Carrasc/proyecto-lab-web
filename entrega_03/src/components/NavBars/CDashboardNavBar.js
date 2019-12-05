import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
//import Dropdown from 'react-bootstrap/Dropdown'
//import DropdownButton from 'react-bootstrap/DropdownButton'

import MDashboardNavBar from './MDashboardNavBar';

import './NavStyle.scss';
//import globalStyles from  '../../styles/globalStyles';

const barStyle={
    margin: '0 5% 0 5%',
    height:'3em',
    zIndex: '1000',
    position: 'sticky', 
    top: 0
  }

  const linksStyleRight ={
    padding: '0 0 0 1.5em',
  }
  

export default function CNavbar(props) {
  
  return (
        <nav className="navbar navbar-expand-lg bg-light" style={barStyle}>
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>

                <a className="navbar-brand logoLetras" href="/">
                    MEDU LECTURES
                </a>
                <div className="w-100 text-right">
                    <button className="navbar-toggler navbar-dark bg-primary" type="button" data-toggle="collapse" data-target="#myNavbar7">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse text-center" id="myNavbar7">
                <ul className="navbar-nav  ml-auto  nav_ul">
                    <li className="nav-item">
                    	{/*<div className={classes.search}>
							<div className={classes.searchIcon}>
							<SearchIcon />
							</div>
							<InputBase
							placeholder="Buscar"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
							/>
						</div>*/}
                    </li>
					<li className="nav-item" style={linksStyleRight}>
						<MDashboardNavBar/>
					</li>
                    <li className="nav-item" style={linksStyleRight}>
                        <a href="/" className="nav-link" >MIS CLASES</a>
                    </li>
                    <li className="nav-item" style={linksStyleRight}>
                        <a href="/" className="nav-link">MEDU TALKS</a>
                    </li>
                    <li className="nav-item" style={linksStyleRight}>
                        <a href="/" className="nav-link" >ENARM</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}