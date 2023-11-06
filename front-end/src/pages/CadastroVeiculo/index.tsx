import "./style.css"
import Voltar from "../../assets/img/arrow-left-solid 1.png"
import FundoVeiculo from "../../assets/img/Group 2452.png"
import ImgCaminhao from "../../assets/img/img_cadastro_veiculo.svg"
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
    tipoUsuario: any,
}

const schema = z.object({
    placa: z.string().min(8, "Por favor, digite uma placa válida").max(8, "Por favor, digite uma placa válida"),
    codigoChassi: z.string().min(20, "Por favor, digite um código válido").max(20, "Por favor, digite um código válido"),
    marca: z.string().min(4, "Por favor, digite uma marca válida"),
})

type FormProps = z.infer<typeof schema>

function CadastroVeiculo() {
    const [usuario, setUsuario] = useState<Usuario>(Object)
    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            placa: "",
            codigoChassi: "",
            marca: "",
        }
    });

    const placaMask = (value: any) => {
        if (!value) return '';

        // Remove todos os caracteres não alfanuméricos, exceto letras e números
        value = value.replace(/[^a-zA-Z0-9]/g, '');

        // Adicione a máscara
        value = value.replace(/^(\w{0,3})(\w{0,4})$/, '$1-$2');

        return value;
    };

    const handlePlaca = (event: any) => {
        let input = event.target
        input.value = placaMask(input.value)
    }

    const handleCodigoChassi = (event: any) => {
        let input = event.target
        input.value = codigoChassiMask(input.value)
    }

    function codigoChassiMask(vin: any) {
        // Remove todos os caracteres não alfanuméricos
        vin = vin.replace(/[^a-zA-Z0-9]/g, '');

        // Limita o VIN a 17 caracteres
        vin = vin.slice(0, 17);

        // Divide o VIN em grupos de 5, 5 e 7 caracteres
        const match = vin.match(/.{1,5}/g);
        if (!match) {
            return vin;
        }

        // Adiciona hífens entre os grupos
        const formattedVIN = match.join('-');

        return formattedVIN;
    }

    async function lerUrl() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const tipoUsuario = urlParams.get('tipoUsuario');
        setUsuario({ ...usuario, tipoUsuario: tipoUsuario })
        return console.log(tipoUsuario)
    }

    const handleForm = (data: FormProps) => {
        /* console.log({ data }) */
        if (Object.keys(errors).length === 0) {
            window.location.href = `/cadastro/empresa?tipoUsuario=${usuario.tipoUsuario}&placa=${usuario.placa}&marca=${usuario.marca}&codigoChassi=${usuario.codigoChassi}`
        }
    }

    useEffect(() => {
        lerUrl();
    }, []);

    return (
        <>
            <Header />
            <main id="main_cadastro_veiculo">
                {/* <section className="cadastroVeiculo">
                <div className="conteudo_cadVeiculo">
                    <SetaVoltar pagina={"cadastro/usuario"} />
                    <div className="chamada">
                        <h1> Cadastre o seu veículo!</h1>
                        <p className="cad_texto">
                            Preencha os dados do veículo para conseguir checar a segurança dele
                        </p>
                    </div>

                    
                    <div className="formulario_CadVeiculo">
                        <div>
                            <p>Código do Chassi*</p>
                            <input {...register("codigoChassi")} onChange={(event) => { setUsuario({ ...usuario, codigoChassi: event.target.value }); handleCodigoChassi(event) }} maxLength={20} className="cadVeiculo1" />
                            <p className="erro_input">{errors.codigoChassi?.message}</p>
                        </div>
                        <div>
                            <p>Placa*</p>
                            <input {...register("placa")} onChange={(event) => { setUsuario({ ...usuario, placa: event.target.value }); handlePlaca(event) }} maxLength={8} className="cadVeiculo1" />
                            <p className="erro_input">{errors.placa?.message}</p>
                        </div>
                        <div>
                            <p>Marca*</p>
                            <input {...register("marca")} className="cadVeiculo1" onChange={(event) => setUsuario({ ...usuario, marca: event.target.value })} />
                            <p className="erro_input">{errors.marca?.message}</p>
                        </div>
                        
                        <button className="botao" onClick={handleSubmit(handleForm)}>
                            <BotaoFormulario tipo={"formulario"} texto={"Próximo"} />
                        </button>
                    </div>
                </div>
                <img className="fundo" src={FundoVeiculo} alt="" />
            </section> */}
                <SetaVoltar pagina={"cadastro/usuario"} />
                <section className="section">
                    <form action="">
                        <div className="conteudo">
                            <div className="seuCadastro">
                                <p className="seu_cadastro">Cadastre o seu veículo!</p>
                            </div>

                            <div className="seDestaca">
                                <span className="se_destaca">Preencha os dados do veículo para conseguir checar a segurança dele
                                </span>
                            </div> <br />

                            <div className="inputs">
                                <div className="nome">
                                    <label className="nomeInput">Código do Chassi*</label> <br />
                                    <input id="codigoChassi" {...register("codigoChassi")} onChange={(event) => { setUsuario({ ...usuario, codigoChassi: event.target.value }); handleCodigoChassi(event) }} maxLength={20} className="nome_input" type="text" />
                                    <p className="erro_input">{errors.codigoChassi?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Placa*</label> <br />
                                    <input id="placa" {...register("placa")} onChange={(event) => { setUsuario({ ...usuario, placa: event.target.value }); handlePlaca(event) }} maxLength={8} className="nome_input" type="text" />
                                    <p className="erro_input">{errors.placa?.message}</p>
                                </div>

                                <div className="nome">
                                    <label className="nomeInput">Marca*</label> <br />
                                    <input id="marca" {...register("marca")} className="nome_input" onChange={(event) => setUsuario({ ...usuario, marca: event.target.value })} type="text" />
                                    <p className="erro_input">{errors.marca?.message}</p>
                                </div>
                            </div>

                            <button className="botao margin_top" onClick={handleSubmit(handleForm)}>
                                <BotaoFormulario tipo={"formulario"} texto={"Próximo"} />
                            </button>
                        </div>
                    </form>

                    <div className="imgIlustracao">
                        <img className="fundo" src={ImgCaminhao} alt="" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CadastroVeiculo;