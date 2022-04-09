import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MusicasMostradas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const headers = {
  headers: {
      Authorization: 'eduardo-osiro-silveira'
  }
}


export default class DetalhesPlaylist extends React.Component {

  state = {
    tracks: [],
    nomeMusica:'',
    artista:'',
    url: ''
  }

  componentDidMount() {
    this.getPlaylistTracks();
}

  onChangeNomeMusica = (event) => {
    this.setState ({
      nomeMusica: event.target.value
    })
  }

  onChangeArtista = (event) => {
    this.setState ({
      artista: event.target.value
    })
  }

  onChangeUrl = (event) => {
    this.setState ({
      url: event.target.value
    })
  }


  getPlaylistTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`

    axios.get (url, headers)
    .then((res) => {
        this.setState ({ tracks: res.data.result.tracks
        })
    })
    .catch((err) => {
        alert(err)
    })
}

  deleteMusic = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${id}`

    axios.delete (url, headers)
    .then((res) => {
        alert('Playlist excluída!')
        this.getPlaylistTracks()
    })
    .catch((err) => {
        alert('A música não foi excluída!')
    })
}

  adicionarMusica = () => {
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.artista,
      url: this.state.url
    }

    const urlAdd = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`

    axios.post(urlAdd, body, headers)
    .then((res) => {
      this.getPlaylistTracks()
      this.setState({nomeMusica:'', artista: '', url: '' })
      console.log(res.data)
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err.response.data.message)
    })


  }


  render() {

        const playlistDetalhada = this.state.tracks.map((list) => {
        return (
            <MusicasMostradas key={list.id}>
            <p>{list.name} - {list.artist}</p>
            <audio src= {list.url} controls loop></audio>
            <button onClick={() => this.deleteMusic(list.id)}>X</button>
            </MusicasMostradas>
        )
  
    })

  
    return (
      <div>
          <button onClick={this.props.paginaCriarPlaylist}>Ir para criação de Playlists</button>
          <div>
            <input
            placeholder='Nome da música'
            value={this.state.nomeMusica}
            onChange={this.onChangeNomeMusica}
            />

            <input
            placeholder='Nome do(a) artista'
            value={this.state.artista}
            onChange={this.onChangeArtista}
            />

            <input
            placeholder='Url da música'
            value={this.state.url}
            onChange={this.onChangeUrl}
            />

            <button onClick={this.adicionarMusica}>Adicionar música</button>
          </div>

          <div>
           <h1>Lista de Músicas</h1>
           <div>
             {playlistDetalhada}
           </div>
           
          </div>
          <button onClick={this.props.paginaListaPlaylist}>Listas das Playlists!</button>

      </div>
    )
  }
}
