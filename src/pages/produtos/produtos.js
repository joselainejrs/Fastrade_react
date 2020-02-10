import React, { Component } from 'react';
// import Laranja from '../../assets/img/laranja.jpg';
import api from '../../services/api';
import Maca from '../../assets/img/maca.jpg';
import Card from '../../assets/img/Agrupar 14.png';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


class Produtos extends Component {

    constructor() {
        super()
    
        this.state = {
          listaOferta: [],
          listaCategoria: [],
    
    
          getOferta: {
            idOferta: "",
            nomeOferta: "",
            marca: "",
            validade: "",
            quantVenda: "",
            preco: "",
            imagem: React.createRef(),
            descricao: "",
            idUsuario: "",
            idProduto: ""
          },
    
          setStateFiltro: "",
          filtro: ""
        }
    
    
      }
      componentDidMount() {
    
        this.getCategoria();
        this.getOferta();
      }
    
      getCategoria = () => {
        api.get('/catproduto')
          .then(response => {
            if (response.status === 200) {
              this.setState({ listaCategoria: response.data });
            }
          })
      }
      getOferta = () => {
        api.get('/oferta')
          .then(response => {
            if (response.status === 200) {
              this.setState({ listaOferta: response.data });
            }
          })
      }
    
      //Método para filtrar a categoria
      getFiltro = () => {
        api.get('/oferta/filtrarcategoria/' + this.state.setStateFiltro)
          .then(response => {
            if (response.status === 200) {
              this.setState({ listaOferta: response.data });
              console.log(response)
            }
          })
    
      }
    
      atualizaSelect = (value) => {
        (value === "Todos") ? setTimeout(() => {
          this.getOferta()
      }, 1000) :
        this.setState({ setStateFiltro: value })
        setTimeout(() => {
          this.getFiltro(this.state.filtro)
        }, 500);
      }
    
    


    render() {
        return (
            <div>
                <div>
                    <Header />

                    <div className="container_filtro">
        <div className="busca">
          <label className="ordenar">Categoria:</label>
          <select name="idCatProduto" className="filtroProduto" id="filtroo"
            onChange={(e) => this.atualizaSelect(e.target.value)}
          >

            <option value="Todos"> Todos </option>

            {
              this.state.listaCategoria.map(function (c) {
                return (
                  <option
                    key={c.idCatProduto}
                    value={c.tipo}
                  >
                    {c.tipo}
                  </option>
                )
              }.bind(this))
            }
          </select>
        </div>
        
        </div>

                    <div className={this.state.ativo ? 'modal_container' : ''} id="modal-produto">
                        <div className={this.state.ativo ? 'modal ativo' : 'modal'}>
                                    {
                              this.state.listaOferta.map(   
                                function (oferta) {
                                    return (
                            <div className="modal_content">
                                <div>
                                    <button onClick={event => this.setState({ ativo: false })} className="fechar">x</button>
                                </div>
                                <div className="produto">
                                    <div>
                                        <img src={"http://localhost:5000/" + oferta.fotoUrlOferta} className="fotoProduto" />
                                    </div>
                                    <div className="conteudoModal">            
                                        <div className="conteudoModal2">
                                            <p className="produtor">{oferta.nomeProduto}</p>                                   
                                            <p>{oferta.preco}</p>
                                        </div>
                                        <div className="buttomModal">
                                            <a href="#" class="btn_1 ">ADICIONAR</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="descricaoModal">
                                    <h1 className="descricaoProdutoModal btn_2">Descrição do produto</h1>
                                <p>{oferta.descricaoDoProduto}</p>
                                </div>
                            </div>
                               );
                            }
                          .bind(this)

                        )
                      }
                        </div>
                    </div>


                    <div className="container_cards">                 
                        {
                            this.state.listaOferta.map(
                                function (oferta) {
                                    return (
                                        <div onClick={event => this.setState({ ativo: true })} class="card">
                                            <div class="card_conteudo">

                                                {/* <img src={Laranja} alt="" /> */}
                                                <img src={"http://localhost:5000/" + oferta.fotoUrlOferta} className="img_home" alt="Imagem de Arroz" />
                                                <p className="produtor">{oferta.nomeProduto}</p>
                                                <p className="preco">R${oferta.preco}</p>
                                                {/* <button className="btn_1" onClick={() => this.manipulaModal(oferta)}>ADICIONAR</button> */}
                                                {/* <a href="#" className="btn_1">ADICIONAR</a> */}
                                                </div>
                                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                                            </div>
                                            );
                                        }
                                            .bind(this)
                                    )
                                }
        


                        <p className="vermais"><a href="" className="btn_1">Ver Mais</a></p>

                                            <div className="englobaCard">
                                                <img src={Card} alt="" className="card2" />
                                            </div>

                                        </div>

                                        <MDBContainer>
                                            <MDBModal isOpen={this.state.ModalGetoferta} toggle={this.toggleGetoferta}>
                                                <MDBModalHeader toggle={this.toggleGetoferta}> Produtos </MDBModalHeader>
                                                <MDBModalBody>
                                                    (.....)
                    
                        </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                                    <MDBBtn color="primary">Save changes</MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>
                                        </MDBContainer>
                </div>
                </div>
                );
            }
        }
        
        export default Produtos;
        
