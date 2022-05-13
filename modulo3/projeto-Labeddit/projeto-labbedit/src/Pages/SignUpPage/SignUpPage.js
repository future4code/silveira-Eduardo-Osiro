import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Assets/logo-labenu.png'
import SignUpForm from './SignUpForm';
import { goBack } from '../../Routes/Coordinator';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';
import {SignUpScreen, BackButton} from './styledSignUpPage'

function SignUpPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  return (
    <SignUpScreen>
      <img src={Logo}/>
      <h2>Cadastro</h2>
        <SignUpForm/>
      <hr/>
      <BackButton onClick={() => goBack(navigate)} >Voltar </BackButton>
    </SignUpScreen>
  )
}

export default SignUpPage