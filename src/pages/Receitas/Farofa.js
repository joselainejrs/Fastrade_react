import React, { Component } from 'react';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_farofa from '../../assets/img/farofa.png';
// import MACARRAOA from '../../assets/img/MACARRAOA.png';
// import ARROZC from '../../assets/img/ARROZC.png';
// import FEIJAO from '../../assets/img/FEIJAO.png';
// import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Farofa extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="conj_card_receitas">
                    <div className="card_receitas">
                        <div className="foto_receita">
                            <img src={img_farofa} alt="imagem farofa" className="img_receita" />
                            <div className="nome_prato">
                                <p className="textop">Farofa de Casca de Melão</p><br />
                            </div>
                        </div>
                        <div className="texto_receita">

                            <h3 className="til_receita">INGREDIENTES: </h3>

                            <p className="corp_receita">
                                2 xícaras de chá de casca de melão picada
                                4 colheres de sopa de azeite
                                4 colheres de sopa de cebola picada
                                2 dentes de alho picado
                                2 xícaras de chá de talos picados
                                2 xícaras de chá de suco de casca de abacaxi
                                2 xícaras de chá de tomate picado
                                4 xícaras de chá de farinha de mandioca e sal à gosto.
                        </p>

                            <h3 className="til_receita"> MODO DE PREPARO: </h3>
                            <p className="corp_receita">
                                1 Ferva a casca de melão até ficar macia
                                2 Escorra e reserve
                                3 Aqueça o azeite e doure a cebola e o alho
                                4 acrescente os talos, a casca do melão e refogue
                                5 Junte o suco e o sal. Deixe levantar fervura
                                6 Por fim, acrescente o tomate picado e a farinha de mandioca
                                7 Mexa bem e sirva quente ou frio. No caso do suco da casca do abacaxi
                                as cascas devem ser cozidas por 15 à 20 minutos.
                        </p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="embarque">
                    <div className="carrossel">

                        {/* <img className="carrossel_img" src={MACARRAOA} />
                        <img className="carrossel_img" src={ARROZC} />
                        <img className="carrossel_img" src={FEIJAO} />
                        <img className="carrossel_img" src={TOMATE} /> */}

                    </div>
                    <Rodape></Rodape>
                </div>
            </div>
        );
    }
}

export default Farofa;