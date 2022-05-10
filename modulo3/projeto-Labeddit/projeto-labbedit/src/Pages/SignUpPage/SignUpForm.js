import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { signUp } from '../../Services/user'



function SignUpForm() {
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, cleanFields, navigate)
    }

    return (
        <form onSubmit={onSubmitForm} >

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
            />

            <input
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder='password'
                required
            />


            <button>Cadastrar!</button>
        </form>
    )
}

export default SignUpForm