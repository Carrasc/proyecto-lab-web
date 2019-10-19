import React, {Component} from 'react';
import './NavStyle.css';

class CNavbar extends Component {

  render() {
  return (
    <div class="topnav">

      <div class="topnav-centered">
        <a href="#home" class="active">Home</a>
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