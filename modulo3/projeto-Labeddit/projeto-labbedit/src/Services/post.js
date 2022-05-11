import axios from "axios";
import { baseURL } from '../Constants/urls'

const headers = {
    headers:
        { authorization: localStorage.getItem("token") }
}

export const post = (setPosts) => {
    axios.get(`${baseURL}/posts`, headers)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((error) => {
            alert(error.response.data)
        })
}

export const createPost = (body) => {
    axios.post(`${baseURL}/posts`, body, headers)
    .then((response) => {
        console.log(response.data.message)
    })
    .catch((error) => {
        alert(error.response)
    })
}













