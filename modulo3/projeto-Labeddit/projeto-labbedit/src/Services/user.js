import axios from "axios";
import {baseURL} from '../Constants/urls'
import { goToFeedPage } from "../Routes/Coordinator";

export const login = (form, cleanFields, navigate) => {
    axios.post (`${baseURL}/users/login`, form)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        cleanFields();
        goToFeedPage(navigate);
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
}

export const signUp = (form, cleanFields, navigate) => {
    axios.post (`${baseURL}/users/signup`, form)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Cadastro realizado!")
        cleanFields();
        goToFeedPage(navigate);
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
}

