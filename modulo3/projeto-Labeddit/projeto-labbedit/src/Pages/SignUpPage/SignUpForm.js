import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { signUp } from '../../Services/user'
import {DivForm} from './styledSignUpPage'



function SignUpForm() {
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, cleanFields, navigate)
    }

    return (
        <DivForm onSubmit={onSubmitForm} >

            <input
                name="username"
                value={form.username}
                onChange={onChange}
                placeholder='username'
                required
            />

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


            <button>Cadastrar!</button>
        </DivForm>
    )
}

export default SignUpForm