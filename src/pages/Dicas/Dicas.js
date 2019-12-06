import React, { Component } from 'react';

import Macarrao from '../../assets/img/macarrao.png';
import Arroz from '../../assets/img/arrozBR.png';
import Pudim from '../../assets/img/pudim.png';
import Doce from '../../assets/img/docemaracuja.png';
import Bolo from '../../assets/img/bolo.png';
import Farofa from '../../assets/img/farofa.png';
import Brigadeiro from '../../assets/img/brigadeiro.png';
import Creme from '../../assets/img/cremecouve.png';
import Pate from '../../assets/img/patealho.png';
import '../../components/rodape/Rodape';
import Cabecalho from '../../components/cabecalho/cabecalho';
import '../../components/rodape/Rodape';
import Rodape from '../../components/rodape/Rodape';

//link
import {Link} from 'react-router-dom'

class Dicas extends Component {
    render() {
        return (
            <div>
                <Cabecalho/>
                <div className="banner_dicas">
                    <p>DICAS</p>
                </div>
                {/* // <!-- <img src="imagens/banner.png"> --> */}
                <div class="frase">
                    <p>Não sabe o que fazer com os restos dos alimentos???</p>
                    <p>Segue algumas dicas!!</p>
                </div>

                <div class="container_pai">
                    <div>
                        <Link to="/Receitas"><img src={Macarrao} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita"> Macarrão de Talos</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Pudim"><img src={Pudim} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Pudim de Pão Amanhecido </p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Arroz"><img src={Arroz} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Arroz Brasileirinho</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Doce de Casca de Maracujá"><img src={Doce} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Doce de Casca de
                        Maracujá</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Bolo de casca de abóbora"><img src={Bolo} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Bolo de Casca de
                        Abóbora</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/farofa de casca de melão"><img src={Farofa} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Farofa de Casca de
                        Melão</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/brigadeiro de casca de banana"> <img src={Brigadeiro} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Brigadeiro de Casca
                        de Banana</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/creme de couve-flor"><img src={Creme} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Creme de Couve - Flor</p>

                        </div>
                    </div>
                    <div>
                        <Link to="/patê de alho poró"><img src={Pate} class="img" /></Link>
                        <div class="nome">
                            <p class="titulo receita">Patê de Alho Poró</p>

                        </div>
                    </div>
                    <Rodape/>
                </div>
            </div>
        );
    }
}
export default Dicas;