import "./style.css"
import Lupa from "../../assets/img/lupa.png"
import Refresh from "../../assets/img/Refresh.svg"
import Play from "../../assets/img/play.png"
import Play1 from "../../assets/img/play_1.png"
import Play2 from "../../assets/img/play_2.png"
import Play3 from "../../assets/img/play_3.png"
import Logo from "../../assets/img/logo.png"
import axios from "axios";
import Footer from "../../components/Footer";

import Parse from 'parse/dist/parse.min.js';
import Linhas from "../../components/LinhaCadOfertas";
const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function cadastroOfertas() {

    const [cadastroOferta, setcadastroOferta] = useState<any[]>([]);
    function listarcadastroO() {
        // event.preventDefault();
        console.log("teste Fiama");

        // /* console.log(cpf) */
        axios.get(`https://parseapi.back4app.com/parse/classes/cadastroOfertas`,
            {
                headers: {
                    'X-Parse-Application-Id': PARSE_APPLICATION_ID,
                    'X-Parse-REST-API-Key': PARSE_REST_API,
                    'X-Parse-Master-Key': MASTER_KEY,
                }
            }).then((resposta) => {
                if (resposta.status === 200) {
                    // Se a resposta for 201, a solicitação foi bem-sucedida
                    //200 pegar / 201 criar
                    //setMensagemAguarde("Enviado")
                    setcadastroOferta(resposta.data.results)
                    console.log("voce conseguiu acessar", resposta)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }

    useEffect(() => {
        //executa ação

        listarcadastroO();

    }, []);
    return (
        <section>
        <main id="main_cadastro_ofertas">
            <header>
                <div className="logo">
                    <Link to="../home/index.html">
                        <img src={Logo} alt="Logo da VolksWay" />
                    </Link>
                </div>
                <div>
                    <h1>Campanhas</h1>
                </div>
            </header>

            <section className="cad_ofertas">
                <aside></aside>
                <div className="cad_ofertas_collumn">
                    <div className="cad_ofertas_corpo">
                        <div className="cad_ofertas_pesquisa">
                            <input type="text" placeholder="Nome ou código" />
                            <Link to="">
                                <img src={Lupa} alt="" />
                            </Link>
                        </div>
                        <div className="cad_ofertas_btn">
                            <button>mais ações</button>
                            <button>excluir</button>
                            <button>novo</button>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr className="cad_ofertas_NomeCampos">
                                <td />
                                <td />
                                <td>Código</td>
                                <td>Nome da Propaganda</td>
                                <td>Tipo de propaganda</td>
                                <td>Posição do Banner</td>
                                <td>Usuario</td>
                                <td>Canal</td>
                                <td>Visível</td>
                            </tr>

                            {

                                cadastroOferta.map((cadastroOferta: any, indice: number) => {
                                    return <>
                                        <Linhas
                                           /*  key={indice} */
                                            codigo={cadastroOferta.codigo}
                                            Nome_propaganda={cadastroOferta.Nome_propaganda}
                                            Tipo_propaganda={cadastroOferta.Tipo_propaganda} 
                                            Posicao_banner={cadastroOferta.Posicao_banner} 
                                            usuario={cadastroOferta.usuario} 
                                            canal={cadastroOferta.canal} />
                                    </>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </section>
            <section className="cad_ofertas_AtuPaginas">
                <div className="cad_ofertas_passa_pagina">
                    <Link to="#">
                        <img src={Refresh} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={Play} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={Play3} alt="" />
                    </Link>
                    <Link to="">1</Link>
                    <Link to="">2</Link>
                    <Link to="">3</Link>
                    <Link to="">4</Link>
                    <Link to="">5</Link>
                    <Link to="">...</Link>
                    <Link to="#">
                        <img src={Play1} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={Play2} alt="" />
                    </Link>
                </div>
                <div>
                    <p>Página 1 de 10</p>
                </div>
            </section>
        </main>
        <Footer/>
        </section>
    )
}

export default cadastroOfertas;