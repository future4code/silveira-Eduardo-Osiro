import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/190',
      },
      {
        nomeUsuario:'Ademar',
        fotoUsuario:'https://picsum.photos/50/70',
        fotoPost:'https://picsum.photos/200/130',
      },
      {
        nomeUsuario:'Canbuar',
        fotoUsuario:'https://picsum.photos/50/90',
        fotoPost:'https://picsum.photos/200/150',
      }
    ],
    valorInputUsuário: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuário,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const atualizaPosts = [novoPost, ...this.state.post]
    this.setState({
      post: atualizaPosts
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({
      valorInputUsuário: event.target.value
    })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value
    })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value
    })
  }


    render() {
      const arrayDeComponentes = this.state.post.map((item) => {
  
        return (
          <Post
            {...item}
          />
        )
      })

        return (
          <MainContainer>
          {arrayDeComponentes}

          <input 
          placeholder="Usuário"
          value={this.state.valorInputUsuário}
          onChange={this.onChangeInputUsuario}
          />
          <input 
          placeholder="Link - fotoUsuário"
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          />
          <input 
          placeholder="Link - foto"
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          />
          <button onClick={this.adicionarPost}>Post</button>
          </MainContainer>
        );
      }
  }
  
  export default App;
