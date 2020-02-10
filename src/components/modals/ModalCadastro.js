// import React, { Component } from 'react';
// import '../../assets/css/CadastroProduto.css';
// import api from '../../services/api.js';




// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });


// class ModalCadastro extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//             listaOfertas: [],

//             getOferta: {
//                 quantidade: "",
//                 preco: "",
//                 validade: "",
//                 nomeProduto: "",
//                 descricaoDoProduto: "",
//                 idCatProduto: "",
//             },

//             erroMsg: "",
//             successMsg: "",
//             openCadastro: this.props.open_modal
//         }
//     }

//     postSetState = (input) => {
//         this.setState({
//             getOferta: {
//                 ...this.state.getOferta, [input.target.name]: input.target.value
//             }
//         })
//     }
//     getOferta = (c) => {

//         c.preventDefault();

//         api.get('/Oferta', this.state.getOferta)
//             .then(response => {
//                 this.setState({ response })
//                 console.log("Cadastrado concluido: ", response.data);
//             }
//             )
//         setTimeout(() => {
//             this.props.fechar_modal();
//             { this.setState({ erroMsg: "" }) }
//         }, 2000);
//     }


//     render() {
//         return (
//             <div>
//                 <div>
//                     <section id="modal-container" class="container">

//                         <div class="modal">
//                             <header class="modal-header">
//                                 <h3 class="modal-header__title">Detalhes do Produto</h3>
//                                 <button id="btnClose" class="button">Fechar</button>
//                             </header>
//                             <div class="modal__body">

//                                 <div class="modal__img">
//                                     <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
//                                 </div>

//                                 <div class="modal-info">
//                                     <h4 class="modal-info__name">Nome do Produto</h4>
//                                     <p class="modal-info__description">Descrição do Produto</p>
//                                     <strong class="modal-info__price">R$ 500,00</strong>
//                                 </div>
//                             </div>

//                         </div>
//                     </section>
//                 </div>
//             </div>
//         );
//     }
// }
// export default ModalCadastro;
