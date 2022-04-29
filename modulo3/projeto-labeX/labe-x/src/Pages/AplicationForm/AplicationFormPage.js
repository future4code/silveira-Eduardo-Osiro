import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header';
import { Botao, FormsContainer, DivCover, ContainerMainApplication } from './styledAplicationPage'
import useForm from '../../Hooks/useForm';
import axios from 'axios';
import { Countries } from '../../Constants/countries'


function AplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const [trips, setTrips] = useState([]);

  const { form, onChange, cleanFields } = useForm({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  })

  const register = (event) => {
    event.preventDefault();
    applyToTrip();
    console.log("Enviado!", form);
    cleanFields();
  }

  useEffect(() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-osiro-silveira/trips"
    axios.get(url)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert("Deu ruim: ", error.data.response);
      });
  }, []);

  const applyToTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-osiro-silveira/trips/${form.tripId}/apply`
    const body = {
      "name": form.name,
      "age": form.age,
      "applicationText": form.applicationText,
      "profession": form.profession,
      "country": form.country,
    }
    axios.post(url, body)
      .then((response) => {
        alert("Inscrição realizada com sucesso!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
        alert("Algo deu errado: ", error.response)
      })
  }

  const getTripsList = trips.map((trip) => {
    return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

  const countryOptions = Countries.map((country) => {
    return (
      <option value={country} key={country} >{country}</option>
    )
  })


  return (

    <ContainerMainApplication>
      <Header />

      <DivCover>
        <FormsContainer onSubmit={register}>
          <select
            value={form.escolhaViagem}
            name={"escolhaViagem"}
            onChange={onChange}>
            <option value='' disabled>Escolha a sua viagem</option>
            {getTripsList}
          </select>

          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Digite seu nome completo"
            required
          />

          <input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder="Digite sua idade"
            required
            type={"number"}
            min={18}
          />

          <input
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder="Por que deve ser escolhido?"
            required
          />

          <input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder="Profissão"
            required
          />

          <select
            name={"country"}
            value={form.country}
            onChange={onChange}
            placeholder="País"
            required
          >
            <option value='' disabled> Escolha o seu País</option>
            {countryOptions}
          </select>


          <Botao>
            <button>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
              <span>Enviar!</span>
            </button>
          </Botao>

        </FormsContainer>
        
          <Botao>
            <button onClick={goBack}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
              <span>Voltar</span>
            </button>
          </Botao>
        
      </DivCover>




    </ContainerMainApplication>

  )
}

export default AplicationFormPage