import React, { Component } from 'react';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_doce from '../../assets/img/docemaracuja.png';
// import MACARRAOA from '../../assets/img/MACARRAOA.png';
// import ARROZC from '../../assets/img/ARROZC.png';
// import FEIJAO from '../../assets/img/FEIJAO.png';
// import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Doce extends Component {
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
                            <img src={img_doce} alt="imagem pudim" className="img_receita" />
                            <div className="nome_prato">
                                <p className="textop">Doce de Casca de Maracujá</p>
                            </div>
                        </div>
                        <div className="texto_receita">
                            <h3 className="til_receita">INGREDIENTES: </h3>
                            <p className="corp_receita">
                                6 maracujá azedos firmes
                                1 xícara (chá) de açúcar light
                                2 xícaras (chá) de Água
                                2 xícaras (chá) de suco de maracujá
                                2 pedaços de canela em pau
                             </p>

                            <h3 className="til_receita"> MODO DE PREPARO: </h3>
                            <p className="corp_receita">
                                Retire a pele externa das cascas.
                                Deixe a parte branca de molho de um dia para o outro.
                                Escorra, corte em gomos e coloque numa panela.bata por 5 minutos e reserve
                                Junte o açúcar, a água, o suco de maracujá e a canela.
                                Cozinhe em fogo médio até a calda engrossar e as cascas ficarem macias,
                                juntando mais água se necessário.
                             </p>
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

export default Doce;