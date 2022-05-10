import React from 'react'
import useForm from '../../Hooks/useForm'
import {DivForm} from './styledLoginPage'


function LoginForm() {
  const {form, onChange, cleanFields} = useForm ({email: "", password: ""})

  const onSubmitForm = (event) => {
      event.preventDefault()
  }

  return (
      <DivForm onSubmit={onSubmitForm} >
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder='email'
          required
        />

        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder='password'
          required
        />

        <button>Log In</button>
      </DivForm>
  )
}

export default LoginForm