import "./style.css"

import { Link } from "react-router-dom";


function BotaoCadastrar() {

    return (

        <div id="botaoCadastrar">
            <Link to="/" className="btn_cadastrar">Cadastrar-se</Link>
        </div>

        
    )

}
export default BotaoCadastrar;