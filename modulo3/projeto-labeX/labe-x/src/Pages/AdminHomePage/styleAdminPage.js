import styled from "styled-components";

export const ContainerPai = styled.div`
height: 100vh;

`

export const DivGeral = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 75%;

`

export const DivMap = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  div {
    height: 40px;
    display: flex;
    align-items: center;
    width: 10vw;
    padding: 10px;
    border-radius: 40px;
    
  }

  button {
    border: none;
    border-radius: 30px;
  }

`

export const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  height: 75%;
  width: 60%;
  box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
  border-radius: 40px;
  h1 {
    color: whitesmoke;
  }
`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
width: 20vw;
padding-bottom: 10px;
margin-top: 20px;
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






