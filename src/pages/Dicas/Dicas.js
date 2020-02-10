import React, { Component } from 'react';

import Macarrao from '../../assets/img/macarrao.png';
import Arroz from '../../assets/img/arrozBR.png';
import Pudim from '../../assets/img/pudim.png';
import Doce from '../../assets/img/docemaracuja.png';
import Bolo from '../../assets/img/bolo.png';
import Farofa from '../../assets/img/farofa.png';
import Brigadeiro from '../../assets/img/Brigadeiro.jpg';
import Creme from '../../assets/img/cremecouve.png';
import Pate from '../../assets/img/patealho.png';
import '../../components/rodape/Rodape';
import Cabecalho from '../../components/cabecalho/cabecalho';
import '../../components/rodape/Rodape';
import Rodape from '../../components/rodape/Rodape';

//link
import { Link } from 'react-router-dom'

class Dicas extends Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="banner_dicas">
                    <p>DICAS</p>
                </div>
                {/* // <!-- <img src="imagens/banner.png"> --> */}
                <div className="frase">
                    <div >
                    <p className="frase_titulo">Não sabe o que fazer com os restos dos alimentos???</p>
                    <p className="frase_titulo">Segue algumas dicas!!</p>
                    </div>                       
                </div>

                <div className="container_pai">

                    <div className="container_card">
                        <div className="card1">
                            <Link to="/Receitas"><img src={Macarrao} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita"> Macarrão de Talos</p>
                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/Pudim"><img src={Pudim} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Pudim de Pão Amanhecido </p>
                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/Arroz"><img src={Arroz} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Arroz Brasileirinho</p>
                            </div>
                        </div>

                        <div className="card1">
                            <Link to="/Doce de Casca de Maracujá"><img src={Doce} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Doce de Casca de
                        Maracujá</p>
                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/Bolo de casca de abóbora"><img src={Bolo} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Bolo de Casca de
                        Abóbora</p>
                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/farofa de casca de melão"><img src={Farofa} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Farofa de Casca de
                        Melão</p>
                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/Brigadeiro de casca de banana"> <img src={Brigadeiro} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Brigadeiro de Banana</p>
                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/creme de couve-flor"><img src={Creme} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Creme de Couve - Flor</p>

                            </div>
                        </div>
                        <div className="card1">
                            <Link to="/patê de alho poró"><img src={Pate} className="img_dicas" /></Link>
                            <div className="nome">
                                <p className="titulo_receita">Patê de Alho Poró</p>

                            </div>
                        </div>
                    </div>
                    <Rodape />
                </div>
            </div>
        );
    }
}
export default Dicas;