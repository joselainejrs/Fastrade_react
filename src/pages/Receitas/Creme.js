import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_creme from '../../assets/img/cremecouve.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Creme extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_creme} alt="imagem pudim" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Creme de Couve-Flor</p><br />
                        </div>
                    </div>
                    <div className="texto_receita">
                        <br />
                        <br />
                        <h3>INGREDIENTES: </h3><br />
                        <br />
                        <p>
                        5 xícaras (chá) de folhas de couve-flor<br />
                        1/2 xícara (chá) de cebola<br />
                        1 xícara (chá) de leite<br />
                        1/2 xícara (chá) de água<br />
                        2 colheres (sopa) de óleo<br />
                        1 colher (sopa) de farinha de trigo
                        sal a gosto
                            
                        </p>
                        <br />
                        <br />
                        <h3> MODO DE PREPARO: </h3><br />
                        <br />
                        <p>
                        Lavar as folhas de couve-flor e picá-las muito bem. Em uma panela, 
                        refogar a cebola no óleo, até dourar.<br />
                        Juntar as folhas picadas e o sal.
                        Misturar bem.
                        À parte, misturar a farinha, o leite e a água.
                        Adicionar a mistura ao refogado mexendo bem até o creme encorpar.
                        Deixar cozinhar.
                        Servir quente.<br />
                      
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
              
         export default Creme;