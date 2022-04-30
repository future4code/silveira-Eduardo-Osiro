import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerPai = styled.div`
height: 100vh;
background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
display: flex;
align-items:center;
justify-content:center;

`

const ContainerMatches = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
border: 5px solid black;
width: 20vw;
background-color: white;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.60);
`

const ImgMatched = styled.img`
width:6vw;

border-radius: 5px;
`

const HeaderPerfil = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: white;
`

const DivBotao = styled.div`
display:flex;
justify-content: center;
align-items: center;
    button {
      border: 0px;
      background-color: aquamarine;
      border-radius: 10px;
      height: 30px;
      transition-duration: 0.4s;

        :hover {
          background-color: lightpink;
          width: 45px;
          box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
        }
    }
`

const DivMap = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 10px;

`

const DivLista = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const BotaoClear = styled.button`
border: 0px;
background-color: aquamarine;
border-radius: 10px;
height: 30px;
transition-duration: 0.4s;

    :hover {
        background-color: lightpink;
        width: 120px;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
    }
    

`

const urlGetMatches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo-silveira/matches'

const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo-silveira/clear'

function Matched(props) {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get(urlGetMatches)
      .then((res) => {
        setMatches(res.data.matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const clearMatch = () => {
    axios
      .put(urlClear)
      .then((res) => {
        getMatches()
        alert("Tudo limpo!")
      })
      .catch((err) => {
        alert(err)
      })
  }

  const listaMatches = matches.map((person) => {
    return (
      <DivMap>
        <ImgMatched src={person.photo} alt={person.name} />
        <p>{person.name}</p>
      </DivMap>
    )
  })



  return (
    <ContainerPai>
      <ContainerMatches>
        <HeaderPerfil>
          <p>💞AstroMatch💞</p>
          <DivBotao>
            <button onClick={props.paginaHome}> Voltar </button>
          </DivBotao>
        </HeaderPerfil>
        <DivLista>
          {listaMatches}
        </DivLista>

        <BotaoClear onClick={clearMatch}>Limpar matches</BotaoClear>
      </ContainerMatches>
    </ContainerPai>
  )
}

export default Matched