import React from "react";
import styled from 'styled-components'

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 40vw;
`
const CardPequenoImagem = styled.img`
    width: 2vw;
    margin-right: 10px;
    border-radius: 50%;
`
const CardPequenoContainerDentro = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const NomeCardPequeno = styled.h4`
    margin-bottom: 15px;
    font-family: bold;
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <CardPequenoImagem src={ props.imagem } />
            <div>
                <NomeCardPequeno>{ props.nome }</NomeCardPequeno>
                <p>{ props.descricao }</p>
            </div>
        </CardPequenoContainer>
    )
}

export default CardPequeno;