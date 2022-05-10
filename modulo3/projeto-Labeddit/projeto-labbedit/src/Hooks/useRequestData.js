import axios from 'axios'
import { useEffect } from 'react'

const useRequestData = (initialData, url) => {
    const [data, setData] = useEffect(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um erro")
        })
    }, [url])
    return (data)
}

export default useRequestData