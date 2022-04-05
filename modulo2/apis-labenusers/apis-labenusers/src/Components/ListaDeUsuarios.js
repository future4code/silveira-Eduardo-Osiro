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
       name: ''
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
   

  render() {

    const componentelistaNomes = this.state.userList.map((userList) =>{
        return ( <li>{userList.name}</li>)
      })

    return (
      <div>
           <h1>Lista de Usuário</h1>
           
           
            <ul>{componentelistaNomes}</ul>
           
          

      </div>
    )
  }
}

