import React, { Component } from 'react';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape';
import img_Bolo from '../../assets/img/bolo.png';
// import MACARRAOA from '../../assets/img/MACARRAOA.png';
// import ARROZC from '../../assets/img/ARROZC.png';
// import FEIJAO from '../../assets/img/FEIJAO.png';
// import TOMATE from '../../assets/img/TOMATE.png';

import '../../components/rodape/Rodape';

class Bolo extends Component {
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
                  <img src={img_Bolo} alt="imagem arroz" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Bolo de Casca de Abóbora</p><br />
                        </div>
                    </div>

                    <div className="texto_receita">

                      
                        <h3 className="til_receita">INGREDIENTES: </h3>                      
                        <p className="corp_receita">
                        1 colher (sopa) de fermento em pó;  
                        1 e ½ xícara (chá) de farinha de trigo;     
                        2 xícaras (chá) de casca de abóbora picada;     
                        2 xícaras (chá) de açúcar;  
                        1 xícara (chá) de amido de milho;   
                        1 xícara (chá) de óleo;     
                        3 ovos.     
                        </p>

                        <h3 className="til_receita">COBERTURA: </h3>
                        <p className="corp_receita">
                        4 colheres (sopa) de chocolate em pó;   
                        4 colheres (sopa) de açúcar;    
                        4 colheres (sopa) de leite.     
                        </p>
                      
                        <h3 className="til_receita"> MODO DE PREPARO: </h3>
                                        
                        <h5 className="til_receita" >Massa:</h5>
                       
                        <p className="corp_receita">Bater no liquidificador as cascas, ovos e óleo. Á parte, 
                        peneirar numa tigela a farinha, amido de milho, açúcar e 
                        fermento. Juntar a mistura no liquidificador e bater muito 
                        bem. Untar uma assadeira média com margarina e farinha, colocar
                        a mistura e levar para assar em forno médio (200ºC) por 
                        aproximadamente 30 minutos.</p>
                      
                        <h3 className="til_receita">Cobertura:</h3>
                       
                        <p className="corp_receita">Misturar todos os ingredientes e levar ao fogo até ferver e 
                        reservar. Depois de assar o bolo, espalhar esta cobertura por
                        cima e deixar esfriar</p>
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
              
         export default Bolo;