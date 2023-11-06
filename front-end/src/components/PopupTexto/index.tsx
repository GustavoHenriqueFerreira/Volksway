
import { Link } from "react-router-dom";
import "./style.css"
import imagemCaminhao from "../../assets/img/constellation-32.png"


function PopupTexto() {
    return (
        <>
            <div id="PopupTexto">
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
                                    src= {imagemCaminhao}
                                    alt=""
                                />
                            </div>
                            <div className="popupphoto">
                                <div className="Produto">
                                    <h1>CONSTELLATION 17.210 4X2.</h1>
                                    <ul className="texto">
                                        <li>Motor: D0834LF08 </li>
                                        <li>Potência Líq. Máx:</li>
                                        <li>Torque Líq. Máx:Nm @ rpm (*) 750 @ 1.200 - 1.800</li>
                                        <li>Transmissão Manual: Eaton / FS 5406-A</li>
                                        <li>Peso Bruto Total: Homologado (Brasil) 16.000 kg </li>
                                    </ul>
                                </div>
                                <a className="closepopup" href="#">
                                    X
                                </a>
                            </div>
                            <a className="closepopup" href="#">
                                X
                            </a>
                        </div>
                    </div>
                    <a className="closepopup" href="#">
                        X
                    </a>
                </div>
            </div>

        </>
    )

}
export default PopupTexto;