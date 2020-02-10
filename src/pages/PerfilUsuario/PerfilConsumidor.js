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

            listaUsuario: {

                idUsuario: parseJwt().IdUsuario,
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: React.createRef(),

            },
            listaEndereco: [],

            perfilUsuario: {
                idUsuario: parseJwt().IdUsuario,
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: React.createRef(),
                idEnderecoNavigation: {
                    idEndereco: parseJwt().IdEndereco,
                    nomeEndereco: "",
                    numero: "",
                    complemento: "",
                    cep: "",
                    bairro: "",
                    estado: "",
                },
                isEdit: true,
                erroMsg: "",
                sucessMsg: "",
            }
        }

        // this.postUsuario = this.postUsuario.bind(this);
    }

    //#region GET  Fetch
    componentDidMount() {
        this.getUsuario();
        // this.getEndereco();
    }

    //GET com Fetch
    getUsuario = async () => {

        await fetch("http://localhost:5000/api/usuario/" + parseJwt().IdUsuario)
            .then(response => response.json())
            .then(data => this.setState({ top: data }))
            .then(data => console.log(this.state.top))


    }

    // getEndereco = async () => {

    //     await fetch("https://localhost:5001/api/endereco/" + parseJwt().IdEndereco)
    //         .then(response => response.json())
    //         .then(data => this.setState({ top: data }))
    //         .then(data => console.log(this.state.top))


    // }
    //#region GET DE Axios


    // getEndereco = () => {
    //     //pegando id do usuario
    //     api.get('/endereco/' + parseJwt().IdEndereco)

    //         .then(response => {
    //             if (response.status === 200) {
    //                 this.setState({ listaEndereco: response.data })
    //             }
    //         })
    // }
    //#endregion

    //#endregion



    //#region POST

    // Cadastrar informação do usuario
    // postSetState = (input) => {
    //     this.setState({
    //         postUsuario: {
    //             ...this.state.postUsuario,
    //             [input.target.name]: input.target.value
    //         }
    //adicinamos um metodo callback para mostramos o objeto da oferta, apos o set state
    //     }, () => console.log("Objeto da oferta: ", this.state.postUsuario))
    // }

    // postUsuario = (p) => {

    //     p.preventDefault();
    //     console.log("Cadastrando");

    //     api.post('/usuario', this.state.postUsuario)
    //         .then(response => {
    //             console.log(response);
    //             this.setState({ sucessMsg: "Cadastro realizado com sucesso!" });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             this.setState({erroMsg: "O campo precisa ser preenchido corretamente"});
    //         })

    //     setTimeout(() => {
    //         this.postUsuario();
    //     }, 1500);

    // }
    //#endregion

    alterarStateUsuario = event => {
        this.setState({
            top: {
                ...this.state.top, [event.target.name]: event.target.value
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
        usuarioFormData.set("idUsuario", this.state.usuario.idUsuario);
        usuarioFormData.set("nomeRazaoSocial", this.state.usuario.nomeRazaoSocial);
        usuarioFormData.set("cpfCnpj", this.state.usuario.cpfCnpj);
        usuarioFormData.set("email", this.state.usuario.email);
        usuarioFormData.set("celularTelefone", this.state.usuario.celularTelefone);
        usuarioFormData.set("senha", this.state.usuario.senha);
        usuarioFormData.set("idEndereco", this.state.usuario.idEndereco);
        usuarioFormData.set("nomeEndereco", this.state.usuario.nomeEndereco);
        usuarioFormData.set("numero", this.state.usuario.numero);
        usuarioFormData.set("complemento", this.state.usuario.complemento);
        usuarioFormData.set("bairro", this.state.usuario.bairro);
        usuarioFormData.set("cep", this.state.usuario.senha);
        usuarioFormData.set("estado", this.state.usuario.estado);

        usuarioFormData.set('fotoUrlUsuario', this.state.perfilUsuario.fotoUrlUsuario.current.files[0], this.state.perfilUsuario.fotoUrlUsuario.value);

        apiFormData.put('/usuario/' + parseJwt().id, usuarioFormData)

            .then(() => {

                this.setState({ successMsg: "Perfil alterado com sucesso!" });
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
                                    <p className="titulo_usuario2">PERFIL USUÁRIO</p>

                                </div>
                            </section>

                            <div className="cabeca_adm2">

                                <div className="barra_user2">
                                    <div><Link to="/PerfilConsumidor" className="opcoes_perfil2">Perfil</Link></div>
                                  
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
                                                    placeholder="Nome Completo"
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