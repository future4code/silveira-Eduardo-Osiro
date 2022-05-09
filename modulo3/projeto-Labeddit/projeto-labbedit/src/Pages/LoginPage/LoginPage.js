import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../Routes/Coordinator';
import Logo from '../../Assets/logo.png'
import { LoginScreen, LoginForm } from './styledLoginPage'
import useForm from '../../Hooks/useForm'



function LoginPage() {
  const {form, onChange, cleanFields} = useForm ({email: "", password: ""})

  const navigate = useNavigate();

  return (
    <LoginScreen>
      <img src={Logo} />
      <h2>Login</h2>
      <LoginForm>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder='email'
        />

        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder='password'
        />

        <button>Log In</button>
      </LoginForm>
      <button onClick={() => goToSignUpPage(navigate)}>Sign Up </button>
    </LoginScreen>
  )
}

export default LoginPage