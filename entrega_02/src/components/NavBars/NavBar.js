import React from 'react';
import '../../styles/NavBar.scss';
import Logo from '../../logos/Logo2.png'
import global from '../../styles/global';
import { HashLink as Link } from 'react-router-hash-link';


function NavBar() {
  const imageStyle = {
    position: "absolute",
    left: "50%",
    top: "10%",
    width: "45px",
    height: "45px"
  };

  return (

    <div style={{ padding: '0 0 0 5em' }} class="container">
      <header  >
        <nav id="navbar">
          <ul style={{ fontSize: '0.7em'}}>
            <img src={Logo} style={imageStyle}></img>
            <div>
              <li>
                <Link to="/footer">Footer</Link>
              </li>

              <li>
                <a href="#">Funciones</a>
              </li>

              <li>
                <a href="#">Precios</a>
              </li>
              <li style={{ float: 'right', padding: '0 5em 0 0' }}>
                <a href="#">Iniciar Sesión</a>
              </li>
              <li style={{ float: 'right',}}>
                <a href="#">Registrar</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>

  );

}
export default NavBar;


