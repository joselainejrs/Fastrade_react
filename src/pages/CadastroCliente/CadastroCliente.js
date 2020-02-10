import React, { Component } from 'react';
import '../../assets/css/CadastroCliente.css';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';



class CadastroCliente extends Component {

    constructor() {
        super()
        this.state = {
            CadastrarCliente: {
                idTipoUsuario: "",
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                ruaAv: "",
                numero: "",
                cep: "",
                bairro: "",
                estado: "",
                complemento: ""


            },

        }
    }
    postSetState = (input) => {
        this.setState({
            CadastrarCliente: {
                ...this.state.CadastrarCliente,
                [input.target.name]: input.target.value
            }
        })
    }


    CadastrarCliente = (e) => {
        e.preventDefault();

        // Declara um objeto do tipo FormData, já que o Backend recebe este tipo.
        let usuario = new FormData();



        usuario.set("idTipoUsuario", this.state.CadastrarCliente.idTipoUsuario);
        usuario.set("nomeRazaoSocial", this.state.CadastrarCliente.nomeRazaoSocial);
        usuario.set('cpfCnpj', this.state.CadastrarCliente.cpfCnpj);
        usuario.set('email', this.state.CadastrarCliente.email);
        usuario.set('senha', this.state.CadastrarCliente.senha);
        usuario.set('celularTelefone', this.state.CadastrarCliente.celularTelefone);
        usuario.set('ruaAv', this.state.CadastrarCliente.ruaAv);
        usuario.set('numero', this.state.CadastrarCliente.numero);
        usuario.set('cep', this.state.CadastrarCliente.cep);
        usuario.set('bairro', this.state.CadastrarCliente.bairro);
        usuario.set('estado', this.state.CadastrarCliente.estado);
        usuario.set('complemento', this.state.CadastrarCliente.complemento);

        // Se o documento for = a 14 o usuario é vendedor
        if (this.state.CadastrarCliente.cpfCnpj.length === 14) {
            usuario.set("idTipoUsuario", 2)
            // Se o documento for = a 11 ele é cliente
        } else if (this.state.CadastrarCliente.cpfCnpj.length === 11) {
            usuario.set("idTipoUsuario", 1)
        }
        console.log(this.state.CadastrarCliente);

        fetch('http://localhost:5000/api/usuario', {
            method: "POST",
            body: usuario,
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container_cadastro2" >

                    <div className="card_cliente">
                        <form method="POST" id="form_cadastro" onSubmit={this.CadastrarCliente}>
                            <div className="formulario_cadastro">



                                <h1 className="titulo_cadastro">Criar uma conta</h1>

                                <div className="tipocliente">
                                    <span className="tx_usuario" >Tipo de usuario </span>
                                </div>

                                <div className="tipocliente">
                                    <div className="c_usuario">
                                        <p className="t_usuario">Consumidor:</p>
                                        <input
                                            type="radio"
                                            name="idTipoUsuario"
                                            value={1}
                                            onChange={this.postSetState}
                                            className="radio_casdastro"
                                        />
                                    </div>

                                    <div className="c_usuario">
                                        <p className="t_usuario">Fornecedor:</p>
                                        <input
                                            type="radio"
                                            name="idTipoUsuario"
                                            value={2}
                                            onChange={this.postSetState}
                                            className="radio_casdastro"
                                        />
                                    </div>
                                </div>


                                <div className="conj_input_cadastra" >

                                    <div className="">

                                        <div className="dados_principais">

                                            <div className="item_input2">
                                                <input
                                                    className="estilo_input"
                                                    placeholder="Digite o seu email "
                                                    type="text"
                                                    name="email"
                                                    value={this.state.CadastrarCliente.email}
                                                    onChange={this.postSetState}
                                                />
                                            </div>

                                            <div className="item_input2">
                                                <input
                                                    className="estilo_input"
                                                    placeholder="Digite o nome completo "
                                                    type="text"
                                                    name="nomeRazaoSocial" aria-label="Digitar o nome copleto"
                                                    value={this.state.CadastrarCliente.nomeRazaoSocial}
                                                    onChange={this.postSetState}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dados_principais">
                                        <div className="item_input2">
                                            <input
                                                className="estilo_input"
                                                type="text"
                                                placeholder="Digite seu telefone"
                                                name="celularTelefone" aria-label="Digitar seu telefone"
                                                value={this.state.CadastrarCliente.celularTelefone}
                                                onChange={this.postSetState}
                                            />
                                        </div>

                                      

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input"
                                                type="text"
                                                placeholder="Digite o CNPJ/CPF"
                                                name="cpfCnpj" aria-label="Digitar o CNPJ"
                                                value={this.state.CadastrarCliente.cpfCnpj}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>

                                    <div className="dados_principais">
                                    <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Digite uma senha "
                                                type="text"
                                                name="senha"
                                                value=""
                                                value={this.state.CadastrarCliente.senha}
                                                onChange={this.postSetState}
                                            />
                                        </div>

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                type="text"
                                                placeholder="Digite o Endereço"
                                                name="ruaAv" aria-label="Digitar o endereço"
                                                value={this.state.CadastrarCliente.ruaAv}
                                                onChange={this.postSetState}
                                            />
                                        </div>

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                type="text"
                                                placeholder="Digite seu CEP"
                                                name="numero" aria-label="numero"
                                                value={this.state.CadastrarCliente.numero}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                       
                                    </div>
                                    <div className="dados_principais">
                                    <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                type="text"
                                                placeholder="complemento"
                                                name="complemento" aria-label="Digitar o complemento"
                                                value={this.state.CadastrarCliente.complemento}
                                                onChange={this.postSetState}

                                            />
                                        </div>
                                         <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                type="text"
                                                placeholder="Bairro"
                                                name="bairro" aria-label="Digitar o Bairro"
                                                value={this.state.CadastrarCliente.bairro}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                      <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                type="text"
                                                placeholder="Estado"
                                                name="estado" aria-label="Digitar o Estado"
                                                value={this.state.CadastrarCliente.estado}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>

                                    {/* <div>
                                        <input
                                            type="file"
                                            placeholder="Coloque uma foto sua"
                                            aria-label="Coloque uma foto sua"
                                            name="fotoUrlUsuario"
                                            ref={this.state.CadastrarCliente.fotoUrlUsuario}
                                        />
                                    </div> */}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="botao_cadastrar2">Salvar</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div >
                <Rodape></Rodape>
            </div>

        );
    }
}

export default CadastroCliente;