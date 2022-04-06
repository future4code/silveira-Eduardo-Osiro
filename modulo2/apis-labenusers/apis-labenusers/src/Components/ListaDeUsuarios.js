import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";



const headers = {
    headers: {
      Authorization: "eduardo-osiro-silveira"
    }
  };



export default class ListaDeUsuarios extends Component {

  state = {
       userList: [],
       name: '',
       userId: ''
   }

  componentDidMount() {
       this.getAllUsers()
   }
    
  getAllUsers =() => {
    axios
      .get(urlAllUsers, headers)
      .then((res) => {
        this.setState({ userList: res.data });
      })
      .catch((err) => {
        alert("Usuário não existe, tente novamente");
      });
    }

  deleteUser = (user) => {

    const urlId = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`

    if (window.confirm("Tem certeza de que deseja deletar?")) {
          axios
          .delete(urlId, headers)
          .then((res) => {
              this.getAllUsers()
              alert(`O usuário ${user.name} foi deletado.`)
          })
          .catch((err) => {   
              alert(err.response)
          })
      } else {
          alert('Usuário não deletado.')
      }

  }

  render() {

    const componentelistaNomes = this.state.userList.map((userList) =>{
        return ( 
          <li>{userList.name} <button onClick={() => this.deleteUser(userList)}>X</button></li>
          
        )
      })

    return (
      <div>
           <h1>Lista de Usuário</h1>
           
           
            <ul>{componentelistaNomes}</ul>
           
          

      </div>
    )
  }
}

