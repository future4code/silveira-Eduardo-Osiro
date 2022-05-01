import styled from "styled-components";

export const MainContainer = styled.div`
  h1, h3{
    color: whitesmoke;
    text-align: center;
  }
`
export const DivInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ApprovedCandidates = styled.div`
background-color: whitesmoke;
border: 2px solid white;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
border-radius: 40px;
  h3 {
    color: black;
  }
`

export const DivTripInfo = styled.div`
background-color: whitesmoke;
border: 2px solid white;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
border-radius: 40px;
`

export const DivAprovados = styled.div`

`

export const DivMap = styled.div`
background-color: whitesmoke;
border: 2px solid white;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
border-radius: 40px;

`

export const CandidatesButton = styled.div`
display: flex;
justify-content: center;
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