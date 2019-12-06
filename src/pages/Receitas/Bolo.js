import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import img_Bolo from '../../assets/img/bolo.png';
import MACARRAOA from '../../assets/img/MACARRAOA.png';
import ARROZC from '../../assets/img/ARROZC.png';
import FEIJAO from '../../assets/img/FEIJAO.png';
import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Bolo extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p className="titulo_do_prato">RECEITAS</p>
                </div>
                <div className="card_receitas">
                    <div className="foto_receita">
                  <img src={img_Bolo} alt="imagem arroz" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Bolo de Casca de Abóbora</p><br />
                        </div>
                    </div>
                    <div className="texto_receita">
                        <br />
                        <br />
                        <h3>INGREDIENTES: </h3><br />
                        <br />
                        <p>
                        1 colher (sopa) de fermento em pó;<br />
                        1 e ½ xícara (chá) de farinha de trigo;<br />
                        2 xícaras (chá) de casca de abóbora picada;<br />
                        2 xícaras (chá) de açúcar;<br />
                        1 xícara (chá) de amido de milho; <br />
                        1 xícara (chá) de óleo; <br />
                        3 ovos.<br />
                        

                        <h3>COBERTURA: </h3><br />
                        <br />
                        <p>
                        4 colheres (sopa) de chocolate em pó; <br />
                        4 colheres (sopa) de açúcar; <br />
                        4 colheres (sopa) de leite.  <br />
                        </p>
                        </p>
                        <br />
                        <br />
                        <h3> MODO DE PREPARO: </h3><br />
                        <br />
                        <p>
                        
                        Massa: <br/>
                        <br/>
                        Bater no liquidificador as cascas, ovos e óleo. Á parte, 
                        peneirar numa tigela a farinha, amido de milho, açúcar e 
                        fermento. Juntar a mistura no liquidificador e bater muito 
                        bem. Untar uma assadeira média com margarina e farinha, colocar
                        a mistura e levar para assar em forno médio (200ºC) por 
                        aproximadamente 30 minutos.
                        <br/>
                        Cobertura:<br/>
                        <br/>
                        Misturar todos os ingredientes e levar ao fogo até ferver e 
                        reservar. Depois de assar o bolo, espalhar esta cobertura por
                        cima e deixar esfriar
                           <br />
                            <br />
                            
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
              
         export default Bolo;