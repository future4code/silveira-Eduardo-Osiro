import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Home from './Componets/Home/Home';
import Matched from './Componets/Matched/Matched';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: yellow;
`


function App() {

  const [pagina, setPagina] = useState("home")

  
  const renderizaPagina = () => {

    switch (pagina) {
      case 'home':
        return <Home paginaMatched={paginaMatched} />
      case 'matched':
        return <Matched paginaHome={paginaHome} />
      default: 
        return <Home/>
   }
  }

  const paginaMatched = () => {
    setPagina("matched")
  }

  const paginaHome = () => {
    setPagina("home")
  }

  return (
    <div>
      <GlobalStyle/>
      {renderizaPagina()}
    </div>
  );
}

export default App;
