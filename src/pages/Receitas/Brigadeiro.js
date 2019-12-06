import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_brigadeiro from '../../assets/img/brigadeiro.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Brigadeiro extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_brigadeiro} alt="imagem pudim" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Brigadeiro de Casca de Banana</p><br />
                        </div>
                    </div>
                    <div className="texto_receita">
                        <br />
                        <br />
                        <h3>INGREDIENTES: </h3><br />
                        <br />
                        <p>
                        1 lata de Leite Condensado<br />
                        1 colher de sopa de Manteiga<br />
                        2 colheres de sopa de Chocolate em Pó<br />
                        1 casca de Banana<br />
                        1 1/2 xícara de chá de Chocolate Granulado<br />
                            
                        </p>
                        <br />
                        <br />
                        <h3> MODO DE PREPARO: </h3><br />
                        <br />
                        <p>
                        Depois de higienizar a casca da banana, corte-a em pequenos cubos<br />
                        Junte todos os ingredientes no liquidificador, a Manteiga (sem sal), 
                        Banana, o Leite Condensado e Chocolate em Pó para preparar a massa do 
                        brigadeiro de casca de banana com granulado de chocolate.
                        Em uma panela, coloque a massa do brigadeiro de casca de 
                        banana com granulado de chocolate e cozinhe em fogo baixo até soltar
                        da panela, desligue o fogo e deixe esfriar.<br />
                        Depois de esfriar, enrole e passe no granulado ou sirva em copinhos o 
                        brigadeiro de casca de banana com granulado de chocolate.
                        Experimente o saboroso Brigadeiro de Casca de Banana com Granulado 
                        de Chocolate! Brigadeiro é sempre uma delícia e saboroso, seja de copinho, 
                        enrolado ou ainda morno na panela.
                        
                        </p>
                        <br />

                    </div>
                </div>
                <div className="embarque">
                    <div className="carrossel">

                        <img className="carrossel_img" src={MACARRAOA} />
                        <img className="carrossel_img" src={ARROZC} />
                        <img className="carrossel_img" src={FEIJAO} />
                        <img className="carrossel_img" src={TOMATE} />

                    </div>
                    <Rodape/>
                </div>
                </div>
                );
            }
        }
              
         export default Brigadeiro;