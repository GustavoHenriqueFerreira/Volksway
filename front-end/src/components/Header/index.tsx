
import "./style.css";
import imgLogo from "../../assets/img/logo_voksway.png";
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react'

function mostrarMenu() {
    let menu : any = document.getElementById("menu_links"); // Obtém o elemento do menu pelo ID
    let sombra : any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras : any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    let body = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)
    if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
        menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
        sombra.style.right = "-10vw"; // Move a sombra para a direita
        menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
        menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
        body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
        menu.style.left = "-500px";
        sombra.style.right = "110vw";
        menu_barras.setAttribute("aria-expanded", "false");
        menu_barras.setAttribute("aria-label", "abrir menu");
        body.style.overflow = "initial !important";
    }
    menu_barras.classList.toggle("ativo");
}   

function Header() {
    return (
        <header className="direction_row align_center posicionamento_header">
            <Link to={"/"} style={{padding: 0}}><img className="logo_header" src={imgLogo} alt="Logo da Volkswagen"/></Link>

                <a id="menu_barras"
                        aria-label="abrir menu"
                        aria-expanded="false"
                        aria-controls="menu_links"
                        aria-haspopup="true"
                        onClick={mostrarMenu}><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg></a>

                <nav className="space_evenly links" id="links">
                    <div>
                        <Link to={"/"} style={{padding: 0}}>volks<span>way</span></Link>
                        <Link to={"/"} style={{padding: 0}} id="menu_barras" className="menu_barras" /*onclick="btnMenu()"*/ aria-label="Fechar um menu"
                            aria-controls="links" aria-expanded="true" aria-haspopup="false">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </Link>
                    </div>

                    <Link className="navegacao_header" smooth to={"/#noticias"} style={{padding: 0}}>Noticias</Link>
                    <Link className="navegacao_header" smooth to={"/#quem_somos"} style={{padding: 0}}>Quem somos</Link>
                    <Link className="navegacao_header" smooth to={"/#por_que"} style={{padding: 0}}>Por que a VolksWay?</Link>
                    <Link className="navegacao_header" smooth to={"/#contato"} style={{padding: 0}}>Contato</Link>
                </nav>
        </header >
    );

}


export default Header;
