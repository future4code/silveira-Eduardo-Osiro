import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: "Acreditar que vou um dia aprender React",
          completa: false
        },
        {
          id: Date.now(),
          texto: "Estudar mais React",
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''
    }

componentDidUpdate() {
      localStorage.setItem("listaDeTarefas", JSON.stringify(this.state.tarefas))
    };
  
componentDidMount() {
      const tarefas = localStorage.getItem("listaDeTarefas")
      this.setState({tarefas: JSON.parse(tarefas) || []})
    };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefaRenderizada = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiaListaDeTarefas = [...this.state.tarefas, novaTarefaRenderizada]
    this.setState({ 
      tarefas: copiaListaDeTarefas,
      inputValue: ""
    })
  }

  selectTarefa = (id) => {
      const novaListaDeTarefas = this.state.tarefas.map((lista) => {
        if (id === lista.id) {
          const tarefaAtualizada = {
            ...lista,
            completa: !lista.completa
          }
          return tarefaAtualizada
        } else {
          return lista
        }
      })
      this.setState({ tarefas: novaListaDeTarefas })
    }
  

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
