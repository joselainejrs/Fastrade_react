import React, { Component } from 'react';
import Home from '../../assets/img/home.png';
import Apple from '../../assets/img/apple.png';
import Dicas from '../../assets/img/dicas.png';
import Somos from '../../assets/img/somos.png';
import '../../assets/css/menuMobile.css';
import { Link } from 'react-router-dom';
import Lupa from '../../assets/img/search.png';


class MenuMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* menu amburguer */}

                {/* Botão do menu de hamburguer */}
                <div onClick={this.toggleIsOpen} id="btn-menu">
                    <span>X</span>
                </div>
                <input id="menu-hamburguer" type="checkbox" className="hamburguinho" />

                <label for="menu-hamburguer">
                    <div class="menuHamburguer">
                        <span class="hamburguer"></span>
                    </div>
                </label>

                <ul className="ulHamburguer">
                    <div className="englobaHamburguer">
                        <div className="pesquisaHamburguer">
                            <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                className="txt_buscaHamburguer" />
                            <img src={Lupa} alt="Buscar" className="btn_buscaHamburguer" />
                        </div>
                        <div className="parteHamburguer">

                            <li><Link to="/Home" className="frase_menuHamburguer">Home</Link></li>

                        </div>
                        <div className="parteHamburguer">

                            <li><Link to="/produtos" className="frase_menuHamburguer">Produtos</Link></li>

                        </div>
                        <div className="parteHamburguer">

                            <li><Link to="/Dicas" className="frase_menuHamburguer">Dicas</Link></li>

                        </div>
                        <div className="parteHamburguer">

                            <li><Link to="/quemSomos" className="frase_menuHamburguer">Quem Somos</Link></li>

                        </div>
                        <div className="parteHamburguer">

                            <li><Link to="/login" className="frase_menuHamburguer">Login</Link></li>

                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default MenuMobile;


