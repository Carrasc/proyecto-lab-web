import React, { useState, useReducer } from 'react'

import { Auth } from 'aws-amplify';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialFormState = {
  username: '', password: '', email: '', confirmationCode: '', name: ''
}

function reducer(state, action) {
  switch(action.type) {
    case 'updateFormState':
      return {
        ...state, [action.e.target.name]: action.e.target.value
      }
    default:
      return state
  }
}

async function signUp({ username, password, email, name }, updateFormType) {
  try {
    await Auth.signUp({
      username, password, attributes: { email, name }
    })
    //console.log('sign up success!')
    toast.success("Confirme el correo para terminar la creación de la cuenta", {
      position: toast.POSITION.TOP_CENTER, 
      pauseOnHover: false
    });
    updateFormType('confirmSignUp')
  } catch (err) {
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER, 
      pauseOnHover: false
    });
  }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode)
    //console.log('confirm sign up success!')
    toast.success("Exito! Bienvenido a Medu Lectures!", {
      position: toast.POSITION.TOP_CENTER
    });
    updateFormType('signIn')
  } catch (err) {
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER, 
      pauseOnHover: false
    });
  }
}


async function signIn({ username, password }) {
  try {
    await Auth.signIn(username, password)
    //console.log('sign in success!')
    
    // Recarga la pagina si se autentico el usuario
    window.location.reload();

  } catch (err) {
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
      pauseOnHover: false
    });
  }
}

export default function Form() {
  const [formType, updateFormType] = useState('signIn')
  const [formState, updateFormState] = useReducer(reducer, initialFormState)
  function renderForm() {
    switch(formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={e => updateFormState({ type: 'updateFormState', e })}
          />
        )
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={e => updateFormState({ type: 'updateFormState', e })}
          />
        )
      case 'signIn':
        return (
          <SignIn
            signIn={() => signIn(formState)}
            updateFormState={e => updateFormState({ type: 'updateFormState', e })}
          />
        )
      default:
        return null
    }
  }
  

  return (
    <div>
      <div>
        {renderForm(formState)}
      </div>
      {
        formType === 'signUp' && (
          <p style={styles.footer}>
            Already have an account? <span
              style={styles.anchor}
              onClick={() => updateFormType('signIn')}
            >Sign In</span>
          </p>
        )
      }
      {
        formType === 'signIn' && (
          <>
          <p style={styles.footer}>
            Need an account? <span
              style={styles.anchor}
              onClick={() => updateFormType('signUp')}
            >Sign Up</span>
          </p>
          <p style={styles.footer}>
            Olvido su contraseña? <span
              style={styles.anchor}
            >Recuperar</span>
          </p>
          <p style={styles.footer}> Al iniciar sesión, acepta los terminos y condiciones de MeduLectures.</p>
          </>
        )
      }
      <ToastContainer autoClose={5000} />
    </div>
  )
}

function SignUp(props) {
  return (
    <div style={styles.container}>
      
      <input 
        name='username'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
        placeholder='Usuario'
      />
      <input
        type='password'
        name='password'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
        placeholder='Contraseña'
      />
      <input 
        name='email'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
        placeholder='Correo'
      />
      <input 
        name='name'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
        placeholder='Nombre'
      />
      <button onClick={props.signUp} style={styles.button}>
        Sign Up
      </button>
    </div>
  )
}

function SignIn(props) {
  return (
    <div style={styles.container}>
      <input 
        name='username'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
        placeholder='Correo'
      />
      <input
        type='password'
        name='password'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
        placeholder='Contraseña'
      />
      <button style={styles.button} onClick={props.signIn}>
        Sign In
      </button>
    </div>
  )
}

function ConfirmSignUp(props) {
  return (
    <div style={styles.container}>
      <input
        name='confirmationCode'
        placeholder='Confirmation Code'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
      />
      <button onClick={props.confirmSignUp} style={styles.button}>
        Confirm Sign Up
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    //marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1em'
  },
  input: {
    height: 45,
    marginTop: 8,
    width: '90%',
    padding: '0 8px',
    fontSize: 16,
    outline: 'none',
    border: '1.5px solid rgba(0, 0, 0, 0.3)', 
    borderRadius: '.5em',
  },
  button: {
    background: 'linear-gradient(to bottom right, rgba(0,0,255), rgba(32,178,170))',
    color: 'white',
    width: '90%',
    height: 45,
    marginTop: 25,
    fontWeight: '600',
    fontSize: 14,
    cursor: 'pointer',
    border:'none',
    outline: 'none',
    borderRadius: '28px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', 
  },
  footer: {
    fontWeight: '600',
    padding: '0px 25px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  anchor: {
    color: '#006bfc',
    cursor: 'pointer'
  }
}