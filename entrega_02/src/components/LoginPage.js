import React from "react";
//Bootstrap components
import Modal from 'react-bootstrap/Modal'
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from '@material-ui/icons/Lock';

// core components
import Footer from "./Footer.js";
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Logo from '../logos/Logo2.png'

//Styles
//import '../styles/LogIn.scss';

const imageStyle = {
  position: "absolute",
  left: "50%",
  top: "10%",
  width: "45px",
  height: "45px"
};


export default function LoginPage(props) {  
  return (
    <Modal
        dialogClassName="login_modal"
        {...props}
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
        
        <div className="login_content">
            <div className="login_margin">
              <img src={Logo}></img>
            </div>
            <h2>Iniciar Sesión</h2>
            <div className="login_margin">
                <TextField
                    id="email-input"
                    label="Correo"  
                    type="email"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    fullWidth

                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                />
            </div>
            <div className="login_margin">
                <TextField
                    id="password-input"
                    label="Contraseña"  
                    type="password"
                    name="password"
                    autoComplete="password"
                    variant="outlined"
                    fullWidth

                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                />
            </div>
            <div className="login_margin">
                <Button variant="contained" color="primary" fullWidth size="large">
                  Iniciar Sesión
                </Button>
            </div>
            <p className="login_margin">
                ¿No tienes una cuenta Medu? <a>Registrar</a>
            </p>
            <p className="login_margin">
                <a>¿Olvidaste la contraseña?</a>
            </p>
            <p className="login_margin">   
                <a>Aviso de privacidad</a>    
            </p>
            <p className="login_margin">     
                <a>Términos y Condiciones</a>    
            </p>  
        </div>
        
        
      </Modal>
  );
}