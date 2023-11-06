
import { Link } from "react-router-dom";
import "./style.css"
import imagemCaminhao from "../../assets/img/constellation-32.png"


function PopupCad() {
    return (
        <>
            <div id="PopupCad">
            <meta charSet="UTF-8" />
         
                <meta charSet="UTF-8" />
                <title>Popup</title>
                <link rel="stylesheet" href="style.css" />
                <div className="container">
                    <a className="button" href="#popup">
                        Ver Detalhe
                    </a>
                    <div className="popup" id="popup">
                        <div className="popup-inner">
                            <div className="imgCaminhao">
                                <img
                                    src={imagemCaminhao}
                                    alt=""
                                />
                            </div>
                            <div className="popupphoto">
                                <div className="Produto">
                                    <h1> Preencha os campos abaixo</h1>
                                    <div className="formulario">
                                        <div>
                                            <p>CPF/CNPJ</p>
                                            <input className="dadosdigitados" />
                                        </div>
                                        <div>
                                            <p>Telefone</p>
                                            <input className="telefone" />
                                        </div>
                                        <div>
                                            <p>E-mail</p>
                                            <input className="e-mail" />
                                        </div>
                                        <div className="btn_proximo">
                                            <a className="btnProximo" href="../cadastropessoal/index.html#">
                                                Cadastrar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a className="closepopup" href="#">
                                    X
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>



        </>
    )

}
export default PopupCad;