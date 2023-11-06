//imagens
import imgLogo from "../../assets/img/logo_voksway.png";
import iconFace from "../../assets/img/face_branco.png";
import iconInsta from "../../assets/img/instagram.svg";
import iconLinkedin from "../../assets/img/linkedin.svg";
import { HashLink as Link } from 'react-router-hash-link';
//estilização
import "./style.css";

function Footer() {
    return (
        <footer>
            <div className="container direction_row space_between align_center alinhamento_footer">
                <div id="contato">
                    <Link smooth to={"/"}><img className="img_footer" src={imgLogo} alt="Logo da Volkswagen" /></Link>
                    <div>
                        <span>Como falar com a gente?</span>
                        <p className="footer_text">meajuda@VolksWay.com.br</p>
                    </div>
                </div>

                <nav className="direction_column nav_desktop">
                    <Link className="footer_text" smooth to={"/"}>Home</Link>
                    <Link className="footer_text" smooth to={"/#objetivo"}>Nosso Objetivo</Link>
                    <Link className="footer_text" smooth to={"/#mais_vendidos"}>Mais vendidos</Link>
                    <Link className="footer_text" smooth to={"/#quem_somos"}>Quem somos</Link>
                </nav>

                <nav className="direction_column nav_desktop">
                    <Link className="footer_text" smooth to={"/#contato"}>Contato</Link>
                    <Link className="footer_text" smooth to={"/#noticias"}>Notícias</Link>
                    <Link className="footer_text" smooth to={"/privacidade#"}>Privacidade</Link>
                    <Link className="footer_text" smooth to={"/#por_que"}>Por que a VolksWay?</Link>
                </nav>

                <div className="nav_mobile">
                    <nav className="direction_column primeira_nav">
                        <Link className="footer_text" smooth to={"/"}>Home</Link>
                        <Link className="footer_text" smooth to={"/#objetivo"}>Nosso Objetivo</Link>
                        <Link className="footer_text" smooth to={"/#mais_vendidos"}>Mais vendidos</Link>
                        <Link className="footer_text" smooth to={"/#quem_somos"}>Quem somos</Link>
                    </nav>

                    <nav className="direction_column">
                        <Link className="footer_text" smooth to={"/#contato"}>Contato</Link>
                        <Link className="footer_text" smooth to={"/#noticias"}>Notícias</Link>
                        <Link className="footer_text" smooth to={"/privacidade#"}>Privacidade</Link>
                        <Link className="footer_text" smooth to={"/#por_que"}>Por que a VolksWay?</Link>
                    </nav>
                </div>

                <div className="space_between imgs_social_medias">
                    <img src={iconInsta} alt="Logo do instagram" />
                    <img src={iconFace} alt="Logo do facebook" />
                    <img src={iconLinkedin} alt="Logo do linkend" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;