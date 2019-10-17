import React from 'react';
import '../../styles/NavBar.scss';
import Logo from '../../logos/Logo2.png'
import global from '../../styles/global';
import { HashLink as Link } from 'react-router-hash-link';
import Login from '../LoginPage';


function NavBar() {
  const [modalShow, setModalShow] = React.useState(false);

  const imageStyle = {
    position: "absolute",
    left: "50%",
    top: "10%",
    width: "45px",
    height: "45px"
  };

  return (
    <>
      <div style={{ padding: '0 0 0 5em' }} className="container">
        <header  >
          <nav id="navbar">
            <ul style={{ fontSize: '0.7em'}}>
              <img src={Logo} style={imageStyle}></img>
              <div>
                <li>
                  <Link smooth to="/#contenidos">Contenidos</Link>
                </li>

                <li>
                  <a href="#">Funciones</a>
                </li>

                <li>
                  <a href="#">Precios</a>
                </li>
                <li style={{ float: 'right', padding: '0 5em 0 0' }}>
                  <a href="#" onClick={() => setModalShow(true)}>Iniciar Sesión</a>
                </li>
                <li style={{ float: 'right',}}>
                  <a href="#">Registrar</a>
                </li>
              </div>
            </ul>
          </nav>
        </header>
      </div>

      <Login
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
    </>

  );

}
export default NavBar;


