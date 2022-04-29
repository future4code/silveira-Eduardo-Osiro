import React from 'react'
import Header from '../../Components/Header'
import { Botoes, FormsContainer, DivCover, ContainerMainApplication } from './styleCreateTripPage'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../../Hooks/useProtectedPage'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { Planets } from '../../Constants/planets'


function CreateTripPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const createNewTrip = (event) => {
    event.preventDefault();
    createTrip();
    cleanFields();
  }

  const createTrip = () => {

    const HEADERS = {
      headers: {
        "Content-Type": "application/json",
        "auth": localStorage.getItem("token")
      }
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-osiro-silveira/trips",
        form, HEADERS
      )
      .then((response) => {
        alert("Viagem cadastrada com sucesso!");
        navigate("/admin/trips/list/");
      })
      .catch((error) => {
        cleanFields();
      });

  }

  const planetsAvailable = Planets.map((planets) => {
    return <option key={planets} value={planets} > {planets} </option>
  })

  return (
    <ContainerMainApplication>
      <Header />
      <DivCover>
        <FormsContainer onSubmit={createNewTrip} >
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Digite o nome da viagem"
            required
          />

          <select
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            placeholder="Planeta"
            required
          >
            <option value="" disabled> Escolha o planeta</option>
            {planetsAvailable}
          </select>

          <input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder="Data"
            type={"date"}
            required
          />

          <input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder="Descrição da viagem"
            required
          />

          <input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            type={"number"}
            placeholder="Digite a duração da viagem em dias"
            required
          />

          <Botoes>
            <button>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
              <span>Criar!</span>
            </button>
          </Botoes>

        </FormsContainer>
        <Botoes>
          <button onClick={goBack}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
            <span>Voltar</span>
          </button>
        </Botoes>
      </DivCover>

    </ContainerMainApplication>
  )
}

export default CreateTripPage