import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import usuario from '../../assets/img/usuario.png';
//importamos pagina de perfil do usuario 
import PerfilComerciante from '../PerfilUsuario/PerfilComerciante';
import PerfilProduto from './PerfilProduto';

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import perfil from '../../assets/css/perfil.css';

// importamos as dependencias de Route
import { Route, BrowserRouter as Router } from 'react-router-dom';



export default class PerfilConsumidor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lista: [],
            nome_razao_social: "",
            email: "",
            cpf_cnpj: "",
            celular_telefone: "",
            rua_av: "",
            numero: "",
            bairro: "",
            estado: "",
            cep: "",
            id_Usuario: "",
            id_Endereco: "",
            complemento: "",
            erroMensagem: ""
        }
    }

 // Atualiza estado genérico, para que seja feito uma só vez.
 atualizaEstado = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}

recebedados(event){
    event.preventDefault();

    // Limpa o conteúdo do state erroMensagem
    this.setState({ erroMensagem : '' })

    // Define que uma requisição está em andamento
    this.setState({ isLoading : true })

    let usuario = {
                    email: this.state.email,
                     senha: this.state.senha,
        nome_razao_social: this.state.nome_razao_social,
                 cpf_cnpj: this.state.cpf_cnpj,
        celular_telefone: this.state.celular_telefone,
                     rua_av: this.state.rua_av,
                        numero: this.state.numero,
                        bairro: this.state.bairro,
                        estado: this.state.estado,
                            cep: this.state.cep
    }
    api.post("/PerfilConsumidor", id_usuario, id_Endereco)
    .then(response => {

            // Exibe no console somente o token
            console.log("Meu token é: " + response.data.token)

            // Define base64 recebendo o payload do token
            var base64 = localStorage.getItem('usuario-gufos').split('.')[1]
            // exibe no console o valor de base64
            console.log(base64)

            // Exibe no console o valor do payload convertido para string
            console.log(window.atob(base64))

            // Exibe no console o valor do payload convertido para JSON
            console.log(JSON.parse(window.atob(base64)))

            // Exibe no console o tipo de usuário logado
            console.log(parseJwt().Role)

            if (parseJwt().Role === 'Administrador') {
                //console.log(this.props)
                this.props.history.push('/categorias');
            }
            else {
                this.props.history.push('/eventos');
            }
        }
        
    })
render() {
    return (

        <div className="cabeca">
            <div className="barra_lateral">
                <Link to="/PerfilConsumidor" className="opcoes">
                    Perfil
                        </Link>
            </div>
            <div className="conj_barra">
                <div className="pri_barra">
                    <div className="titulo_usuario">
                        <p>PERFIL DO USUARIO COMPRADOR</p>
                    </div>

                    <div className="dados_perf">
                        <form>
                            <div className="conj_img">
                                <input
                                    className="img_usuario"
                                    type="image"
                                    src={usuario}
                                    alt="Insire uma imagem"
                                    name="foto_Url_Usuario"

                                />
                            </div>
                        </form>
                        <div className="usuario_perfil">

                            <form onSubmit="">
                                <div className="item">
                                    <input
                                        className="estilo_input"
                                        placeholder="Nome Completo/Razão Social"
                                        type="text"
                                        name="nome_razao_social"
                                        onChange=""
                                        value="" />
                                </div>

                                <div className="item">
                                    <input
                                        className="estilo_input"
                                        placeholder="Email"
                                        type="text"
                                        name="email"
                                        onChange=""
                                        value="" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <form id="conj_perfil">
                        <div className="dados_principais">

                            <div className="item2">
                                <input
                                    className="estilo_input"
                                    placeholder="CNPJ"
                                    type="text"
                                    name="cpf_cnpj"
                                    onChange=""
                                    value="" />
                            </div>
                            <div className="item2">
                                <input
                                    className="estilo_input"
                                    placeholder="Telefone para contato"
                                    type="text"
                                    name="celular_telefone"
                                    onChange=""
                                    value="" />
                            </div>
                        </div>
                        <div className="dados_principais">
                            <div className="item2">
                                <input
                                    className="estilo_dados"
                                    placeholder="Endereço:"
                                    type="text"
                                    name="rua_av"
                                    onChange=""
                                    value="" />
                            </div>

                            <div className="item2">
                                <input
                                    className="estilo_dados"
                                    placeholder="Complemento"
                                    type="text"
                                    name="complemento"
                                    onChange=""
                                    value="" />
                            </div>
                            <div className="item2">
                                <input
                                    className="estilo_dados"
                                    placeholder=" Numero"
                                    type="text"
                                    name="numero"
                                    onChange=""
                                    value="" />
                            </div>
                        </div>
                        <div className="dados_principais">

                            <div className="item2">
                                <input
                                    className="estilo_dados"
                                    placeholder="CEP"
                                    type="text"
                                    name="cep"
                                    onChange=""
                                    value="" />
                            </div>
                            <div className="item2">
                                <input
                                    className="estilo_dados"
                                    placeholder="Bairro"
                                    type="text"
                                    name="bairro"
                                    onChange=""
                                    value="" />
                            </div>
                            <div className="item2">
                                <input
                                    className="estilo_dados"
                                    placeholder="Estado"
                                    type="text"
                                    name="estado"
                                    onChange=""
                                    value="" />
                            </div>
                        </div>
                    </form>
                </div>


                <div className="botao_ficha">
                    <div >
                        <Link to="/" className="botao_perfil">ALTERAR</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
}