import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../Routes/Coordinator';
import Logo from '../../Assets/logo.png'
import { LoginScreen } from './styledLoginPage'
import useForm from '../../Hooks/useForm'
import LoginForm from './LoginForm';



function LoginPage() {
  const navigate = useNavigate();

  return (
    <LoginScreen>
      <img src={Logo} />
      <h2>Login</h2>
        <LoginForm/>
      <hr/>
      <button onClick={() => goToSignUpPage(navigate)}>Sign Up </button>
    </LoginScreen>
  )
}

export default LoginPage