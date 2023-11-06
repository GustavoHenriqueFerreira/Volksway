import "./style.css"
/* import { useEffect, useState } from "react"; */
import { Link } from "react-router-dom";
import imgLogin from "../../assets/img/img_login.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Login() {
    return (
        <>
            <Header />
            <main id="login">
                {/*Tela de Login(usuario e senha)*/}
                <div id="login">
                    <form>
                        <div className="alinhamento_campos_login">
                            <label htmlFor="usuario">Usuário</label>
                            <input type="text" id="usuario" />
                        </div>
                        <div className="alinhamento_campos_login">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" />
                        </div>
                        <span className="checkPrivacidade">
                            <input type="checkbox" id="" className="" />
                            "Li e estou de acordo com a"
                            <Link id="checkboxPrivacidade" to={"/privacidade"} > Política de Privacidade </Link>
                        </span>
                        <div>
                            <input type="checkbox" name="" id="lembre_me" />
                            <label htmlFor="">Lembre-me</label>
                        </div>
                        <Link to={"/cadastro/usuario"}
                            className="link_nao_cadastro"
                        >
                            Não possui cadastro?
                        </Link>
                        <div className="alinhamento_campos_Entrar">
                            <Link type="button" to={"/produtos"}>
                                Entrar
                            </Link>
                            <>


                            </>

                        </div>
                        {/*  <div class="alinhamento_texto_opcao">
              <hr>
              <hr>
          </div>
 */}
                    </form>
                    <div className="login_img_conteudo">
                        <img src={imgLogin} alt="" srcSet="" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login;