import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import usuario from '../../assets/img/usuario.png';
//importamos pagina de perfil do usuario 
import PerfilConsumidor from '../PerfilUsuario/PerfilConsumidor';
import PerfilProduto from '../PerfilUsuario/PerfilProduto';

//impotar link 
import {Link} from 'react-router-dom';

//importar o css
import perfil from '../../assets/css/perfil.css';

// importamos as dependencias de Route
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default class PerfilComerciante extends Component {
    render() {
        return (
            <div className="cabeca">
                <div className="barra_lateral">
                    <Link to="/PerfilComerciante" className="opcoes">Perfil</Link>
                    <Link to="/PerfilProduto" className="opcoes">Meu Produtos</Link>
                    <Link to="/" className="opcoes">Cadastrar Produtos</Link>
                </div>
                <div className="pri_barra">
                    <div className="titulo_usuario">
                        <p>PERFIL DO USUARIO COMERCIANTE</p>
                    </div>

                    <div className="dados_perf">
                        <div> <img src={usuario} alt="Insire uma imagem" className="img_usuario"/></div>
                        <div className="usuario_perfil">
                            <p className="user_usuario">Joseliano Romao Soares</p>
                            <p className="user_usuario" > 39 anos</p>
                            <p className="user_usuario" >joseliano@gmail.com</p>
                        </div>
                    </div>

                    <div className="titulo_usuario">
                        <p >DADOS COMPLEMENTARES</p>
                    </div>

                    <div className="conj_perfil">

                        <form action="/action_page.php" className="usuario_input">
                            <input type="text" name="firstname" value="00.000.000-0" className="caixa_usuario" />
                            <input type="text" name="firstname" value="Rua Senai N:10" className="caixa_usuario" />
                        </form>

                        <form action="/action_page.php" class="usuario_input">
                            <input type="text" name="firstname" value="000.000.000-00" className="caixa_usuario" />
                            <input type="text" name="firstname" value="1 andar" className="caixa_usuario" />
                        </form>

                        <form action="/action_page.php" class="usuario_input">
                            <input type="text" name="firstname" value="01/11/1980" className="caixa_usuario" />
                            <input type="text" name="firstname" value="00000-000" className="caixa_usuario" />
                        </form>

                        <form action="/action_page.php" class="usuario_input">
                            <input type="text" name="firstname" value="Brasileiro" className="caixa_usuario" />
                            <input type="text" name="firstname" value="Sao Paulo" className="caixa_usuario" />
                        </form>
                    </div>

                    <div className="botao_ficha">
                        <div className="botao_perfil"><Link href="#">ALTERAR</Link></div>
                    </div>
                </div>
            </div>

        );
    }
}