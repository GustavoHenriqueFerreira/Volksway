import { Link } from "react-router-dom";
import "./style.css"


function BotaoProximo() {
    return (
        <div className="botaoProximo">
            <Link className="produtos_btn_banner" to="#"> Proximo</Link>
        </div>
    )

}
export default BotaoProximo;