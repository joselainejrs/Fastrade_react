import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_macarrao from '../../assets/img/macarrao.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Macarrao extends Component {
    render() {
        return (
            <div>
                <Cabecalho/>
            <div class="banner_dicas">
                <p class="titulo_do_prato">RECEITAS</p>
            </div>
            <div class="card_receitas">
                <div class="foto_receita">
                    <img src={img_macarrao} alt="imagem macarrão" class="img_receita" />
                    <div class="nome_prato">
                        <p class="textop">Macarrão de Talos</p><br />
                    </div>
                </div>
                <div class="texto_receita">
                    <br />
                    <br />
                    <h3>INGREDIENTES: </h3><br />
                    <br />
                    <p>
                        300 Gramas de macarrão parafuso<br />
                        4 Dentes de alho<br />
                        3 Colheres de sopa de azeite<br />
                        1 Xícara de chá de ramos de cenoura<br />
                        3 Xícaras de chá de talos (brócolis, beterraba, couve)<br />
                        Sal a gosto.
                </p>
                    <br />
                    <br />
                    <h3> MODO DE PREPARO: </h3><br />
                    <br />
                    <p>
                        Em uma panela, doure os dentes de alho inteiros no azeite.<br />
                        Acrescente os talos, os ramos, e refogue junto com o<br/>
                            macarrão cozido al dente e verifique o sal.
                </p>
                        <br />

            </div>
                </div>
                <div class="embarque">
                    <div class="carrossel">

                        <img class="carrossel_img" src={MACARRAOA} />
                        <img class="carrossel_img" src={ARROZC}/>
                        <img class="carrossel_img" src={FEIJAO} />
                        <img class="carrossel_img" src={TOMATE} />

                    </div>
                    <Rodape/>
                </div>
                </div>
                );
            }
        }
        export default Macarrao;
