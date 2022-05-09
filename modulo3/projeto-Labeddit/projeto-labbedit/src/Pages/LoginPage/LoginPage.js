import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage} from '../../Routes/Coordinator';



function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder='email'
      />
      <input
        placeholder='password'
      />

      <button>Log In</button>
      <button onClick={() => goToSignUpPage(navigate)}>Sign Up </button>
    </div>
  )
}

export default LoginPage