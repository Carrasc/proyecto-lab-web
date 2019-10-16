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
import Header from "./NavBar";
import Footer from "./Footer.js";
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";

//Styles
import '../styles/LogIn.scss';


export default function LoginPage(props) {  
  return (
    <Modal
        dialogClassName="login_modal"
        {...props}
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
        
        <div className="login_content">
            <h4>Log In</h4>
            <div className="login_margin">
                <TextField
                    id="email-input"
                    label="Email"  
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
                    label="Password"  
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
                    LOG IN
                </Button>
            </div>
            <p className="login_margin">
                Need an account? <a>Sign up</a>
            </p>
            <p className="login_margin">
                <a>Forgot your password?</a>
            </p>
            <p className="login_margin"> By logging in, you agree to our
                <span>
                    <a> Privacy Policy </a>
                        and
                        <a> Terms of Service</a>
                    </span>
            </p>
    
            
        </div>
        
        
      </Modal>
  );
}