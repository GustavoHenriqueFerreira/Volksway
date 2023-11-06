import "./style.css"
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import CardNoticiasRecentes from '../../components/CardNoticiasRecentes';
import Parse from 'parse/dist/parse.min.js';
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardOfertas from "../../components/CardOfertas";
import api from "../../utils/api";
import CardOfertasPneu from "../../components/cardOfertasPneu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

function Produtos() {
    const [conteudoBanner, setConteudoBanner] = useState<any[]>([]);
    const [conteudoOfertas, setConteudoOfertas] = useState<any[]>([]);
    const [conteudoPromocoes, setConteudoPromocoes] = useState<any[]>([]);
    const [conteudoNoticiasR, setConteudoNoticiasR] = useState<any[]>([]);

    function listarBanner() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/banner`,
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
                    setConteudoBanner(resposta.data.results)
                    console.log("entrouuu", resposta.data.results)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }

    function listarOfertas() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/ofertas`,
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
                    setConteudoOfertas(resposta.data.results)
                    console.log("entrouuu ofertas", resposta.data.results)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }

    function listarNoticiasR() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/noticias`,
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
                    setConteudoNoticiasR(resposta.data.results)
                    console.log("entrouuu", resposta)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }

    function listarPromocoes() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/promocoes`,
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
                    setConteudoPromocoes(resposta.data.results)
                    console.log("entrouuu", resposta.data.results)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }



    useEffect(() => {
        //executa ação
        listarBanner();
        listarOfertas();
        listarPromocoes();
        listarNoticiasR();

    }, []);

    return (
        <>
            <Header />
            <main id="produtos">
                <section>
                    <Banner conteudo={conteudoBanner} />
                </section>

                <div className="produtos_ofertas_h2 produtos_posicionamento">
                    <h2 />
                </div>

                <section>
                    <CardOfertas conteudo={conteudoOfertas} />
                </section>


                <section className="prod_promocoes produtos_posicionamento">

                    <h2>promoções</h2>
                    <p>as promoçoes do mês começaram!!<br />confira as melhores ofertas de peças do mercado feitas pelos
                        nossos parceiros</p>

                    <div className="carrossel">
                        <div className="cardPromocoes">
                            {
                                conteudoPromocoes.map((promocoes: any, indice: number) => {
                                    return <div key={indice}>
                                        <CardOfertasPneu
                                            id={promocoes.objectId}
                                            imagem={promocoes.imagem}
                                            titulo={promocoes.titulo}
                                            descricao={promocoes.descricao}
                                            preco={promocoes.preco}
                                            url={promocoes.url}
                                        />
                                    </div>
                                })
                            }
                        </div>

                    </div>

                </section>



                <div className="prod_noticias_h2 produtos_posicionamento">
                    <h2 />
                </div>

                <section id="CardNoticiasRecentes" >
                    <section className="prod_noticias_recentes">
                        {

                            conteudoNoticiasR.map((conteudoNoticiasR: any, indice: number) => {
                                return <>
                                    <CardNoticiasRecentes
                                        key={indice}
                                        titulo={conteudoNoticiasR.titulo}
                                        imagem={conteudoNoticiasR.imagem.url}
                                        descricao={conteudoNoticiasR.descricao}
                                        url={conteudoNoticiasR.url} />
                                </>
                            })
                        }
                    </section>
                </section>

            </main >
            <Footer />
        </>
    )
}
export default Produtos;