import PencilDraw from "../../assets/img/Pencil Drawing.svg"
import Visivel from "../../assets/img/visivel.svg"
import Invisivel from "../../assets/img/invisivel.svg"

import { Link/* , useLocation  */ } from "react-router-dom";

function Linhas(props: any) {

    return (
        <>
        <tr className="cad_ofertas_campos">
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <Link to='#'>
                    <img src={PencilDraw}alt="" />
                </Link>
            </td>
            <td>{props.codigo}</td>
            <td>{props.Nome_propaganda} </td>
            <td>{props.Tipo_propaganda} </td>
            <td>{props.Posicao_banner} </td>
            <td>{props.usuario} </td>
            <td>{props.canal} </td>
            <td>
                <img src={Visivel} alt="" />
            </td>
        </tr>
        </>

    );
}

export default Linhas;