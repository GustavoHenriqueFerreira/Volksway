import "./style.css"
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import ImgCadastroVeiculo from "../../assets/img/img_cadastroEmpresa.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SetaVoltar from "../../components/SetaVoltar";
import BotaoFormulario from "../../components/BotaoFormulario";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Usuario {
    placa: string,
    codigoChassi: string,
    marca: string,
    tipoUsuario: string,
    nomeEmpresa: string,
    cnpj: string,
    cidade: string,
}

const schema = z.object({
    nomeEmpresa: z.string().min(3, "Por favor, digite uma empresa válida").max(30, "Por favor, digite uma empresa válida"),
    cnpj: z.string().min(18, "Por favor, digite um cnpj válido").max(18, "Por favor, digite um cnpj válido"),
    cidade: z.string().min(4, "Por favor, digite uma cidade válida").max(30, "Por favor, digite uma cidade válida"),
})

type FormProps = z.infer<typeof schema>

function CadastroEmpresa() {
    const [usuario, setUsuario] = useState<Usuario>(Object)
    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            nomeEmpresa: "",
            cnpj: "",
            cidade: "",
        }
    });

    function validarCNPJ(cnpj: string) {
        return /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/.test(cnpj);
    }

    const handleCNPJ = (event: any) => {
        let input = event.target
        input.value = cnpjMask(input.value)
    }

    function cnpjMask(value: any) {
        if (!value) return "";

        // Remove todos os caracteres não numéricos
        value = value.replace(/\D/g, "");

        // Aplica a máscara
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");

        return value;
    }

    async function lerUrl() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const tipoUsuario = urlParams.get('tipoUsuario');
        const marca = urlParams.get('marca');
        const placa = urlParams.get('placa');
        const codigoChassi = urlParams.get('codigoChassi');
        console.log(placa)
        if (tipoUsuario !== null) {
            setUsuario({ ...usuario, tipoUsuario: tipoUsuario });
            console.log(tipoUsuario);
        } else {
            console.log("tipoUsuario não encontrado na URL");
        }

        if (tipoUsuario === "Motorista" && marca !== null && placa !== null && codigoChassi !== null) {
            setUsuario({ ...usuario, tipoUsuario: tipoUsuario, marca: marca, placa: placa, codigoChassi: codigoChassi });
        }

        return console.log(usuario)
    }

    const handleForm = () => {
        if (Object.keys(errors).length === 0) {
            window.location.href = `/cadastro/geral?cidade=${usuario.cidade}&cnpj=${usuario.cnpj}&codigoChassi=${usuario.codigoChassi}&marca=${usuario.marca}&nomeEmpresa=${usuario.nomeEmpresa}&placa=${usuario.placa}&tipoUsuario=${usuario.tipoUsuario}`
        }
    }

    useEffect(() => {
        lerUrl();
    }, []);

    return (
        <>
            <Header />
            <main id="main_cadastro_empresa">
                {usuario.tipoUsuario === "Motorista" &&
                    <SetaVoltar pagina="cadastro/veiculo" />
                }

                {(usuario.tipoUsuario == "AdmFrota" || usuario.tipoUsuario == "Proprietário") &&
                    <SetaVoltar pagina="cadastro/usuario" />
                }

                {(usuario.tipoUsuario === "" || usuario.tipoUsuario == undefined || usuario.tipoUsuario == null) &&
                    <SetaVoltar pagina="cadastro/usuario" />
                }
                <section className="section">
                    <div className="flex">
                        <form action="">
                            <div className="conteudo">
                                <div className="seuCadastro">
                                    <p className="seu_cadastro">Cadastre a sua empresa!!</p>
                                </div>

                                <div className="seDestaca">
                                    <span className="se_destaca">Preencha os dados do veículo para listarmos ofertas e notícias especiais
                                    </span>
                                </div> <br />

                                <div className="inputs">
                                    <div className="nome">
                                        <label className="nomeInput">Nome*</label> <br />
                                        <input id="nome" className="nome_input" {...register("nomeEmpresa")} onChange={(event) => setUsuario({ ...usuario, nomeEmpresa: event.target.value })} maxLength={30} minLength={3} type="text" />
                                        <p className="erro_input">{errors.nomeEmpresa?.message}</p>
                                    </div>

                                    <div className="nome">
                                        <label className="nomeInput">CNPJ*</label> <br />
                                        <input id="cnpj" {...register("cnpj")} onChange={(event) => { setUsuario({ ...usuario, cnpj: event.target.value }); handleCNPJ(event) }} maxLength={18} minLength={18} className="nome_input" type="text" />
                                        <p className="erro_input">{errors.cnpj?.message}</p>
                                    </div>

                                    <div className="nome">
                                        <label className="nomeInput">Cidade*</label> <br />
                                        <input id="cidade" {...register("cidade")} className="nome_input" onChange={(event) => setUsuario({ ...usuario, cidade: event.target.value })} maxLength={30} minLength={4} type="text" />
                                        <p className="erro_input">{errors.cidade?.message}</p>
                                    </div>
                                </div>

                                {validarCNPJ(usuario.cnpj) === true &&
                                    <button className="botao margin_top" onClick={handleSubmit(handleForm)}>
                                        <BotaoFormulario tipo={"formulario"} texto={"Próximo"} />
                                    </button>
                                }

                                {validarCNPJ(usuario.cnpj) === false &&
                                    <button className="botao margin_top" onClick={handleSubmit(handleForm)}>
                                        <BotaoFormulario tipo={"link"} texto={"Próximo"} url={"/cadastro/empresa"} />
                                    </button>
                                }
                            </div>
                        </form>

                        <div className="imgIlustracao">
                            <img className="ilustracao" src={ImgCadastroVeiculo} alt="" />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default CadastroEmpresa;