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
        alert("Erro!, por favor, tente novamente")
        console.log(error.response.data.message)
    })
}