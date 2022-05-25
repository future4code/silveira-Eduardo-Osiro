import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../Routes/Coordinator';
import Logo from '../../Assets/logo-labenu.png'
import { LoginScreen, SignUpButton, LineDiv } from './styledLoginPage'

import LoginForm from './LoginForm';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';



function LoginPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  return (
    <LoginScreen>
      <img src={Logo} />
      <h2>LabEddit</h2>
      <h5> A rede social da Labenu </h5>
        <LoginForm/>
      <hr/>
      <SignUpButton onClick={() => goToSignUpPage(navigate)}>Cadastrar!</SignUpButton>
    </LoginScreen>
  )
}

export default LoginPage