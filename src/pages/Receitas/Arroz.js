import React, { Component } from 'react';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape';
import img_Arroz from '../../assets/img/arrozBR.png';
// import MACARRAOA from '../../assets/img/MACARRAOA.png';
// import ARROZC from '../../assets/img/ARROZC.png';
// import FEIJAO from '../../assets/img/FEIJAO.png';
// import TOMATE from '../../assets/img/TOMATE.png';

class Arroz extends Component {
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
                  <img src={img_Arroz} alt="imagem arroz" className="img_receita" />
                        <div className="nome_prato">
                            <p className="textop">Arroz Brasileirinho</p>
                        </div>
                    </div>
                    
                    <div className="texto_receita">
                   
                        <h3 className="til_receita">INGREDIENTES: </h3>
                        <p className="corp_receita">
                        400 g de arroz cozido (podem ser sobras do dia anterior)
                        1 caldo de legumes
                        1 cebola pequena cortada em pedaços pequenos
                        4 colheres de sopa de azeitona
                        2 colheres de sopa de açafrão
                        1 colher de sopa de azeite
                        1 lata de ervilha.
                        </p>
                    
                        <h3 className="til_receita"> MODO DE PREPARO: </h3>
                        
                        
                        <p className="corp_receita">Em uma panela em fogo baixo coloque o azeite, 
                        a cebola cortada em pedaços pequenos e deixe refogar.
                        Quando a cebola estiver transparente ou amolecida, acrescente o caldo de 
                        legumes e as azeitonas e mexa até que o caldo de legumes esteja totalmente dissolvido.
                        Acrescente as ervilhas e por último o açafrão, mexendo sempre.
                        Assim que tiver misturado bem os ingredientes com o açafrão acrescente o arroz 
                        e misture bem. Continue mexendo até o arroz estar totalmente misturado aos outros 
                        ingredientes. Fica uma delícia acompanhado de peixe ou peito de frango grelhado.</p>
                        
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
              
         export default Arroz;