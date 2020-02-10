import React, { Component } from 'react';
import '../../assets/css/text.css';
import api from '../../services/api';

// import ProdutoVenda from '../../assets/img/comida.png';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";




class text extends Component {

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
      <div className="container_filtro">
        <div className="categoria_filtro">
          <label>Categoria:</label>
          <select name="idCatProduto" id="fodase"
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

        {
          this.state.listaOferta.map(function (o) {
            return (
              <div onClick={event => this.setState({ ativo: true })} class="card">
                <div class="card_conteudo">
                  <div className="card_oferta" key={o.idOferta}>
                    <div className="titulo_produto">
                      <img src={"http://localhost:5000/" + o.fotoUrlOferta} className="img_home" alt="Imagem de Arroz" />
                      <p className="produtor">{o.nomeProduto}</p>
                    </div>
                  </div>
                </div>
                <a href="#" class="btn_1Produto">ADICIONAR</a>
              </div>
            )
          }.bind(this))
        }


      </div>
    );
  }
}

export default text;