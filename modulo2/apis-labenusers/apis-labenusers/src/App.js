import React, { Component } from 'react';
import styled from 'styled-components'
import Cadastro from './Components/Cadastro';
import ListaDeUsuarios from './Components/ListaDeUsuarios';



export default class App extends Component {

  state = {
    pagina: "cadastro"
  };

  trocarTela = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "usuário" });
    } else {
      this.setState({ pagina: "cadastro" });
    }
  };


  render() {
    return (
      <div>
        
      <button onClick={this.trocarTela}  > Trocar tela </button>
      {this.state.pagina === "cadastro" ? <Cadastro /> : <ListaDeUsuarios />}

      </div>
    )
  }
}
