import styled from "styled-components"

export const ContainerMainApplication = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`

export const FormsContainer = styled.form`
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 50vh;
width: 40vw;
padding: 40px;
border-radius: 40px;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
  input{
    height: 20px;
    width: 20vw;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
  }
  select {
    height: 50px;
    width: 21vw;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
  }

`

export const DivCover = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;


`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
width: 20vw;
padding-bottom: 10px;
button {
  box-shadow: 0 12px 16px 0 rgba(255,255,255,1), 0 17px 50px 0 rgba(255,255,255,0.16);
  width: 10vw;
 display: flex;
 align-items: center;
 justify-content:space-evenly;
 font-family: inherit;
 font-weight: 500;
 font-size: 17px;
 padding: 0.8em 1.3em 0.8em 0.9em;
 color: white;
 background: #ad5389;
 background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
 border: none;
 letter-spacing: 0.05em;
 border-radius: 16px;
}

button svg {
 margin-right: 3px;
 transform: rotate(30deg);
 transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button span {
 transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button:hover svg {
 transform: translateX(5px) rotate(90deg);
}

button:hover span {
 transform: translateX(7px);
}
`