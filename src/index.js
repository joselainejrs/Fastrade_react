import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';

//Paginas criadas
import PerfilComerciante from './pages/PerfilUsuario/PerfilComerciante';
import PerfilConsumidor from './pages/PerfilUsuario/PerfilConsumidor';
import PerfilProduto from './pages/PerfilUsuario/PerfilProduto';


// Realizamos a criação das Rotas:
const Rotas = (
    <Router>
        <div>
            <Route path="/PerfilComerciante" component={PerfilComerciante} />
            <Route path="/PerfilConsumidor" component={PerfilConsumidor} />
            <Route path="/PerfilProduto" component={PerfilProduto} />
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();