import React from "react";
import styled from "styled-components";

const CaixaDrop = styled.div`
display: flex;
align-itens: center;
justify-content: center;
margin: 5px;
`

export default class Etapa3 extends React.Component {

    render() {

        return (
        
        <div>
            <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>7. Por que você não terminou um curso de graduação?</p><input/>
            <p>8. Você fez algum curso complementar</p>
                <CaixaDrop>
                    <select id="ensino" name="ensino">
                            <option>Nenhum</option>
                            <option>Cruso Técnico</option>
                            <option>Curso de Línguas</option>
                            
                    </select>
                </CaixaDrop>   
        </div>

    

    );
  }
}