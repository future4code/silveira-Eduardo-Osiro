import axios from "axios";
import { baseURL } from '../Constants/urls'

const headers = {
    headers:
        { authorization: localStorage.getItem("token") }
}

export const createComment = (body, id) => {
    axios.post(`${baseURL}/posts/${id}/comments`, body, headers)
    .then((response) => {
        console.log(response.data.message)
        alert("Comentário adicionado!")
    })
    .catch((error) => {
        console.log(error.response)
        alert("Algo deu errado: ", error.response)
    })
}

export const createPost = (body) => {
    axios.post(`${baseURL}/posts`, body, headers)
    .then((response) => {
        console.log(response.data.message)
        alert("Post criado com sucesso!")
    })
    .catch((error) => {
        alert("Algo deu errado: ", error.response)
    })
}













