import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerListaPlaylist = styled.div`
    background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100vw;
    height:100vh;
`

const AreaListaPlaylist = styled.div`
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

export default class ListaDePlaylsit extends React.Component {

    state ={
        listaPlaylist: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        axios.get (url, {
            headers: {
                Authorization: 'eduardo-osiro-silveira'
            }
        })
        .then((res) => {
            this.setState ({ listaPlaylist: res.data.result.list})
        })
        .catch((err)=> {
            alert("Deu ruim!")
        })
    }
    
    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete (url, {
            headers: {
                Authorization: 'eduardo-osiro-silveira'
            }
        })
        .then((res) => {
            alert('Playlist excluída!')
            this.getAllPlaylists()
        })
        .catch((err) => {
            alert('A playlist não foi excluída!')
        })
    }







  render() {


    const listaDaPlaylist = this.state.listaPlaylist.map((playlist) => {
        return (
            <AreaListaPlaylist key={playlist.id}>
                <p>{playlist.name}</p>
                <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
            </AreaListaPlaylist>
        )
    })






    return (
      <ContainerListaPlaylist>
          
          <AreaListaPlaylist>
          {listaDaPlaylist}

          </AreaListaPlaylist>

      </ContainerListaPlaylist>
    )
  }
}
