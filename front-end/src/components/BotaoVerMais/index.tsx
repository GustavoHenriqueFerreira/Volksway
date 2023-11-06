import { Link } from "react-router-dom";
import "./style.css"


function BotaoVerMais() {
    return (
        <div id="botaoVerMais">
            <Link className="produtos_btn_banner" to="#"> ver mais</Link>
        </div>
    )

}
export default BotaoVerMais;