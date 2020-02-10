// Se o documento for = a 14 o usuario é vendedor
import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';
import api from '../../services/api.js';
import apiFormData from '../../services/apiFormData.js';
import { parseJwt } from '../../services/auth';



//impotar link 
import { Link } from 'react-router-dom';


class cadastroProduto extends Component {


    constructor(props) {
        super(props);
        this.state = {
            top: [],
            listaOfertas: [],
            ListaProduto: [],

            postOferta: {
                IdUsuario: parseJwt().IdUsuario,
                quantidade: "",
                preco: "",
                validade: "",
                nomeProduto: "",
                descricaoDoProduto: "",
                idCatProduto: "",
                idProduto: "",
                fotoUrlOferta: React.createRef(),

                erroMsg: "",
                MsgSuccess: "",

                //modal
                // open: false,
                // openOferta: false
            }
        }
    }

    //#region GET
    componentDidMount() {
        this.getProduto();
        this.getOferta();
    }

    getProduto = () => {

        fetch('http://localhost:5000/api/produto')
            .then(x => x.json())
            .then(x => this.setState({ ListaProduto: x }))
    }

    getOferta = () => {

        fetch('http://localhost:5000/api/oferta')
            .then(x => x.json())
            .then(x => this.setState({ listaOfertas: x }))
    }
    //#endregion

    componentDidUpdate() {
        console.log("Atualizado")
    }


    //#region atualizar 
    alterarStateOferta = event => {
        this.setState({
            top: {
                ...this.state.top, [event.target.name]: event.target.value
            }
        });
    }

    alterarStatecadastro = event => {
        this.setState({
            listaOfertas: {
                ...this.state.listaOfertas, [event.target.name]: event.target.value
            }
        });
    }
    //#endregion

    //#region alterar 
    // Adicionamos um setState específico
    ImagemSetStateFile = (input) => {
        this.setState({
            postOferta: {
                ...this.state.postOferta, [input.target.name]: input.target.files[0]
            }
        })
    }
    //#endregion


    //#region POST

    postSetState = (input) => {
        this.setState({
            postOferta: {
                ...this.state.postOferta,
                [input.target.name]: input.target.value
            }
            //adicinamos um metodo callback para mostramos o objeto da oferta, apos o set state
        }, () => console.log("Objeto da oferta: ", this.state.postOferta))
    }


    // LimpaForm = () => {
    //     this.setState.preco: "",
    //     this.setState.quantidade ""
    //     this.setState.nomeProduto= ""
    //     this.setState.descricaoDoProduto= ""
    //     this.setState.validade= ""
    //     this.setState.fotoUrlOferta=""
    //     this.setState.idCatProduto=""

    // }
    postOferta = (event) => {

        event.preventDefault();

        console.log(this.state.postOferta)

        let oferta = new FormData();

        oferta.set("IdUsuario", this.state.postOferta.IdUsuario);
        oferta.set("idProduto", this.state.postOferta.idProduto);
        oferta.set("preco", this.state.postOferta.preco);
        oferta.set("quantidade", this.state.postOferta.quantidade);
        oferta.set("nomeProduto", this.state.postOferta.nomeProduto);
        oferta.set("descricaoDoProduto", this.state.postOferta.descricaoDoProduto);
        oferta.set("validade", this.state.postOferta.validade);
        oferta.set("idCatProduto", this.state.postOferta.idCatProduto);
        oferta.set('fotoUrlOfertaghfghfgh', this.state.postOferta.fotoUrlOferta.current.files[0]);
        oferta.set('fotoUrlOferta', this.state.postOferta.fotoUrlOferta.current.Value);


        console.log("Cadastrando");

        fetch('http://localhost:5000/api/oferta', {
            method: "POST",
            body: oferta,
        })
            .then(x => x.json())
            .then(x => {
                console.log(x);
                console.log("erro: ", x.erro);

                if(x.erro) {
                    this.setState({
                        erroMsg: x.mensagem
                    })

                    this.setState({
                        MsgSuccess: ""
                    })

                } else {
                    this.setState({
                        erroMsg: ""
                    })
                    this.getOferta();
                    this.setState({
                        MsgSuccess: "Cadastro efetuado com sucesso!"
                    })
                    // this.LimpaForm()
                }

            })
            .catch(error => {
                this.setState({
                    erroMsg: "Não é possível cadastrar. Verifique se não há campos vazios ou com dados incorretos."
                })
                
                this.setState({
                    MsgSuccess: ""
                })

                }               

            )

    }

    render() {

        return (

            <div>
                <Header></Header>
                <main>

                    <div className="container_cadastro">
                        <div className="card_cproduto">
                            <h1 className="titulo_cadastro">Cadastro de Produto</h1>

                            <form onSubmit={this.postOferta}>

                                <div className="cadastro_p">


                                    <div className="input_cadastro">
                                        <div className="input-button">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Nome Produto"
                                                id="nomeProduto"
                                                type="text"
                                                name="nomeProduto"
                                                value={this.state.postOferta.nomeProduto}
                                                required
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>



                                    <div className="input_cadastro">
                                         <div className="input-button">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Descriçao Do Produto"
                                                id="descricaoDoProduto"
                                                type="text"
                                                name="descricaoDoProduto"
                                                value={this.state.postOferta.descricaoDoProduto}
                                                required
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>

                                    <div className="input_cadastro">
                                     <div className="input-button">
                                            <input
                                                className="estilo_input3"
                                                placeholder="Quantidade"
                                                id="quantidade"
                                                type="number"
                                                name="quantidade"
                                                value={this.state.postOferta.quantidade}
                                                required
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="cadastro_pp">

                                    <div className="input_cadastro">
                                      <div className="input-button">
                                            <input
                                                className="estilo_input3"
                                                placeholder="Preco"
                                                id="preco"
                                                type="valor"
                                                name="preco"
                                                value={this.state.postOferta.preco}
                                                required
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>


                                    <div className="input_cadastro">
                                      <div className="input-button">
                                            <select
                                                className="estilo_input3"
                                                id="categorias"
                                                name="idProduto"
                                                type="file"
                                                onChange={this.postSetState}
                                                required
                                            >
                                                <option value="" >Tipo de Categoria</option>
                                                {
                                                    this.state.ListaProduto.map(function (o) {
                                                        return (
                                                            <option key={o.idProduto} value={o.idProduto}>
                                                                {o.idCatProdutoNavigation.tipo}
                                                            </option>
                                                        )
                                                    }.bind(this))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="input_cadastro">
                                        <div className="input-button">
                                            <input
                                                className="estilo_input3"
                                                placeholder="Validade"
                                                id="validade"
                                                type="date"
                                                name="validade"
                                                required
                                                value={this.state.postOferta.validade}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <input
                                        className=""
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        placeholder="Coloque uma imagem"
                                        aria-label="Coloque uma imagem"
                                        name="fotoUrlOferta"
                                        required
                                        ref={this.state.postOferta.fotoUrlOferta}
                                    />
                                </div>
                                {this.state.MsgSuccess && <div className="text-success">{this.state.MsgSuccess}</div>}
                                {this.state.erroMsg && <div className="text-danger">{this.state.erroMsg}</div>}

                                <div>
                                    <button
                                        type="submit"
                                        className="botao_cadastrarproduto">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </main>
                <Rodape></Rodape>


            </div>

        );
    }
}
export default cadastroProduto;
