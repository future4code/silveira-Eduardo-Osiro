import React from 'react';
import styled from 'styled-components';



const ContainerPrincipal = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
`

const ContainerMensagem = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  background-image: linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%);
`

const InputsContainer = styled.div`
  display: flex;
`

const NameInput = styled.input`
  width: 150px;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
`

const MessageInput = styled.input`
  flex-grow: 1;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
`

class App extends React.Component {
  state = {
    messages: [],
    InputUsuario: '',
    messageValue: ''
  }

  onChangeUserValue = (event) => {
    this.setState({InputUsuario: event.target.value})
  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.InputUsuario,
      text: this.state.messageValue
    }

    const newMessagesArray = [newMessage, ...this.state.messages]

    this.setState({messages: newMessagesArray, messageValue: ''})
  }

  render() {
    return (
      <ContainerPrincipal>
        <ContainerMensagem>
          {this.state.messages.map((message, index) => {
            return <p key={index}>
              <strong>{message.user}</strong>: {message.text}
            </p>
          })}
        </ContainerMensagem>
        <InputsContainer>
          <NameInput
            onChange={this.onChangeUserValue} 
            value={this.state.InputUsuario} 
            placeholder={'Nome'}
          />
          <MessageInput
            onChange={this.onChangeMessageValue} 
            value={this.state.messageValue} 
            placeholder={'Mensagem'}
          />
          <button onClick={this.sendMessage}>Enviar</button>
        </InputsContainer>
      </ContainerPrincipal>
    );
  }
}

export default App;