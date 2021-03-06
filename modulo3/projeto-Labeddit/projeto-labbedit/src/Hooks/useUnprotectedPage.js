import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToFeedPage } from "../Routes/Coordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate();
    useEffect (() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToFeedPage(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage

