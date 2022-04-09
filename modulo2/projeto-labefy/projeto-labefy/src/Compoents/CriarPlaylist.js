import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerCriarPlaylist = styled.div`
    background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100vw;
    height:100vh;
`

const AreaCriarPlaylist = styled.div`
    background-image: linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    padding: 10px 10px;
    height: 50vh;
    width: 40vw;
`

const InputButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
        button {
            border-radius: 10px;
            :hover {
                background-color: black;
                color: white
            }
        }
`


const headers ={
    headers: {
        Authorization: 'eduardo-osiro-silveira'
    }
}


export default class CriarPlaylist extends React.Component {

    state = {
        playListName: ''
    }

    handlePlaylistName = (event) => {
        this.setState({ playListName: event.target.value})
    }

    createPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = 
        {
            "name": this.state.playListName
        }

        axios.post (url, body, headers)
        .then((res) => {
            alert(`Playlist ${body.name} foi criada!`)
            this.setState({
                playListName: ''
            })
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

  render() {

    return (

      <ContainerCriarPlaylist>
          <AreaCriarPlaylist>
            <h1>(☞ﾟヮﾟ)☞ Bem Vindo a Labefy! 🎶</h1>
            <h1>Crie uma Playlist</h1>
                        
            <InputButton>
                <input value={this.state.playListName} onChange={this.handlePlaylistName} placeholder='Escreva aqui :D'></input>
              
                <button onClick={this.createPlaylist} >Criar!</button>
              
                <button onClick={this.props.paginaListaPlaylist}>Listas das Playlists!</button>
            </InputButton>

          
          </AreaCriarPlaylist>
          

      </ContainerCriarPlaylist>
    )
  }
}
