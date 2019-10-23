import React, {Component} from 'react';
import './NavStyle.css';
import logo from '../../images/logo.png';

class CNavbar extends Component {

  render() {
  return (
    <div class="topnav">

      <div class="topnav-centered">
        <img src={logo} style={{width:'40px', height:'40px', position:'absolute', top: '50%', right:'50%', transform: 'translate(-50%, -50%)'}}></img>
      </div>

      <a href="#news">News</a>
      <a href="#contact">Contact</a>

      <div class="topnav-right">
        <a href="#search">Search</a>
        <a href="#about">About</a>
      </div>

    </div>
  );
}
}

export default CNavbar;