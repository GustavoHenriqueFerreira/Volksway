import { Link } from "react-router-dom";
import "./style.css"
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"

function SetaVoltar(props: any) {
    return (
        <>
            <Link className="div_voltar" to={`/${props.pagina}`}>  <img
                        src={Voltar}
                        alt=""
                        className="seta_voltar"
                    /> Voltar    
            </Link>
        </>

    )
}
export default SetaVoltar;