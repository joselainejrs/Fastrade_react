import React, { Component } from 'react';
import Header from '../../components/cabecalho/cabecalho';
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
              <Header></Header>
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="conj_card_receitas">
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_creme} alt="imagem pudim" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Creme de Couve-Flor</p>
                        </div>
                    </div>
                    <div className="texto_receita">
                       
                        <h3 className="til_receita" >INGREDIENTES: </h3>
                        <p className="corp_receita">
                        5 xícaras (chá) de folhas de couve-flor
                        1/2 xícara (chá) de cebola
                        1 xícara (chá) de leite
                        1/2 xícara (chá) de água
                        2 colheres (sopa) de óleo
                        1 colher (sopa) de farinha de trigo
                        sal a gosto  
                        </p>

                        <h3 className="til_receita"> MODO DE PREPARO: </h3>
                        <p className="corp_receita">
                        Lavar as folhas de couve-flor e picá-las muito bem. Em uma panela, 
                        refogar a cebola no óleo, até dourar.
                        Juntar as folhas picadas e o sal.
                        Misturar bem.
                        À parte, misturar a farinha, o leite e a água.
                        Adicionar a mistura ao refogado mexendo bem até o creme encorpar.
                        Deixar cozinhar.
                        Servir quente.                      
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
              
         export default Creme;