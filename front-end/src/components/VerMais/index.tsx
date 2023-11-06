import "./style.css"
import imagem from "../../assets/img/banner_produto.png"
//rotas
import { Link } from "react-router-dom";

function VerMais() {
    return (
        <>
            <div id="verMais">
                    <Link  to={"/"} className="produtos_btn_banner">Ver Mais</Link>
            </div>
        </>
    )
} 
export default VerMais;