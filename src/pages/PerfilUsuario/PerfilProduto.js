import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import Foto from '../../assets/img/foto.png';
import Continuar from '../../assets/img/continua.png';
import Lixeira from '../../assets/img/lixeira.png';

//importamos pagina de perfil do usuario 

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import pproduto from '../../assets/css/pproduto.css';

//importamos as dependencias de Route
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default class PerfilProduto extends Component{
    render() {
        return (
            <div className="cabeca_produto">

            <div className="barra_produto">
                <Link to="/" className="opcoes">Perfil</Link>
                <Link to="/" className="opcoes">Meu Produtos</Link>
                <Link to="/" className="opcoes">Cadastrar Produtos</Link>
            </div>

            <div className="pri_produto">

                <div>
                    <h1 className="pproduto">MEUS PRODUTOS</h1>
                </div>

                <div className="conjunto">

                    <div className="retagular">

                        <div className="circulo"></div>

                        <div className="img_inserir"><img src={Foto} alt="Insire uma imagem" width="45px"/></div>
                        
                        <form action="" className="usuario_produto">
                            <input type="text" name="firstname" value="Arroz Branco - 5kg" className="pdescricao" />
                        </form>

                        <form action="/action_page.php" class="usuario_produto">
                            <input type="text" name="firstname" value="R$ 10,00" className="descricao" />
                        </form>

                        <div className="detalhes"><img src={Continuar} alt="Quer saber mais informações?" width="20px"/></div>

                        <div className="lixeira"><img src={Lixeira} alt="lixeira" width="20px"/></div>
                    </div>
                </div>
            </div>
        </div>
          
        );
    }
}