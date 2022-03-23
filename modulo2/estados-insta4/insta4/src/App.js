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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/190'}
        />
        <Post
          nomeUsuario={'Ademar'}
          fotoUsuario={'https://picsum.photos/50/70'}
          fotoPost={'https://picsum.photos/200/130'}
        />
        <Post
        nomeUsuario={'Canbuar'}
        fotoUsuario={'https://picsum.photos/50/90'}
        fotoPost={'https://picsum.photos/200/150'}
      />
      </MainContainer>
    );
  }
}

export default App;
