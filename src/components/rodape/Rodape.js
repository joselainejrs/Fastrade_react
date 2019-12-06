import React from 'react';
import '../../assets/css/footer.css';
import Localizacao from '../../assets/img/Agrupar.png';
import Logotipo from '../../assets/img/FONTE-1.png';

function Rodape() {   
    return (
        <div>
            <footer className="rodapePrincipal">
                <div className="container">
                    <div className="todo">
                        <div className="contato">
                            <p>telefone: (11) 0000-0000</p>
                            <p>Site: exemplo@fastrade.com</p>
                            <p>Email: frastrade@frastrade.com</p>
                        </div>
                        <div className="localizacao">
                            <a
                                href="https://www.google.com.br/maps/place/Escola+SENAI+de+Inform%C3%A1tica/@-23.5364985,-46.6483357,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5843deb99025:0xb23619858bc7e63e!8m2!3d-23.5364985!4d-46.646147"><img
                                    src={Localizacao} className="localicate" alt="localização" /></a>
                            <a href="#"><img src={Logotipo} className="logo" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Rodape;