import React, { Component } from 'react'
import axios from 'axios'
import CriarPlaylist from './Compoents/CriarPlaylist'
import DetalhesPlaylist from './Compoents/DetalhesPlaylist'
import ListaDePlaylist from './Compoents/ListaDePlaylist'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;


export default class App extends React.Component {

    state = {
      page: "AdicionarPlaylist",
      idPlaylist: '',
      namePlaylist: ''
    }

    renderPage = () => {
      switch (this.state.page) {
        case "AdicionarPlaylist":
          return <CriarPlaylist paginaListaPlaylist={this.paginaListaPlaylist}/>
        case "ListaPlaylist":
          return <ListaDePlaylist paginaCriarPlaylist={this.paginaCriarPlaylist} paginaDetalhesPlaylist={this.paginaDetalhesPlaylist}/>
        case "DetalhePlaylist":
          return <DetalhesPlaylist 
              paginaCriarPlaylist={this.paginaCriarPlaylist}
              paginaListaPlaylist={this.paginaListaPlaylist}
              idPlaylist={this.state.idPlaylist}
              namePlaylist={this.state.namePlaylist}
              />

      }
    }

  paginaDetalhesPlaylist = (id, name) => {
    this.setState({
      page: 'DetalhePlaylist',
      idPlaylist: id,
      namePlaylist: name
    })
  }

  paginaCriarPlaylist = () =>{
    this.setState({
      page: 'AdicionarPlaylist'
    })
  }

  paginaListaPlaylist = () =>{
    this.setState({
      page: 'ListaPlaylist'
    })
  }



  render() {
    
    return (
      
        <div>
          {this.renderPage()}

        </div>
      
    )
  }
}
