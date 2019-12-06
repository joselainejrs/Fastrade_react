import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_pudim from '../../assets/img/pudim.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Pudim extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_pudim} alt="imagem pudim" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Pudim de pão amanhecidos</p><br />
                        </div>
                    </div>
                    <div className="texto_receita">
                        <br />
                        <br />
                        <h3>INGREDIENTES: </h3><br />
                        <br />
                        <p>
                            3 pães franceses amanhecidos<br />
                            1 lata de leite condensado<br />
                            1/2 litro de leite<br />
                            1 xícara (chá) de açúcar para a calda<br />
                            4 ovos<br />
                            50 g de coco ralado.
                        </p>
                        <br />
                        <br />
                        <h3> MODO DE PREPARO: </h3><br />
                        <br />
                        <p>
                            Pique os pães em pedaços e coloque no liquidificador<br />
                            Acrescente os ovos, o leite condensado, o leite e o coco ralado;<br />
                            bata por 5 minutos e reserve
                            Coloque a xícara de açúcar em uma forma de pudim com 50 ml de água;
                            deixe ferver no fogo baixo até virar caramelo
                            Adicione a mistura do pudim na forma do caramelo
                            Cubra com papel alumínio
                            Leve ao forno em banho-maria por aproximadamente 1 hora e 30 minutos;
                            Retirar do forno, deixar esfriar para desenformar e leve à geladeira
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
              
         export default Pudim;