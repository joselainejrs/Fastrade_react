import React from 'react';
import Logotipo from '../../assets/img/FONTE-1.png';
import User from '../../assets/img/user.png';
import Lupa from '../../assets/img/search.png';
import '../../assets/css/cabecalho.css';

function Header() {
    return (
        <div>
            <header>
            <div className="container">
                <div className="sub_menu">
                    <img src={Logotipo} alt="Logo do site" className="logo"/>
    
                    <div className="pesquisa">
                        <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                            className="txt_busca"/>
                        <img src={Lupa} alt="Buscar" className="btn_busca"/>
                    </div>
                   
                    <a href="index_comprador.html"><img src={User} alt="Entra em sua conta"/></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="produtos.html">PRODUTOS</a></li>
                        <li><a href="Dicas.html">DICAS</a></li>
                        <li><a href="Quem Somos .html">QUEM SOMOS</a></li>
                    </ul>
                </nav>
            </div>
            </header>
        </div>
    );
}

export default Header;