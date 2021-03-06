import logo from './logo.svg';
import './App.css';
import { ItemMenu } from './Components/ItemMenu';
import { CardVideo } from './Components/Card.Video';

function App() {

  return (
    <div>
          <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <ItemMenu texto={"Batata"}/>
                    <ItemMenu texto={"Em Alta"}/>
                    <ItemMenu texto={"Inscrições"}/>
                    <ItemMenu texto={"Originais"}/>
                    <hr/>
                    <ItemMenu texto={"Bibliotecas"}/>
                    <ItemMenu texto={"Configurações"}/>
                </ul>
            </nav>

            <section className="painel-de-videos">
                
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=1"}
                    titulo={"Título Vídeo 1"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=2"}
                    titulo={"Título Vídeo 2"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=3"}
                    titulo={"Título Vídeo 3"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=4"}
                    titulo={"Título Vídeo 4"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=5"}
                    titulo={"Título Vídeo 5"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=6"}
                    titulo={"Título Vídeo 6"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=7"}
                    titulo={"Título Vídeo 7"}
                />
                <CardVideo
                    imagem={"https://picsum.photos/400/400?a=8"}
                    titulo={"Título Vídeo 8"}
                />
                {/* <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>  */}
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
