import "./style.css"
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import ImgCadastroGeral from "../../assets/img/cadastro_pessoal.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Parse from 'parse/dist/parse.min.js';
import api from "../../utils/api";
import SetaVoltar from "../../components/SetaVoltar";
import BotaoVerMais from "../../components/BotaoVerMais";
import BotaoFormulario from "../../components/BotaoFormulario";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

interface Usuario {
    placa: string,
    codigoChassi: string,
    marca: string,
    tipoUsuario: string,
    nomeEmpresa: string,
    cnpj: string,
    cidade: string,
    nomeCompleto: string,
    telefone: string,
    email: string,
    cpf: string,
    senha: string,
    dataNascimento: string,
    confirmarSenha: string
}

const schema = z.object({
    nomeCompleto: z.string().min(4, "Por favor, digite seu nome completo"),
    telefone: z.string().min(4, "Por favor, digite um telefone válido"),
    /*  dataNascimento: z.date(), */
    email: z.string().min(6, "Por favor, digite um email válido").max(25).email({
        message: "Por favor, digite um email válido",
    }),
    cpf: z.string().min(14, "Por favor, informe um CPF válido"),
    senha: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    confirmarSenha: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
})

type FormProps = z.infer<typeof schema>

function CadastroGeral() {
    const [usuario, setUsuario] = useState<Usuario>(Object)
    const [concluido, setConcluido] = useState<boolean>(false)
    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            nomeCompleto: "",
            telefone: "",
            email: "",
            cpf: "",
            senha: "",
            confirmarSenha: ""
        }
    });

    function cadastrarUsuario() {
        let partesData
        let dataFormatada
        let tipoUsuario

        if (usuario.senha !== usuario.confirmarSenha) {
            return "Senha diferentes"
        }

        if (usuario.dataNascimento !== "") {
            partesData = usuario.dataNascimento.split('-');

            // Extraia o dia, mês e ano da data
            var dia = partesData[2];
            var mes = partesData[1];
            var ano = partesData[0];
            // Formate a data no formato "dia/mês/ano"
            dataFormatada = dia + '/' + mes + '/' + ano;
        }

        if (usuario.tipoUsuario === "Motorista") {
            tipoUsuario = { __type: "Pointer", className: "tipoUsuario", objectId: "8LE3XQJNLh" }
        }

        if (usuario.tipoUsuario === "Proprietário") {
            tipoUsuario = { __type: "Pointer", className: "tipoUsuario", objectId: "3H59tvzWK9" }
        }

        if (usuario.tipoUsuario === "AdmFrota") {
            tipoUsuario = { __type: "Pointer", className: "tipoUsuario", objectId: "4gl2YylECw" }
        }

        api.post(`usuario`,
            {
                placa: usuario.placa,
                codigoChassi: usuario.codigoChassi,
                marca: usuario.marca,
                tipoUsuario: tipoUsuario,
                nomeEmpresa: usuario.nomeEmpresa,
                cnpj: usuario.cnpj,
                cidade: usuario.cidade,
                nomeCompleto: usuario.nomeCompleto,
                telefone: usuario.telefone,
                email: usuario.email,
                cpf: usuario.cpf,
                senha: usuario.senha,
                dataNascimento: dataFormatada
            },
            {
                headers: {
                    'X-Parse-Application-Id': PARSE_APPLICATION_ID,
                    'X-Parse-REST-API-Key': PARSE_REST_API,
                    'X-Parse-Master-Key': MASTER_KEY,
                }
            }).then((resposta) => {
                if (resposta.status === 201) {
                    //console.log(resposta)
                    setConcluido(true)
                    return setTimeout(function () { window.location.href = `/produtos`; }, 4000);
                }
            })
            .catch(() => {
                //console.log(erro); // Trata erros de solicitação
            });
    }

    const handlePhone = (event: any) => {
        let input = event.target
        input.value = phoneMask(input.value)
    }

    const handleCPF = (event: any) => {
        let input = event.target
        input.value = cpfMask(input.value)
    }

    const phoneMask = (value: any) => {
        if (!value) return ""
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, "($1) $2")
        value = value.replace(/(\d)(\d{4})$/, "$1-$2")
        return value
    }

    function cpfMask(value: any) {
        if (!value) return ""
        value = value.replace(/\D/g, "")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        return value
    }

    async function lerUrl() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const cidade = urlParams.get('cidade');
        const cnpj = urlParams.get('cnpj');
        const nomeEmpresa = urlParams.get('nomeEmpresa');
        const tipoUsuario = urlParams.get('tipoUsuario');

        if (tipoUsuario !== "Motorista" && tipoUsuario !== null && nomeEmpresa !== null && cidade !== null && cnpj !== null) {
            setUsuario({ ...usuario, tipoUsuario: tipoUsuario, nomeEmpresa: nomeEmpresa, cidade: cidade, cnpj: cnpj });
            //console.log(tipoUsuario);
        } else {
            //console.log("tipoUsuario não encontrado na URL");
        }

        const codigoChassi = urlParams.get('codigoChassi');
        const marca = urlParams.get('marca');
        const placa = urlParams.get('placa');
        if (tipoUsuario === "Motorista" && tipoUsuario !== null && nomeEmpresa !== null && cidade !== null && cnpj !== null && marca !== null && placa !== null && codigoChassi !== null) {
            setUsuario({ ...usuario, tipoUsuario: tipoUsuario, nomeEmpresa: nomeEmpresa, cidade: cidade, cnpj: cnpj, codigoChassi: codigoChassi, marca: marca, placa: placa });
            //console.log(tipoUsuario);
        }
        //return console.log(usuario)
    }

    useEffect(() => {
        lerUrl();
    }, []);

    return (
        <>
            <Header />
            <main id="main_cadastro_geral">
                <SetaVoltar pagina={"cadastro/empresa"} />

                <section className="section">
                    <form action="" onSubmit={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        void handleSubmit(cadastrarUsuario)(event);
                    }}>
                        <div className="conteudo">
                            <div className="seuCadastro">
                                <p className="seu_cadastro">Seu cadastro está quase pronto!</p>
                            </div>

                            <div className="seDestaca">
                                <span className="se_destaca">Falta preencher os dados pessoais abaixo para finalizar </span>
                            </div> <br />


                            <div className="inputs">

                                <div className="nome">
                                    <label className="nomeInput">Nome*</label> <br />
                                    <input id="nomeCompleto" {...register("nomeCompleto")} onChange={(event) => setUsuario({ ...usuario, nomeCompleto: event.target.value })} className="nome_input" type="text" />
                                    <p className="erro_input">{errors.nomeCompleto?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">CPF*</label> <br />
                                    <input id="cpf" {...register("cpf")} onChange={(event) => { setUsuario({ ...usuario, cpf: event.target.value }); handleCPF(event) }} maxLength={14} className="nome_input" type="text" />
                                    <p className="erro_input">{errors.cpf?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Telefone*</label> <br />
                                    <input id="telefone" {...register("telefone")} onChange={(event) => { setUsuario({ ...usuario, telefone: event.target.value }); handlePhone(event) }} type="tel" maxLength={15} className="nome_input" />
                                    <p className="erro_input">{errors.telefone?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Data de nascimento*</label> <br />
                                    <input id="dataNascimento" className="nome_input" type="date" onChange={(event) => setUsuario({ ...usuario, dataNascimento: event.target.value })} />
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Email*</label> <br />
                                    <input id="email" {...register("email")} onChange={(event) => setUsuario({ ...usuario, email: event.target.value })} type="text" minLength={6} className="nome_input" />
                                    <p className="erro_input">{errors.email?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Senha*</label> <br />
                                    <input
                                        id="senha"
                                        {...register("senha")}
                                        className="nome_input"
                                        type="password"
                                        onChange={(event) => setUsuario({ ...usuario, senha: event.target.value })}
                                    />
                                    <p className="erro_input">{errors.senha?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Confirmar senha*</label> <br />
                                    <input id="confirmarSenha" {...register("confirmarSenha")} className="nome_input" type="text" onChange={(event) => setUsuario({ ...usuario, confirmarSenha: event.target.value })} />
                                    <p className="erro_input">{errors.confirmarSenha?.message}</p>
                                    {usuario.senha !== usuario.confirmarSenha &&
                                        <p className="erro_input">As senhas estão diferentes! Por favor coloque senhas iguais!</p>
                                    }

                                </div>
                            </div>

                            <button className="botao" type="submit">
                                <BotaoFormulario tipo={"formulario"} texto={"Cadastrar"} />
                            </button>

                            {concluido === true &&
                                <div className="card_cadastrado"><p className="texto_cadastrado">Seu cadastro foi concluído! Você já será redirecionado</p></div>
                            }
                        </div>
                    </form>

                    <div className="imgIlustracao">
                        <img className="ilustracao" src={ImgCadastroGeral} alt="" />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default CadastroGeral;