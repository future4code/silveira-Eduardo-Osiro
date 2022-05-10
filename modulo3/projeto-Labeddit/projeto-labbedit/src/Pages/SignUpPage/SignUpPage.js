import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import SignUpForm from './SignUpForm';
import { goBack } from '../../Routes/Coordinator';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';
import {SignUpScreen} from './styledSignUpPage'

function SignUpPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  return (
    <SignUpScreen>
      <img src={Logo}/>
      <h2>Cadastro</h2>
        <SignUpForm/>
      <hr/>
      <button onClick={() => goBack(navigate)} >Voltar </button>
    </SignUpScreen>
  )
}

export default SignUpPage