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
      <div className='body_navbar'>
          <div style={{ padding: '0 0 0 5em' }} className="container">
            <header className='header_navbar' >
              <nav id="navbar">
                <ul className='ul_navbar' style={{ fontSize: '0.7em'}}>
                  <img src={Logo} style={imageStyle}></img>
                  <div>
                    <li className='li_navbar'>
                      <Link className='a_navbar' smooth to="/#contenidos">Contenidos</Link>
                    </li>

                    <li className='li_navbar'>
                      <a className='a_navbar' href="#">Funciones</a>
                    </li>

                    <li className='li_navbar'>
                      <a className='a_navbar' href="#">Precios</a>
                    </li>
                    <li className='li_navbar' style={{ float: 'right', padding: '0 5em 0 0' }}>
                      <a className='a_navbar' href="#" onClick={() => setModalShow(true)}>Iniciar Sesión</a>
                    </li>
                    <li className='li_navbar' style={{ float: 'right',}}>
                      <a className='a_navbar' href="#">Registrar</a>
                    </li>
                  </div>
                </ul>
              </nav>
            </header>
          </div>
        </div>

      <Login
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
    </>

  );

}
export default NavBar;


