import styled from "styled-components";

export const LoginScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    button {
        width: 30%;
    }

    img {
        max-width: 20%;
    }

    hr {
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        width: 90vw;
        height: 0.1vh
    }
`

export const SignUpButton = styled.button`

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 100px;
    width: 100px;
    height: 51px;
    left: 29px;
    top: 676px;
    border: 1px solid #FE7E02;
    border-radius: 27px;
    
`


export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    input {
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        border-radius: 7px;
        height: 50px;
        width:200px;
    }

    button {
        border: none;
        font-weight: bold;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 13px 133px;
        gap: 10px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 27px;
        width: 64%;
        padding: 13px 100px;
        height: 50px;
    }

`