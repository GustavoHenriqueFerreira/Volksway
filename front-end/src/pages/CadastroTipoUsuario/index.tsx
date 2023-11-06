import "./style.css"
import { Link } from "react-router-dom";
import Motorista from "../../assets/img/img_cadastroMotorista_semFundo.png"
import AdmFrota from "../../assets/img/img_cadastroAdmDeFrota_semFundo.png"
import Proprietario from "../../assets/img/img_cadastroProprietario_semFundo.png"
import IlustracaoPessoas from "../../assets/img/img_ilustracaoPessoasComBalao_semFundo.png"
import { useState } from "react";
import SetaVoltar from "../../components/SetaVoltar";
import BotaoFormulario from "../../components/BotaoFormulario";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CadastroTipoUsuario() {
    const [tipoUsuario, setTipousuario] = useState<string>("");

    return (
        <>
            <Header />
            <main id="main_cadastro_tipo_usuario">
                <SetaVoltar pagina={""} />
                <section className="section">
                    <div className="conteudo">
                        <div className="quemEVoce">
                            <p className="quem_e_voce">Quem é você?</p>
                        </div>
                        <div className="seDestaca">
                            <span className="se_destaca">
                                A Volks Way se destaca por sua plataforma de promoções e eventos
                                exclusivos para motoristas, administradores de frota e proprietários
                                de caminhões. Nossa plataforma permite que esses profissionais
                                participem de eventos, concursos e promoções exclusivas, além de
                                receberem informações relevantes sobre o setor de transportes.
                            </span>
                        </div>
                        <div className="perguntaOpcao">
                            <p className="pergunta_opcao">
                                Qual das opções abaixo melhor descreve a sua situação?
                            </p>
                        </div>
                        <div className="tres_opcoes">
                            {tipoUsuario !== "Motorista" &&
                                <div id="motorista" onClick={() => setTipousuario("Motorista")} className="motorista">
                                    <img
                                        className="img_motorista"
                                        src={Motorista}
                                        alt=""
                                    />
                                    <span className="a_motorista">
                                        Motorista
                                    </span>
                                </div>
                            }

                            {tipoUsuario === "Motorista" &&
                                <div onClick={() => setTipousuario("Motorista")} className="motorista background_amarelo">
                                    <img
                                        className="img_motorista"
                                        src={Motorista}
                                        alt=""
                                    />
                                    <span className="a_motorista">
                                        Motorista
                                    </span>
                                </div>
                            }

                            {tipoUsuario !== "AdmFrota" &&
                                <div onClick={() => setTipousuario("AdmFrota")} className="adm_de_frota">
                                    <img
                                        className="img_adm_de_frota"
                                        src={AdmFrota}
                                        alt=""
                                    />
                                    <span className="a_adm_de_frota">
                                        Administrador de frota
                                    </span>
                                </div>
                            }

                            {tipoUsuario === "AdmFrota" &&
                                <div onClick={() => setTipousuario("AdmFrota")} className="adm_de_frota background_amarelo">
                                    <img
                                        className="img_adm_de_frota"
                                        src={AdmFrota}
                                        alt=""
                                    />
                                    <span className="a_adm_de_frota">
                                        Administrador de frota
                                    </span>
                                </div>
                            }

                            {tipoUsuario !== "Proprietário" &&
                                <div onClick={() => setTipousuario("Proprietário")} className="proprietario">
                                    <img
                                        className="img_proprietario"
                                        src={Proprietario}
                                        alt=""
                                    />
                                    <span className="a_proprietario">
                                        Proprietário de veículos
                                    </span>
                                </div>
                            }

                            {tipoUsuario === "Proprietário" &&
                                <div onClick={() => setTipousuario("Proprietário")} className="proprietario background_amarelo">
                                    <img
                                        className="img_proprietario"
                                        src={Proprietario}
                                        alt=""
                                    />
                                    <span className="a_proprietario">
                                        Proprietário de veículos
                                    </span>
                                </div>
                            }
                        </div>

                        {tipoUsuario === "Motorista" &&
                            <BotaoFormulario tipo={"link"} texto={"Próximo"} url={`/cadastro/veiculo?tipoUsuario=${tipoUsuario}`} />
                        }

                        {tipoUsuario !== "" && tipoUsuario !== "Motorista" &&
                            <BotaoFormulario tipo={"link"} texto={"Próximo"} url={`/cadastro/empresa?tipoUsuario=${tipoUsuario}`} />
                        }

                        {tipoUsuario === "" &&
                            <BotaoFormulario tipo={"link"} texto={"Próximo"} url={`/cadastro/empresa`} />
                        }
                    </div>
                    <div className="imgIlustracao">
                        <img
                            className="ilustracao"
                            src={IlustracaoPessoas}
                            alt=""
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoUsuario;