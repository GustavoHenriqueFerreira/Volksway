import { Link } from "react-router-dom";
import "./style.css"

function BotaoAlongadoVerMais(props: any) {
    return (
        <div id="botaoAlongado">
            <Link className="prod_btn_noticias" to={`${props.redirect}`}>ver mais</Link>
        </div>
    )
}
export default BotaoAlongadoVerMais;