import React from "react";
import styled from "styled-components";

const CaixaDrop = styled.div`
display: flex;
align-itens: center;
justify-content: center;
margin: 5px;
`

export default class Etapa1 extends React.Component {

  render() {

    return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <div>
            <h2>1. Qual o seu nome?</h2><input/>
            <h2>2. Qual sua idade?</h2><input/>
            <h2>3. Qual seu e-mail?</h2><input/>
            <h2>4. Qual a sua escolaridade?
                <CaixaDrop>
                    <select id="ensino" name="ensino">
                            <option>Ensino médio incompleto</option>
                            <option>Ensino médio completo</option>
                            <option>Ensino superior incompleto</option>
                            <option>Ensino superior completo</option>
                    </select>
                </CaixaDrop>        
            </h2>
        </div>

    </div>

    );
  }
}