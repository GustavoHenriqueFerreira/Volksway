import { Link } from "react-router-dom";
import "./style.css"

function BotaoFormulario(props: any) {
    return (
        <>
            {props.tipo === "formulario" &&
                <div className="btn_proximo">
                    <button className="btnProximo">{props.texto}</button>
                </div>
            }
            {props.tipo === "link" &&
                <div className="btn_proximo"><Link
                    className="btnProximo"
                    to={`${props.url}`}>
                    {props.texto}
                </Link>
                </div>
            }
        </>
    )

}
export default BotaoFormulario;