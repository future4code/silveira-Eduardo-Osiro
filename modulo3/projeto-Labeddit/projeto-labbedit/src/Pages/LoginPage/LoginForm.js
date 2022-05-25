import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { login } from '../../Services/user'
import {DivForm} from './styledLoginPage'


function LoginForm() {
  const {form, onChange, cleanFields} = useForm ({email: "", password: ""});

  const navigate = useNavigate();

  const onSubmitForm = (event) => {
      event.preventDefault()
      login(form, cleanFields, navigate)
  }

  return (
      <DivForm onSubmit={onSubmitForm} >
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder='email'
          required
          type={"email"}
        />

        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder='password'
          required
          type={"password"}
        />

        <button>Continuar</button>
      </DivForm>
  )
}

export default LoginForm