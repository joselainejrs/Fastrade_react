import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import { Link } from 'react-router-dom';





class cadastroProduto extends Component {
    //Alteramos o estado de um elemento através do construtor 
    constructor(props) {
        //Passamos o props para o componente com o super
        super(props);

        //Criamos um obj com o estado inicial do nosso form
        this.stateInicial = {
            nomeProd: '',
            precoProd: '',
            categoriaProd: '',
            descProd: '',
            valProd: '',
        }
        //setamos o state com o StateInicial
        this.state = this.stateInicial;
    }
    //a partir do event.target , pegaremos o name e o value do campo
    escutadorDeInput = event => {
        const { name, value } = event.target;

        //A cada evento disparado de mudança de input , queremos atualizar o estado do componente para que a mudança seja refletida na tela.Faremos isso por meio 
        //do setState() , para a partir do name , colocar o value
        this.setState({
            [name]: value
        })
    }
    //Método que irá a partir do props , chamar o escutadorDeSubmit
    submitFormulario = () => {
        //Verificamos o retorno da chamada do método valida ,quando o botão salvar do formulario enviar as informações , adicionando um elemento na tela


    }

    render() {
        const { nomeProd, PrecoProd, descProd, valProd } = this.state;
        return (
            <div className="container">
                <div className="card">

                    <h1 className="titulo_cadastro">Cadastro de Produto</h1>
                    <div className="conjunto" >
                        <div className="form-group">
                            <label htmlFor="nomeProd">Nome do Produto</label>
                            <div className="input-button">
                                <input
                                    id="nomeProd"
                                    type="text"
                                    name="NomeProd"
                                    value={nomeProd}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="precoProd">Preço do Produto</label>
                            <div className="input-button">
                                <input id="precoProd"
                                    type="number"
                                    name="PrecoProd"
                                    value={PrecoProd}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="catProd">Categoria do Produto</label>
                            <div className="input-button">
                                <select>
                                    <option value="volvo">Grãos</option>
                                    <option value="saab">Enlatado</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>

                            </div>
                        </div>


                        <div className="form-group">
                            <label htmlFor="descProd">Descrição do Produto</label>
                            <div className="input-button">
                                <input id="descProd"
                                    type="text"
                                    name="DescProd"
                                    value={descProd}
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="valProd">Validade do Produto</label>
                            <div className="input-button">
                                <input id="valProd"
                                    type="date"
                                    name="ValProd"
                                    value={valProd}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="buttons-area">
                        <button
                            type="submit"
                            onClick=""
                            value="Submit"
                            className="botao">SALVAR</button>
                        <div>
                            <button
                                type="submit"
                                onClick=""
                                value="Submit"
                                className="botao">SAIR</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default cadastroProduto;