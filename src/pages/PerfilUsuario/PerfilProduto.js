import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';
import maca from '../../assets/img/maca.jpg';
import azeitona from '../../assets/img/azeitona-verde-light-la-violetera-pote-200g.jpg';
import milho from '../../assets/img/milho.jpg';
import morango from '../../assets/img/morango.jpg';
import { Link } from 'react-router-dom';
import pproduto from '../../assets/css/pproduto.css';



export default class PerfilProduto extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Header></Header>
            <div className="conjunto_perfilp">
                <main class="main">

                    <article class="content">

                        <div className="barra">
                            <Link to="/PerfilComerciante" className="opcoes">Perfil</Link>
                            <Link to="/PerfilProduto" className="opcoes">Meu Produtos</Link>
                            <Link to="/cadastroProduto" className="opcoes">Cadastrar Produtos</Link>
                        </div>
                        <div className="produt"> 
                            <h3 class="content__title">PERFIL DE OFERTA</h3>
                            <ul class="product">

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={maca} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={morango} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={azeitona} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={milho} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                              </ul>              
                    </div>
                    </article>
                </main>
            </div>
            <Rodape></Rodape>
            </div>

        );
    }
}