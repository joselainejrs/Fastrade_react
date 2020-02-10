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
import perfiladm from '../../assets/css/perfiladm.css';



export default class PerfilAdministrador extends Component {

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
        this.getEndereco();
    }

    //GET com Fetch
    getUsuario = async () => {

        await fetch("https://localhost:5001/api/usuario/" + parseJwt().IdUsuario)
            .then(response => response.json())
            .then(data => this.setState({ top: data }))
            .then(data => console.log(this.state.top))


    }

    getEndereco = async () => {

        await fetch("https://localhost:5001/api/endereco/" + parseJwt().IdEndereco)
            .then(response => response.json())
            .then(data => this.setState({ top: data }))
            .then(data => console.log(this.state.top))


    }

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
        usuarioFormData.set("email", this.state.usuario.email);


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
                    <div className="top_user">
                        <section>
                            <div className="titulo_user">
                                <p className="titulo_usuario">PERFIL DO ADMINISTRADOR</p>
                            </div>
                        </section>
                        <div className="cabeca_adm">

                            <div className="barra_user">
                                <Link to="/PerfilAdministrador" className="opcoes_perfil"> Perfil</Link>
                                <Link to="/Produto" className="opcoes_perfil">Produto</Link>
                            </div>

                            <div className="conj_barra">

                                <div className="img_user">
                                    <img src={usuario} alt="Imagem do usuario" className="usuario" />
                                </div>

                                <div className="form_perfil">
                                    <form onSubmit={this.perfilUsuario} className="">

                                        <div className="item_input">
                                            <input
                                                className="estilo_inputadm"
                                                placeholder="Razão Social"
                                                type="text"
                                                name="nomeRazaoSocial"
                                                value={this.state.top.nomeRazaoSocial}
                                                onChange={this.alterarStateUsuario}
                                                disabled='true'
                                            />
                                        </div>

                                        <div className="item_input">
                                            <input
                                                className="estilo_inputadm"
                                                placeholder="Email"
                                                type="text"
                                                name="email"
                                                value={this.state.top.email}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Rodape></Rodape>
            </div>
        );
    }
}