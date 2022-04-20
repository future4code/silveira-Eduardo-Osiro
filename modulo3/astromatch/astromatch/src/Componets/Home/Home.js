import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerPai = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
height: 100vh;
background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
`

const ContainerHome = styled.div`
border: 5px solid black;
border-radius: 10px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.60);
`

const HeaderPerfil = styled.div`
display: flex;
flex-direction: row-gap;
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
          width: 120px;
          box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
        }
    }
`

const ContainerPerfil = styled.div`
background-color: whitesmoke;
`

const Img = styled.img`
width: 30vw;


`
const ContainerBotoes = styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;
padding: 10px;
background-color: white;
    button {
      border: none;
      background-color: aquamarine;
      border-radius: 10px;
      height: 30px;

        :hover {
          background-color: lightpink;
          width: 50px;
          box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
        }
    }
`

const ImagemPerfil = styled.div`
display: flex;
justify-content:center;
align-items:center;
  img{
  max-height:50vh;
  width: 20vw;

}
`
const Informacoes = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
 p{
  text-align:center;
  width: 10vw;
 }
`




const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo-silveira/person'

const urlChoose = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo-silveira/choose-person'



function Home(props) {

  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios
      .get(url)
      .then((res) => {
        setProfile(res.data.profile)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const choosePerson = (boolean) => {
    const body =
    {
      "id": profile.id,
      "choice": boolean
    }
    axios
      .post(urlChoose, body)
      .then((res) => {
        getProfile()
      })
      .catch((err) => {
        alert(err)
      })
  }



  return (
    <ContainerPai>

      <ContainerHome>

        <HeaderPerfil>
          <p>💞AstroMatch💞</p>
          <DivBotao>
            <button onClick={props.paginaMatched}>Meus matches</button>
          </DivBotao>
        </HeaderPerfil>

        <ContainerPerfil>
          <ImagemPerfil>
            <Img src={profile.photo} alt={profile.name} />
          </ImagemPerfil>
          <Informacoes>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
          </Informacoes>
        </ContainerPerfil>

        <ContainerBotoes>
          <button onClick={() => choosePerson(false)}>💔</button>
          <button onClick={() => choosePerson(true)}>💘</button>
        </ContainerBotoes>

      </ContainerHome>



    </ContainerPai>
  )
}

export default Home