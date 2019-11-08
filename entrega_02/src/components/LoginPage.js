import React, { Component, useRef} from 'react';


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
import Logo from '../logos/Logo2.png'

//Styles
import '../styles/LogIn.scss';


import Form from '../components/form/form'

class LoginPage extends Component
{  
  constructor(props,{updateWord}){
    super(props,{updateWord});
    this.state= {
      idUser:""
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }

  getUserInfo(e){      
    console.log(this.state.idUser);
    //updateWord(this.state.idUser)
  }

  handleTextFieldChange(e){
    this.setState({
      idUser: e.target.value  
    });
    //console.log(this.state)
  }

  render(){
    return (
      <Modal
          dialogClassName="login_modal"
          {...this.props}
          centered
          aria-labelledby="login_modal"
      >
          
          <div className="login_content">
              <div className="login_margin">
                <img alt = '' src={Logo}></img>
              </div>
              <h2>Iniciar Sesión</h2>
              <div className="login_margin">
                <Form></Form>
                  {/*<TextField
                      id="email-input"
                      label="Correo"  
                      type="email"
                      name="email"
                      autoComplete="email"
                      variant="outlined"
                      onChange={this.handleTextFieldChange}
                      fullWidth
                      InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          ),
                        }}
                        
                      />*/}
              </div>
              {/*
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
                      </div>*/}
              
              <p className="login_margin">
                  ¿No tienes una cuenta Medu? <a href='/'>Registrar</a>
              </p>
              <p className="login_margin">
                  <a href='/'>¿Olvidaste la contraseña?</a>
              </p>
              <p className="login_margin">   
                  <a href='/'>Aviso de privacidad</a>    
              </p>
              <p className="login_margin">     
                  <a href='/'>Términos y Condiciones</a>    
              </p>  
          </div>  
        </Modal>
    );
  }
}


export default LoginPage