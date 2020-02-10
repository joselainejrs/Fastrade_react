import React, { Component } from 'react';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_macarrao from '../../assets/img/macarrao.png';
// import MACARRAOA from '../../assets/img/MACARRAOA.png';
// import ARROZC from '../../assets/img/ARROZC.png';
// import FEIJAO from '../../assets/img/FEIJAO.png';
// import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Macarrao extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div class="banner_dicas">
                    <p class="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="conj_card_receitas">
                    <div class="card_receitas">
                        <div class="foto_receita">
                            <img src={img_macarrao} alt="imagem macarrão" class="img_receita" />
                            <div class="nome_prato">
                                <p class="textop">Macarrão de Talos</p>
                            </div>
                        </div>
                        <div class="texto_receita">

                            <h3 className="til_receita">INGREDIENTES: </h3>
                            <p className="corp_receita">
                                300 Gramas de macarrão parafuso
                                4 Dentes de alho
                                3 Colheres de sopa de azeite
                                1 Xícara de chá de ramos de cenoura
                                3 Xícaras de chá de talos (brócolis, beterraba, couve)
                                Sal a gosto.</p>

                            <h3 className="til_receita"> MODO DE PREPARO: </h3>
                            <p className="corp_receita">
                                Em uma panela, doure os dentes de alho inteiros no azeite.
                                Acrescente os talos, os ramos, e refogue junto com o
                                    macarrão cozido al dente e verifique o sal. </p>

                        </div>
                    </div>
                </div>
                <div class="embarque">
                    <div class="carrossel">

                        {/* <img class="carrossel_img" src={MACARRAOA} />
                        <img class="carrossel_img" src={ARROZC}/>
                        <img class="carrossel_img" src={FEIJAO} />
                        <img class="carrossel_img" src={TOMATE} /> */}

                    </div>
                    <Rodape></Rodape>
                </div>
            </div>
        );
    }
}
export default Macarrao;
