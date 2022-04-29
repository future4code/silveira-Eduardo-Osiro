import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import useProtectedPage from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Botoes, DivTripInfo, ApprovedCandidates, DivMap, DivInfo,  DivAprovados, MainContainer } from './styleTripDetailsPage'

function TripDetailsPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const params = useParams();

  const [candidates, setCandidates] = useState([]);
  const [tripDetail, setTripDetail] = useState([]);


  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-osiro-silveira/trip/${params.id}`
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.get(url, headers)
      .then((response) => {
        setTripDetail(response.data.trip);
        setCandidates(response.data.trip.candidates);
        console.log(response.data.trip.candidates)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }, []);

  const decideCandidate = (id, choice) => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-osiro-silveira/trips/${tripDetail.id}/candidates/${id}/decide`
    const body = {
      approve: choice
    }
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.put(url, body, headers)
      .then((response) => {
        console.log(response)
        if (choice === true) {
          alert("Candidato aprovado.")
        } else {
          alert("Candidato reprovado.")
        }
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }



  const remainingCandidates = candidates.map((candidate) => {
    return (
      <DivMap key={candidate.id}>
        <p>Nome: {candidate.name} </p>
        <p>Idade: {candidate.age} </p>
        <p>País: {candidate.country} </p>
        <p>Profissão: {candidate.profession} </p>
        <p>Texto de aplicação: {candidate.applicationText} </p>
        <div>
          <button onClick={() => decideCandidate(candidate.id, true)} > Aprovar </button>
          <button onClick={() => decideCandidate(candidate.id, false)}> Reprovar </button>
        </div>
      </DivMap>
    )
  })

  const approvedCandidates = tripDetail.approved && tripDetail.approved.map((candidate) => {
    return (
      <DivAprovados key={candidate.id}> {candidate.name} </DivAprovados>
    )
  })

  return (

    <MainContainer>
      <Header />
      <DivInfo>
      <div>
        <h1>Detalhes da viagem:</h1>
        <DivTripInfo>
          <p><b>Nome:</b> {tripDetail.name}</p>
          <p><b>Planeta:</b> {tripDetail.planet}</p>
          <p><b>Descrição:</b> {tripDetail.description}</p>
          <p><b>Data:</b> {tripDetail.date}</p>
          <p><b>Duração em dias:</b> {tripDetail.durationInDays}</p>
        </DivTripInfo>
      </div>

      <div>
        <h3>Candidatos pendentes:</h3>
        <div>
          {remainingCandidates}
        </div>

      </div>

      <ApprovedCandidates>
        <h3>Candidatos aprovados:</h3>
        <div>
          {approvedCandidates}
        </div>

      </ApprovedCandidates>

      <Botoes>
        <button onClick={goBack}>
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
          <span>Voltar</span>
        </button>
      </Botoes>

      </DivInfo>

    </MainContainer>
  )
}

export default TripDetailsPage