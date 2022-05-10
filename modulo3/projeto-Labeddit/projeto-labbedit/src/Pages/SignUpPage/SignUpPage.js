import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import SignUpForm from './SignUpForm';
import { goBack } from '../../Routes/Coordinator';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';

function SignUpPage() {
  useUnprotectedPage();

  const navigate = useNavigate();


  return (
    <div>
      <img src={Logo}/>
      <h2>Cadastro</h2>
        <SignUpForm/>
      <hr/>
      <button onClick={() => goBack(navigate)} >Voltar </button>
    </div>
  )
}

export default SignUpPage