import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './imgs/foto.jpeg'
import LogoLabenu from './imgs/logoLabenu.png'
import LogoEurofarma from './imgs/eurofarmaLogo.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import LogoEmail from './imgs/logoEmail.png'
import LogoLocaliza from './imgs/logoLocalizacao.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {FotoPerfil}
          nome="Astrodev" 
          descricao="Oi, eu sou o Eduardo. Sou estudante da Labenu. Adoro acompanhar notícias sobre tecnolgia e programação. Atualmente aprendendo REACT"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem= {LogoEmail}
        nome="E-mail: "
        descricao ="eduardoosiro1@gmail.com"
      />

      <CardPequeno
        imagem= {LogoLocaliza}
        nome="Rua: "
        descricao ="Capote Alto, 1230532498 - São Paulo - SP"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {LogoLabenu}
          nome="Labenu" 
          descricao="Estudante Web FullStack" 
        />
        
        <CardGrande 
          imagem= {LogoEurofarma}
          nome="Eurofarma" 
          descricao="Estagiário de produção industrial -
                    Controle de produção em larga escala" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
