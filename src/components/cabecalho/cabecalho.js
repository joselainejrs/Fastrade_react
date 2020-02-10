import React, { Component } from 'react';
import Menu from '../../assets/img/menu.png';
import Icon_menu from '../../assets/img/menu-button.png'
import '../../assets/css/cabecalho.css';
import Logotipo from '../../assets/img/FONTE-1.png';
import User from '../../assets/img/usuario.png';
import Lupa from '../../assets/img/search.png';
import { Link } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../../services/auth';



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    logout = () => {
        // Remove o token do localStorage
        localStorage.removeItem("usuario-fastrade");
        console.log(this.props)
        // Redireciona para o endereço '/'
        this.props.history.push("/home");
    }

    listaAtualizada = () => {
        fetch("https://localhost:5001/api/oferta/")
            .then(response => response.json())
            .then(data => this.setState({ listaNomeOferta: data }));
    }

    toggleIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen }, () => console.log(this.state.isOpen));
    }

    render() {

        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>

                <header>
                    <div className="container">
                        <div className="tudooo">

                            <div class="dropdown">
                                <img src={Icon_menu} alt="menu sanduiche" className="icone_sanduba" />
                                <div class="dropdown-content">

                                    <nav className="menuHeader_mobile">
                                        <ul className="quebrar_menu">
                                            <div className="pesquisaHamburguer">
                                                <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                                    className="txt_buscaHamburguer" />
                                                <img src={Lupa} alt="Buscar" className="btn_buscaHamburguer" />
                                            </div>
                                            <li className="frase_menuHamburguer"><Link to="/Home" className="cor-link">HOME</Link></li>
                                            <li className="frase_menuHamburguer"><Link to="/produtos" className="cor-link">PRODUTOS</Link></li>
                                            <li className="frase_menuHamburguer"><Link to="/Dicas" className="cor-link">DICAS</Link></li>
                                            <li className="frase_menuHamburguer"><Link to="/quemSomos" className="cor-link">QUEM SOMOS</Link></li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        </div>


                        <div className="sub_menu">
                            <img src={Logotipo} alt="Logo do site" className="logo" />
                            <div className="pesquisa">
                                <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                    className="txt_busca" />
                                <img src={Lupa} alt="Buscar" className="btn_busca" />
                            </div>

                            <div>
                                {/* <Link to="/login"><img src={User} alt="login" className="btn_login" /></Link> */}

                                {usuarioAutenticado() && parseJwt().Role === "3" ? (
                                    // Se o usuário for admnistrador
                                    <>
                                        <Link to="/PerfilAdministrador"><img src={User} alt="login" className="btn_login" /></Link>
                                    </>
                                ) : (
                                        usuarioAutenticado() && parseJwt().Role === "2" ? (
                                            // Se o usuário for Aluno
                                            <>
                                                <Link to="/PerfilComerciante"><img src={User} alt="login" className="btn_login" /></Link>
                                            </>
                                        ) : (
                                                usuarioAutenticado() && parseJwt().Role === "1" ? (

                                                    // Se o usuário não estiver logado
                                                    <>
                                                        <Link to="/PerfilConsumidor"><img src={User} alt="login" className="btn_login" /></Link>
                                                    </>
                                                ) : (
                                                        <>
                                                            <Link to="/login"><img src={User} alt="login" className="btn_login" /></Link>

                                                        </>
                                                    )
                                            )
                                    )}

                                {usuarioAutenticado() ? (
                                    <>
                                        <a href="/#" className="opcoes_perfil2" onClick={this.logout}>Sair</a >
                                    </>
                                ) : (
                                        this.props.headerprops
                                    )}

                            </div>
                        </div>
                        <nav className="menuHeader">
                            <ul>
                                <li><Link to="/Home">HOME</Link></li>
                                <li><Link to="/produtos">PRODUTOS</Link></li>
                                <li><Link to="/Dicas">DICAS</Link></li>
                                <li><Link to="/quemSomos">QUEM SOMOS</Link></li>
                            </ul>
                        </nav>
                    </div>

                </header>
            </div>
        );
    }
}

export default Header;