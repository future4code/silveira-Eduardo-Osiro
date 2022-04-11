import React, { Component } from 'react'
import axios from 'axios'

const headers = {
    headers: {
      Authorization: "eduardo-osiro-silveira"
    }
  }
  
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  

export default class Cadastro extends React.Component {
  
    state = {
        name: '',
        email:''
      }
    
    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handleCreateUser = () => {
        const axiosConfig = {
          headers: {
            Authorization: "eduardo-osiro-silveira"
          }
        }
        const body = {
        "name": this.state.name,
        "email": this.state.email
        }
        axios
        .post(url, body, headers)
        .then((res) => {
        this.setState({
            name: "",
            email: ""
        })
        alert(`Usuário: ${this.body.name} criado com sucesso!`)
    })
        .catch((err) => {
        alert(err.response.data.message)
    })
    }   

      render() {



    return (
      <div>
            <label>Nome</label>
            <input
            placeholder='Nome'
            type="text"
            value={this.state.name}
            onChange={this.handleName}
            ></input>

            <label>E-mail</label>
            <input
            placeholder='Email'
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
            ></input>

            <button onClick={this.handleCreateUser}>Enviar</button>

      </div>
    )
  }
}

