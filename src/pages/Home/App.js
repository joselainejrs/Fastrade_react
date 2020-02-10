import React, { Component } from 'react';

//Aqui importamos imagens
import usuarioPng from '../../assets/img/usu_ario.png';
import shopPng from '../../assets/img/shop.png';
import negociarPng from '../../assets/img/nego_ciar.png';
import documentoPng from '../../assets/img/document_home.png';
import ClientePng from '../../assets/img/cliente_home.png';
import bannerFinal from '../../assets/img/img_2.png';
import Rodape from '../../components/rodape/Rodape.js'

import compras from '../../assets/img/photo-1516321318423-f06f85e504b3.jpeg'

//importa Link  
import { Link } from 'react-router-dom';

//importamos a css da home
import Cabecalho from '../../components/cabecalho/cabecalho';
import Home from '../../assets/css/Home.css'
import { parseJwt } from '../../services/auth';
import MenuMobile from '../../components/menuMobile/menuMoile';


// Aqui importamos paginas


// Aqui temos o ciclo de vida!
class App extends Component {
  UNSAFE_componentWillMount() {
    console.log('Carregando');
  }

  componentDidMount() {
    console.log('Carregado');
    this.listaAtualizada();
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount")
  }

  //declaramos um construtor com uma lista
  constructor() {
    super();
    this.state = {
      listaNomeOferta: [],
      listaImagem: []

    }

  }
  // temos uma lista atualizada onde escolhemos qual produto ira aparecer
  listaAtualizada = () => {
    fetch("https://localhost:5001/api/oferta")
      .then(response => response.json())
      .then(data => this.setState({ listaNomeOferta: data }));
  }

  render() {
    return (

      <div className="App" >
        <Cabecalho></Cabecalho>

        {/* <MenuMobile/> */}
        <div className="tod_home">

        </div>

        <main>
        <div className="conjunto_color">
          <div className="home_card_pro">
            <p className="frase_dicas">
              Sem tempo para fazer Compras?<br />
              seja rápido, seja  FASTRADE</p>
          </div>
        
            <div className="conju_frase">

              <div>
                <img src={compras} alt="" className="img_1home" />
              </div>

              <div className="gl_frase">
                <h6 className="Frase_fastrade">O que é Fastrade?</h6>

                <div className="ref_home">
                  <p className="frase_referencia_home">FASTRADE é um site de intermediação entre consumidores e pequenas ou grandes comerciantes,
                   que buscam ofertar seus produtos, sejam eles próximo da data de validade ou não, mas com menores preço e de otima qualidade.</p>
                </div>
              </div>
            </div>
          </div>      


          {/* <div className="destaque">
            <img src={bannerFinal} alt="imagem da fruta flaboesa no pote" className="img_destaque" /> </div> */}

          <div className="tod_informativo">
            <div className="dica_informativa">
              <p className="informativo">Quero comprar alimentos</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastrar</p></div>
                </div>
              </div>


              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={shopPng} alt="Imagem de shopping" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Visite nossa página produtos de produtos.</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={negociarPng} alt="Imagem de mão negociando" className="img_informativa" /></div>
                  <div className="frase_informativa"><p>Negocie da melhor forma suas compras.</p></div>
                </div>
              </div>
            </div>


            <div className="dica_informativa">
              <p className="informativo2">Quero vender meus produtos</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastrar</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={documentoPng} alt="Imagem de shopping" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Ofereça seus produtos em nossa plataforma.</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={ClientePng} alt="Imagem de mão negociando" className="img_informativa" /></div>
                  <div className="frase_informativa"><p>Aguarde um novo comprador.</p></div>
                </div>
              </div>
            </div>
          </div>


        </main>
        <Rodape></Rodape>
      </div >
    );
  }
}

export default App;