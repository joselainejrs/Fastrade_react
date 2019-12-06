import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_doce from '../../assets/img/docemaracuja.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Doce extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_doce} alt="imagem pudim" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Doce de Casca de Maracujá</p><br />
                        </div>
                    </div>
                    <div className="texto_receita">
                        <br />
                        <br />
                        <h3>INGREDIENTES: </h3><br />
                        <br />
                        <p>
                        6 maracujá azedos firmes<br />
                        1 xícara (chá) de açúcar light<br />
                        2 xícaras (chá) de Água<br />
                        2 xícaras (chá) de suco de maracujá<br />
                        2 pedaços de canela em pau<br />
                            
                        </p>
                        <br />
                        <br />
                        <h3> MODO DE PREPARO: </h3><br />
                        <br />
                        <p>
                        Retire a pele externa das cascas.<br />
                        Deixe a parte branca de molho de um dia para o outro.<br />
                        Escorra, corte em gomos e coloque numa panela.bata por 5 minutos e reserve
                        Junte o açúcar, a água, o suco de maracujá e a canela.
                        Cozinhe em fogo médio até a calda engrossar e as cascas ficarem macias, 
                        juntando mais água se necessário.
                        
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
              
         export default Doce;