import styled from "styled-components";

export const ContainerPai = styled.div`
display: flex;
flex-direction:column;
height: 100vh;
align-items:center;
justify-content: center;
gap: 10px;
`

export const DivCardHome = styled.div`
height: 80vh;
width: 30vw;
background-color: rgb(0,0,0);
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
border-radius: 40px;
  img{
    width:35vw;
    border-radius: 40px;
    min-width:200px;
    min-height:200px;
    max-width:500px;
    max-height:500px;
  }
`

export const BlocoFoto = styled.div`
  p {
    color: whitesmoke;
    text-align:center;
    font-size: 30px;
  }
`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
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