import React, { Component } from 'react';
import { render } from 'react-dom';
import usuario from '../../assets/img/usuario.png';
import api from '../../services/api.js';
import apiFormData from '../../services/apiFormData.js';
import { parseJwt } from '../../services/auth';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import perfilusuario from '../../assets/css/perfilusuario.css';



export default class PerfilConsumidor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: [],

            // listaUsuario: {

            //     idUsuario: parseJwt().IdUsuario,
            //     nomeRazaoSocial: "",
            //     cpfCnpj: "",
            //     email: "",
            //     senha: "",
            //     celularTelefone: "",
            //     fotoUrlUsuario: React.createRef(),



            perfilUsuario: {
                idUsuario: parseJwt().IdUsuario,
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: React.createRef(),
                Rua_Av: "",
                numero: "",
                complemento: "",
                cep: "",
                bairro: "",
                estado: "",
            },
            isEdit: true,
            erroMsg: "",
            sucessMsg: "",
            // }
        }

        // this.postUsuario = this.postUsuario.bind(this);
    }

    //#region GET  Fetch
    componentDidMount() {
        this.getUsuario();
        // this.getEndereco();
    }


    getUsuario = () => {
        api.get("usuario/" + parseJwt().IdUsuario)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ perfilUsuario: response.data })
                    // this.setState({ usuarioCadastrado: response.data })
                }
                console.log("respUser: ", this.state.perfilUsuario)
            })
    }
    alterarStateUsuario = event => {
        this.setState({
            top: {
                ...this.state.perfilUsuario, [event.target.name]: event.target.value
            }
        });
    }
    alterarSetStateFile = (input) => {
        this.setState({
            perfilUsuario: {
                ...this.state.perfilUsuario, [input.target.name]: input.target.files[0]
            }
        })
    }

    perfilUsuario = (event) => {

        event.preventDefault();

        // let usuario_alterado = this.state.usuario;

        let usuarioFormData = new FormData();
        usuarioFormData.set("idUsuario", this.state.perfilUsuario.idUsuario);
        usuarioFormData.set("nomeRazaoSocial", this.state.perfilUsuario.nomeRazaoSocial);
        usuarioFormData.set("cpfCnpj", this.state.perfilUsuario.cpfCnpj);
        usuarioFormData.set("email", this.state.perfilUsuario.email);
        usuarioFormData.set("celularTelefone", this.state.perfilUsuario.celularTelefone);
        usuarioFormData.set("senha", this.state.perfilUsuario.senha);
        usuarioFormData.set("Rua_Av", this.state.perfilUsuario.Rua_Av);
        usuarioFormData.set("numero", this.state.perfilUsuario.numero);
        usuarioFormData.set("complemento", this.state.perfilUsuario.complemento);
        usuarioFormData.set("bairro", this.state.perfilUsuario.bairro);
        usuarioFormData.set("cep", this.state.perfilUsuario.senha);
        usuarioFormData.set("estado", this.state.perfilUsuario.estado);

        usuarioFormData.set('fotoUrlUsuario', this.state.perfilUsuario.fotoUrlUsuario.current.files[0], this.state.perfilUsuario.fotoUrlUsuario.value);

        apiFormData.put('/usuario/' + parseJwt().IdUsuario, usuarioFormData)

            .then(() => {

                this.setState({ successMsg: "Perfil alterado com sucesso!" });
                this.setState({ isEdit: true });
            })
            .catch(error => {
                console.log(error);
            })

        setTimeout(() => {
            this.getUsuario();
        }, 1500);
    }

    habilitaInput = () => {
        this.setState({
            isEdit: false,
        })
    }


    render() {
        return (
            <div>
                <Header></Header>

                <main>
                    <div className="top_user2">
                        <div >
                            <section>
                                <div className="titulo_user2">
                                    <p className="titulo_usuario2">PERFIL FORNECEDOR</p>

                                </div>
                            </section>

                            <div className="cabeca_adm2">

                                <div className="barra_user2">
                                    <div className="link_perfil">
                                    <Link to="/PerfilComerciante" className="opcoes_perfil2"><div>Perfil</div></Link>                                   
                                    <Link to="/PerfilProduto" className="opcoes_perfil2"> <div>Minha Oferta</div></Link>
                                    <Link to="/cadastroProduto" className="opcoes_perfil2"><div>Cadastrar oferta</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="conj_barra2">
                                {/* modificar imagem para pegar o que será atribuido */}
                                <div className="img_user2">
                                    <img src={usuario} alt="Imagem do usuario" className="usuario" />
                                </div>



                                <form onSubmit={this.perfilUsuario} >

                                    <div className="conjunto_input">

                                        <div className="dados_principais">
                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil"
                                                    type="text"
                                                    placeholder="Razao Social"
                                                    name="nomeRazaoSocial"
                                                    value={this.state.perfilUsuario.nomeRazaoSocial}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled='true'
                                                />
                                            </div>

                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil"
                                                    placeholder="Email"
                                                    type="text"
                                                    name="email"
                                                    value={this.state.perfilUsuario.email}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>
                                        </div>

                                        <div className="dados_principais">

                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil"
                                                    placeholder="CNPJ"
                                                    type="text"
                                                    name="cpfCnpj"
                                                    value={this.state.perfilUsuario.cpfCnpj}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />

                                            </div>
                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil"
                                                    placeholder="Telefone para contato"
                                                    type="text"
                                                    name="celular_telefone"
                                                    value={this.state.perfilUsuario.celularTelefone}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>
                                        </div>

                                        <div className="dados_principais">
                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil2"
                                                    placeholder="Endereço:"
                                                    type="text"
                                                    name="Rua_Av"
                                                    value={this.state.perfilUsuario.Rua_Av}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>

                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil2"
                                                    placeholder="Complemento"
                                                    type="text"
                                                    name="complemento"
                                                    value={this.state.perfilUsuario.complemento}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>

                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil2"
                                                    placeholder="Numero"
                                                    type="text"
                                                    name="numero"
                                                    value={this.state.perfilUsuario.numero}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>
                                        </div>

                                        <div className="dados_principais">

                                            <div className="item_input2">
                                                <input
                                                    className="estilo_inputperfil2"
                                                    placeholder="CEP"
                                                    type="text"
                                                    name="cep"
                                                    value={this.state.perfilUsuario.cep}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>

                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil2"
                                                    placeholder="Bairro"
                                                    type="text"
                                                    name="bairro"
                                                    value={this.state.perfilUsuario.bairro}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>

                                            <div className="item_inputperfil2">
                                                <input
                                                    className="estilo_inputperfil2"
                                                    placeholder="Estado"
                                                    type="text"
                                                    name="estado"
                                                    value={this.state.perfilUsuario.estado}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>
                                        </div>

                                        <div className="btn_user">
                                            <div className="btn_perfil">
                                                <button
                                                    type="button"
                                                    onClick={this.habilitaInput}
                                                    className="botao_cadastrar2">Alterar</button>
                                            </div>

                                            <div className="btn_perfil">
                                                <button
                                                    type="submit"
                                                    className="botao_cadastrar2">Salvar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Rodape></Rodape>
            </div>
        );
    }
}