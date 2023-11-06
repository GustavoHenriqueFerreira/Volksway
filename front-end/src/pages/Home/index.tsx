/* import { useState } from 'react' */
import CaminhaoBanner from "../../assets/img/caminhao_banner_home.png"
import SetaBanner from "../../assets/img/seta_banner_home.svg"
import QuemSomos from "../../assets/img/img_quemSomos.svg"
import Depoimento from "../../assets/img/caminhoneiro_home.png"
import MaisVendidos from "../../assets/img/caminhao_home.png"
import './style.css'
import { Link } from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main id='main_home'>
        <section>
          <div className="home_banner mySlides fade">
            <div className="home_banner_conteudo container_75 direction_column space_evenly">
              <div className="align_center">
                <div className="direction_row space_evenly home_banner_alinhamento">
                  <div className="home_container_entrar justify_center direction_column">
                    <span className="amarelo">Acabou de chegar</span>
                    <Link to={'/login'} style={{ textDecoration: 'none' }}>Entrar</Link>
                  </div>
                  <img
                    className="home_img_banner"
                    src={CaminhaoBanner}
                    alt="Caminhao Constellation"
                  />
                  <div className="home_info_banner direction_column">
                    <span className="home_texto_banner">
                      "Aposte nas<span className="home_branco_banner"> novidades</span> e renove a
                      sua <span className="home_branco_banner">frota</span>"
                    </span>
                    <img
                      className="home_seta_banner"
                      src={SetaBanner}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="justify_end">
                <div className="direction_row space_between home_banner_opcoes">
                  <div
                    className="home_circulo amarelo_background dot"
                  /* onclick="currentSlide(1)" */
                  />
                  <div
                    className="home_circulo branco_background dot"
                  /* onclick="currentSlide(2)" */
                  />
                  <div
                    className="home_circulo branco_background dot"
                  /* onclick="currentSlide(3)" */
                  />
                  <div
                    className="home_circulo branco_background dot"
                  /* onclick="currentSlide(4)" */
                  />
                  <div
                    className="home_circulo branco_background dot"
                  /* onclick="currentSlide(5)" */
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="home_banner mySlides fade">
          <div className="home_banner_conteudo container_75 direction_column space_evenly">
            <div className="align_center">
              <div className="direction_row space_evenly home_banner_alinhamento">
                <div className="home_container_entrar justify_center direction_column">
                  <span className="amarelo">TESTE 1</span>
                  <a href="../login/index.html#">Entrar</a>
                </div>
                <img
                  className="home_img_banner"
                  src="../../assets/img/caminhao_banner_home.png"
                  alt="Caminhao Constellation"
                />
                <div className="home_info_banner direction_column">
                  <span className="home_texto_banner">
                    "Aposte nas{" "}
                    <span className="home_branco_banner">novidades</span> e renove a
                    sua <span className="home_branco_banner">frota</span>"
                  </span>
                  <img
                    className="home_seta_banner"
                    src="../../assets/img/seta_banner_home.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="justify_end">
              <div className="direction_row space_between home_banner_opcoes">
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(1)" *
                />
                <div
                  className="home_circulo amarelo_background dot"
                  /* onclick="currentSlide(2)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(3)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(4)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(5)" *
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home_banner mySlides fade">
          <div className="home_banner_conteudo container_75 direction_column space_evenly">
            <div className="align_center">
              <div className="direction_row space_evenly home_banner_alinhamento">
                <div className="home_container_entrar justify_center direction_column">
                  <span className="amarelo">TESTE 2</span>
                  <a href="../login/index.html#">Entrar</a>
                </div>
                <img
                  className="home_img_banner"
                  src="../../assets/img/caminhao_banner_home.png"
                  alt="Caminhao Constellation"
                />
                <div className="home_info_banner direction_column">
                  <span className="home_texto_banner">
                    "Aposte nas{" "}
                    <span className="home_branco_banner">novidades</span> e renove a
                    sua <span className="home_branco_banner">frota</span>"
                  </span>
                  <img
                    className="home_seta_banner"
                    src="../../assets/img/seta_banner_home.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="justify_end">
              <div className="direction_row space_between home_banner_opcoes">
                <div
                  className="home_circulo branco_background dot"
                 /*  onclick="currentSlide(1)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(2)" *
                />
                <div
                  className="home_circulo amarelo_background ot"
                  /* onclick="currentSlide(3)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(4)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(5)" *
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home_banner mySlides fade">
          <div className="home_banner_conteudo container_75 direction_column space_evenly">
            <div className="align_center">
              <div className="direction_row space_evenly home_banner_alinhamento">
                <div className="home_container_entrar justify_center direction_column">
                  <span className="amarelo">TESTE 3</span>
                  <a href="../login/index.html#">Entrar</a>
                </div>
                <img
                  className="home_img_banner"
                  src="../../assets/img/caminhao_banner_home.png"
                  alt="Caminhao Constellation"
                />
                <div className="home_info_banner direction_column">
                  <span className="home_texto_banner">
                    "Aposte nas{" "}
                    <span className="home_branco_banner">novidades</span> e renove a
                    sua <span className="home_branco_banner">frota</span>"
                  </span>
                  <img
                    className="home_seta_banner"
                    src="../../assets/img/seta_banner_home.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="justify_end">
              <div className="direction_row space_between home_banner_opcoes">
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(1)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(2)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(3)" *
                />
                <div
                  className="home_circulo amarelo_background dot"
                  /* onclick="currentSlide(4)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(5)" *
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home_banner mySlides fade">
          <div className="home_banner_conteudo container_75 direction_column space_evenly">
            <div className="align_center">
              <div className="direction_row space_evenly home_banner_alinhamento">
                <div className="home_container_entrar justify_center direction_column">
                  <span className="amarelo">TESTE 4</span>
                  <a href="../login/index.html#">Entrar</a>
                </div>
                <img
                  className="home_img_banner"
                  src="../../assets/img/caminhao_banner_home.png"
                  alt="Caminhao Constellation"
                />
                <div className="home_info_banner direction_column">
                  <span className="home_texto_banner">
                    "Aposte nas{" "}
                    <span className="home_branco_banner">novidades</span> e renove a
                    sua <span className="home_branco_banner">frota</span>"
                  </span>
                  <img
                    className="home_seta_banner"
                    src="../../assets/img/seta_banner_home.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="justify_end">
              <div className="direction_row space_between home_banner_opcoes">
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(1)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(2)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(3)" *
                />
                <div
                  className="home_circulo branco_background dot"
                  /* onclick="currentSlide(4)" *
                />
                <div
                  className="home_circulo amarelo_background dot"
                  /* onclick="currentSlide(5)" *
                />
              </div>
            </div>
          </div>
        </div> */}
        </section>
        <section className="container_75 space_evenly direction_column home_saiba_mais">
          <div className="direction_row space_between align_center">
            <div className="home_card_desconto direction_row space_around align_center">
              <div className="home_card_conteudo">
                <span>Descontos</span>
                <span className="home_card_desconto_texto"> de até</span>
              </div>
              <hr />
              <span>30%</span>
            </div>
            <div className="home_card_desconto antepenultimo direction_row space_around align_center">
              <div className="home_card_conteudo">
                <span>Peças</span>
                <span className="home_card_desconto_texto"> de até R$1000</span>
              </div>
              <hr />
              <span>10%</span>
            </div>
            <div className="home_card_desconto penultimo direction_row space_around align_center">
              <div className="home_card_conteudo">
                <span>Veículos</span>
                <span className="home_card_desconto_texto"> de até R$500.000</span>
              </div>
              <hr />
              <span>20%</span>
            </div>
            <div className="home_card_desconto ultimo direction_row space_around align_center">
              <div className="home_card_conteudo">
                <span>Veículos</span>
                <span className="home_card_desconto_texto"> a partir de R$800.000</span>
              </div>
              <hr />
              <span>30%</span>
            </div>
          </div>
          <div
            className="direction_column space_between home_saiba_mais_alinhamento"
            id="noticias"
          >
            <h2 className="home_titulo_saiba">
              Saiba Mais - <span>Notícias e Produtos</span>
            </h2>
            <div className="direction_row space_between alinhamento_cards_saiba">
              <div className="home_card_saiba space_evenly">
                <div>
                  <p>
                    Encontre o seu caminhão perfeito! Além das melhores peças do
                    mercado.
                  </p>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>Ver mais</Link>
                </div>
              </div>
              <div className="home_card_saiba none_600px space_evenly">
                <div>
                  <p>
                    Encontre o seu caminhão perfeito! Além das melhores peças do
                    mercado.
                  </p>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>Ver mais</Link>
                </div>
              </div>
              <div className="home_card_saiba none_900px space_evenly">
                <div>
                  <p>
                    Encontre o seu caminhão perfeito! Além das melhores peças do
                    mercado.
                  </p>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>Ver mais</Link>
                </div>
              </div>
              <div className="home_card_saiba ultimo space_evenly">
                <div>
                  <p>
                    Encontre o seu caminhão perfeito! Além das melhores peças do
                    mercado.
                  </p>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>Ver mais</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home_quem_somos" id="quem_somos">
          <div className="container_75 direction_row space_between align_center">
            <img
              src={QuemSomos}
              alt="Imagem ilustrativa de uma pessoa tirando uma caixa de um caminhão"
            />
            <div className="direction_column space_around">
              <h2>Quem somos?</h2>
              <p>
                A VolksWay se destaca por sua plataforma de promoções e eventos
                exclusivos para motoristas, administradores de frota e proprietários
                de caminhões. Nossa plataforma permite que esses profissionais
                participem de eventos, concursos e promoções exclusivas, além de
                receberem informações relevantes sobre o setor de transportes.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <div
            className="direction_column align_center space_evenly secao_por_que"
            id="por_que"
          >
            <h2 className="por_que_titulo">Por que escolher a VolksWay?</h2>
            <div className="por_que_cards direction_column align_center space_between width_100">
              <div className="direction_row space_between align_center width_100">
                <a href="#por_que_slide1" className="slide_cards">
                  <svg
                    width={38}
                    height={64}
                    viewBox="0 0 38 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.75 4.53906L33.707 0.75L0.25 32L33.707 63.25L37.75 59.4805L8.35547 32L37.75 4.53906Z"
                      fill="#12264B"
                    />
                  </svg>
                </a>
                <div className="carrossel">
                  <div
                    className="direction_column space_evenly align_center por_que_card por_que_slide1"
                    id="por_que_slide1"
                  >
                    <svg
                      width={129}
                      height={138}
                      viewBox="0 0 129 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64.297 137.25C99.8073 137.25 128.594 106.525 128.594 68.6248C128.594 30.7244 99.8073 0 64.297 0C28.7867 0 0 30.7244 0 68.6248C0 106.525 28.7867 137.25 64.297 137.25Z"
                        fill="#FFD100"
                      />
                      <mask
                        id="mask0_384_512"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={3}
                        y={28}
                        width={122}
                        height={110}
                      >
                        <path
                          d="M124.235 28.5669H3.646V137.25H124.235V28.5669Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_384_512)">
                        <path
                          d="M44.9601 137.195L51.0601 124.071C51.0601 124.071 63.6601 121.675 63.8501 105.843C64.0401 90.0115 63.8501 44.8045 63.8501 41.6795C63.8501 38.5545 62.8661 35.982 60.3131 34.5963C56.6801 32.6173 53.5311 35.8466 53.5311 35.8466C53.5311 35.8466 53.1961 31.4692 50.0831 29.9642C48.7112 29.247 47.1343 29.1281 45.6827 29.6325C44.231 30.1368 43.0171 31.2253 42.2951 32.6699C42.1402 31.7228 41.7215 30.8485 41.0944 30.1627C40.4673 29.4769 39.6614 29.0118 38.7831 28.829C35.1501 27.754 32.8971 30.2265 31.8311 32.3055C30.7651 34.3846 23.6461 47.4093 24.1761 69.9079C24.1761 69.9079 18.6761 62.7151 14.1471 58.0604C10.8041 54.6204 7.38912 55.1697 5.47912 56.7456C3.46212 58.4097 3.04612 61.9282 4.54612 65.5972C6.13212 69.479 19.8161 105.167 19.8161 105.167L11.7251 123.863C11.7251 123.863 25.7751 138.237 44.9601 137.193"
                          fill="#12264B"
                        />
                        <path
                          d="M24.1948 70.0736C25.7057 72.3849 27.0503 74.8168 28.2168 77.3481C28.4658 77.8856 29.2168 77.4137 28.9698 76.8751C27.8031 74.3453 26.4585 71.9148 24.9478 69.6049C24.6278 69.1136 23.8718 69.5823 24.1948 70.0779"
                          fill="#FFD100"
                        />
                        <path
                          d="M41.9644 33.2389C42.7804 38.9751 41.4294 44.4296 40.3234 49.9992C39.0754 55.7782 38.8772 61.7618 39.7394 67.6217C39.8334 68.2151 40.6744 67.9635 40.5804 67.3723C39.5254 60.7234 40.2874 54.4142 41.6494 47.8986C42.6864 42.9354 43.5304 38.0807 42.8064 32.9895C42.7214 32.395 41.8804 32.6476 41.9644 33.2389Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M53.2351 36.1069C53.3118 39.2919 53.1898 42.4789 52.8701 45.6464C52.5401 48.6392 51.7431 51.4869 51.2821 54.4442C50.5276 59.823 50.3976 65.2818 50.8951 70.695C50.9421 71.2916 51.8151 71.297 51.7671 70.695C51.1848 64.9825 51.3711 59.2096 52.3201 53.5541C53.5348 47.831 54.1344 41.977 54.1071 36.1069C54.1071 35.9826 54.0612 35.8634 53.9794 35.7755C53.8976 35.6876 53.7867 35.6382 53.6711 35.6382C53.5555 35.6382 53.4446 35.6876 53.3628 35.7755C53.281 35.8634 53.2351 35.9826 53.2351 36.1069Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M33.7672 68.3655C41.8672 67.6646 50.6922 68.5634 56.3262 75.6111C56.6932 76.069 57.3072 75.4036 56.9432 74.9478C51.1702 67.727 42.0832 66.7079 33.7682 67.4228C33.2132 67.4701 33.2082 68.4086 33.7682 68.3602"
                          fill="#FFD100"
                        />
                        <path
                          d="M43.5494 123.265C45.8493 124.381 48.3632 124.892 50.8834 124.757C51.4424 124.728 51.4454 123.789 50.8834 123.819C48.5173 123.959 46.1543 123.491 43.9894 122.455C43.4814 122.212 43.0374 123.02 43.5494 123.265Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M44.689 111.127C46.665 97.1379 41.772 81.9192 28.71 76.656C28.184 76.441 27.957 77.3493 28.478 77.56C41.053 82.6276 45.746 97.44 43.847 110.878C43.764 111.468 44.605 111.722 44.689 111.127Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M82.9212 137.195L76.8212 124.071C76.8212 124.071 64.2212 121.675 64.0312 105.843C63.8412 90.0115 64.0312 44.8045 64.0312 41.6795C64.0312 38.5545 65.0152 35.982 67.5682 34.5963C71.2012 32.6173 74.3502 35.8466 74.3502 35.8466C74.3502 35.8466 74.6892 31.4713 77.8022 29.9642C79.1742 29.247 80.751 29.1281 82.2027 29.6325C83.6543 30.1368 84.8682 31.2253 85.5902 32.6699C85.7449 31.7234 86.163 30.8496 86.7893 30.1638C87.4156 29.478 88.2207 29.0126 89.0982 28.829C92.7312 27.754 94.9842 30.2265 96.0502 32.3055C97.1162 34.3846 104.238 47.4093 103.705 69.9079C103.705 69.9079 109.205 62.7151 113.734 58.0604C117.077 54.6204 120.492 55.1697 122.402 56.7456C124.42 58.4108 124.835 61.9293 123.336 65.5983C121.75 69.4801 108.066 105.168 108.066 105.168L116.156 123.865C116.156 123.865 102.106 138.239 82.9212 137.195Z"
                          fill="#12264B"
                        />
                        <path
                          d="M102.932 69.6005C101.421 71.9107 100.077 74.3415 98.91 76.8718C98.662 77.4093 99.41 77.8866 99.663 77.3448C100.83 74.8147 102.175 72.3839 103.685 70.0735C104.008 69.579 103.252 69.106 102.932 69.6005Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M85.0811 32.9903C84.3571 38.0794 85.2001 42.9373 86.2371 47.8995C87.5991 54.4162 88.3611 60.7221 87.3061 67.3731C87.2121 67.9633 88.0521 68.217 88.1471 67.6225C89.0096 61.7627 88.8113 55.779 87.5631 50.0001C86.4571 44.4294 85.1061 38.977 85.9221 33.2397C86.0061 32.6496 85.1661 32.3948 85.0811 32.9903Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M73.7734 36.1069C73.7459 41.977 74.3455 47.8311 75.5604 53.5541C76.5094 59.2096 76.6956 64.9825 76.1134 70.695C76.0664 71.2959 76.9384 71.2927 76.9854 70.695C77.4828 65.2818 77.3528 59.823 76.5984 54.4442C76.1594 51.6224 75.3884 48.8983 75.0544 46.0474C74.7004 42.7484 74.5637 39.4266 74.6454 36.1069C74.6454 35.9826 74.5994 35.8634 74.5177 35.7755C74.4359 35.6876 74.325 35.6382 74.2094 35.6382C74.0937 35.6382 73.9828 35.6876 73.9011 35.7755C73.8193 35.8634 73.7734 35.9826 73.7734 36.1069Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M94.114 67.428C85.798 66.7088 76.714 67.7279 70.939 74.953C70.575 75.4077 71.189 76.0742 71.556 75.6163C77.189 68.5707 86.014 67.6699 94.115 68.3708C94.674 68.4192 94.671 67.4818 94.115 67.4334"
                          fill="#FFD100"
                        />
                        <path
                          d="M83.8921 122.452C81.7272 123.488 79.3642 123.955 76.9981 123.816C76.4371 123.787 76.4391 124.725 76.9981 124.754C79.5181 124.89 82.032 124.379 84.3321 123.265C84.8431 123.02 84.4001 122.212 83.8921 122.455"
                          fill="#FFD100"
                        />
                        <path
                          d="M84.034 110.877C82.134 97.4398 86.828 82.6274 99.404 77.5599C99.925 77.3449 99.704 76.4429 99.172 76.6558C86.11 81.9233 81.217 97.1378 83.193 111.127C83.277 111.721 84.117 111.469 84.034 110.877Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M63.5039 42.8159V108.292C63.5039 108.416 63.5498 108.535 63.6316 108.623C63.7134 108.711 63.8243 108.761 63.9399 108.761C64.0555 108.761 64.1664 108.711 64.2482 108.623C64.33 108.535 64.3759 108.416 64.3759 108.292V42.8159C64.3759 42.6916 64.33 42.5723 64.2482 42.4844C64.1664 42.3966 64.0555 42.3472 63.9399 42.3472C63.8243 42.3472 63.7134 42.3966 63.6316 42.4844C63.5498 42.5723 63.5039 42.6916 63.5039 42.8159Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M77.6272 62.9033L75.0952 62.9796C75.2054 59.7139 74.7611 56.454 73.7842 53.3595C72.3152 49.0455 69.2482 44.9809 62.8902 45.3077C62.6222 45.3195 62.3622 45.3421 62.1052 45.3765C51.7052 46.6472 52.0422 62.11 52.0422 62.11L49.3852 61.5907C49.3852 61.5907 48.3952 44.5036 61.7112 42.5428C62.1892 42.4676 62.6812 42.4192 63.1952 42.3891C70.3652 41.9698 73.9782 46.7267 75.7952 51.7609C77.0011 55.3331 77.6209 59.1032 77.6272 62.9033Z"
                          fill="#12264B"
                          stroke="#FFD100"
                          strokeWidth={2}
                        />
                        <path
                          d="M81.909 59.4505C81.909 59.4505 82.363 63.9387 82.686 73.6932C82.708 74.364 82.729 75.0628 82.751 75.7841C82.771 76.3592 82.786 76.9451 82.8041 77.5482C83.125 89.9827 82.85 95.6727 82.85 95.6727C82.8559 95.8905 82.8217 96.1075 82.7495 96.3112C82.6772 96.5149 82.5683 96.7012 82.429 96.8596C82.2897 97.018 82.1227 97.1452 81.9375 97.2341C81.7524 97.323 81.5527 97.3718 81.35 97.3776L47.65 98.3849C47.2421 98.3982 46.846 98.2371 46.5484 97.9368C46.2509 97.6365 46.0764 97.2216 46.063 96.7831C46.063 96.7831 45.545 93.2098 45.171 78.6801C44.797 64.1504 45.124 60.5513 45.124 60.5513C45.1133 60.113 45.2646 59.688 45.5448 59.3694C45.8251 59.0509 46.2114 58.8647 46.619 58.8518L50.226 58.7443H50.269L80.321 57.8391C80.7295 57.8284 81.1252 57.9921 81.4217 58.2943C81.7182 58.5965 81.8913 59.0126 81.903 59.4516"
                          fill="#FFD100"
                        />
                        <path
                          d="M68.0272 72.4998C68.0631 73.3734 67.8573 74.2389 67.4358 74.9868C67.0142 75.7347 66.3958 76.3314 65.6587 76.7014C64.9217 77.0715 64.0991 77.1983 63.295 77.0658C62.491 76.9334 61.7415 76.5475 61.1414 75.9571C60.5413 75.3668 60.1175 74.5983 59.9237 73.749C59.7298 72.8997 59.7746 72.0077 60.0523 71.1858C60.3301 70.3639 60.8283 69.6489 61.484 69.1314C62.1397 68.6139 62.9235 68.317 63.7362 68.2783C64.2758 68.2526 64.8148 68.3414 65.3225 68.5396C65.8301 68.7379 66.2965 69.0417 66.695 69.4337C67.0934 69.8257 67.4162 70.2982 67.6447 70.8243C67.8733 71.3504 68.0033 71.9197 68.0272 72.4998Z"
                          fill="black"
                        />
                        <path
                          d="M62.906 75.7196L59.995 84.4271C59.9325 84.6144 59.9138 84.8153 59.9406 85.0122C59.9674 85.209 60.0388 85.3958 60.1486 85.556C60.2584 85.7162 60.4031 85.8449 60.5701 85.9307C60.7371 86.0165 60.9211 86.0569 61.106 86.0482L67.106 85.7622C67.2856 85.7538 67.4607 85.6994 67.6167 85.6035C67.7727 85.5076 67.9052 85.373 68.003 85.2109C68.1009 85.0488 68.1612 84.864 68.1792 84.6717C68.1971 84.4795 68.172 84.2854 68.106 84.1057L65.016 75.6841C64.9317 75.4551 64.7845 75.2592 64.594 75.1223C64.4035 74.9855 64.1787 74.9143 63.9496 74.9181C63.7205 74.922 63.498 75.0007 63.3116 75.1439C63.1251 75.2871 62.9837 75.4879 62.906 75.7196Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                    <h3>Prezamos pela segurança em nossas plataformas</h3>
                    <p>
                      Lorem ipsum dolor sit amet. Sed veritatis maxime est illo ipsum
                      ut accusantium deleniti. Et explicabo vitae nam ipsam architecto
                      ad quis molestias et facere unde et cumque quia eum autem
                      reprehenderit est eveniet asperiores.
                    </p>
                  </div>
                  <div
                    className="direction_column space_evenly align_center por_que_card por_que_slide2"
                    id="por_que_slide2"
                  >
                    <svg
                      width={163}
                      height={197}
                      viewBox="0 0 163 197"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_384_449)">
                        <path
                          d="M81.095 24.6861C125.882 24.6861 162.19 60.7341 162.19 105.202C162.19 149.67 125.883 185.718 81.095 185.718C36.307 185.718 8.24932e-06 149.669 8.24932e-06 105.202C-0.00725148 89.2155 4.77728 73.5936 13.736 60.3531C21.178 49.3402 31.2144 40.3267 42.9609 34.1069C54.7074 27.887 67.8034 24.6517 81.095 24.6861Z"
                          fill="#FFD100"
                        />
                        <mask
                          id="mask0_384_449"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={150}
                          height={197}
                        >
                          <path
                            d="M149.729 0H0.925781V196.937H149.729V0Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_384_449)">
                          <path
                            d="M82.9328 41.1461C81.0107 40.293 78.8671 40.073 76.8118 40.5181C72.9118 41.3681 71.6368 45.2761 71.3118 48.7181C70.9868 52.1601 68.5228 90.3861 67.5518 102.37C66.5808 114.354 65.2928 134.802 68.4828 143.87C72.3698 154.923 84.8828 160.997 84.8828 160.997L100.107 185.291C108.718 183.902 117.071 181.227 124.887 177.355C133.069 173.258 140.202 167.336 145.733 160.046L133.798 143.674C133.798 143.674 138.454 131.974 138.698 120.797C138.942 109.62 135.661 74.8811 135.418 71.4801C135.175 68.0791 134.037 66.2491 129.418 65.7641C124.799 65.2791 118.569 71.4361 117.033 84.4741C117.033 84.4741 112.221 45.8511 111.77 42.9611C111.285 39.8441 108.854 35.7241 104.319 35.5611C102.972 35.5469 101.644 35.8829 100.466 36.5361C99.2878 37.1892 98.2995 38.1372 97.5978 39.2871C97.5978 39.2871 96.8878 32.6871 91.6258 32.9101C89.4482 33.0665 87.3919 33.9725 85.807 35.4741C84.2221 36.9757 83.2065 38.98 82.9328 41.1461Z"
                            fill="#00B1EB"
                          />
                          <path
                            d="M75.9889 98.6892C84.1451 96.2746 92.5695 94.8813 101.069 94.5412C102.004 94.5032 102.009 93.0412 101.069 93.0832C92.4389 93.4251 83.8846 94.8359 75.6019 97.2832C75.4231 97.3412 75.2735 97.466 75.1844 97.6315C75.0953 97.797 75.0735 97.9905 75.1235 98.1717C75.1735 98.3529 75.2915 98.5079 75.4529 98.6043C75.6142 98.7006 75.8056 98.7311 75.9889 98.6892Z"
                            fill="#FFD100"
                          />
                          <path
                            d="M96.9636 39.299C94.2136 57.285 94.9386 75.986 95.4196 94.099C95.4196 94.2923 95.4964 94.4777 95.6331 94.6145C95.7699 94.7512 95.9553 94.828 96.1486 94.828C96.342 94.828 96.5274 94.7512 96.6641 94.6145C96.8008 94.4777 96.8776 94.2923 96.8776 94.099C96.4006 76.125 95.6406 57.531 98.3686 39.684C98.5096 38.766 97.1046 38.371 96.9636 39.296"
                            fill="#FFD100"
                          />
                          <path
                            d="M82.0736 41.2382C80.5916 47.9832 80.6266 55.1212 80.5376 61.9882C80.3906 73.3882 80.6786 84.7882 80.9876 96.1752C80.9876 96.3685 81.0644 96.5539 81.2011 96.6907C81.3378 96.8274 81.5232 96.9042 81.7166 96.9042C81.9099 96.9042 82.0954 96.8274 82.2321 96.6907C82.3688 96.5539 82.4456 96.3685 82.4456 96.1752C82.1456 85.1492 81.8726 74.1142 81.9836 63.0842C82.0546 55.9982 81.9516 48.5842 83.4836 41.6262C83.6836 40.7112 82.2836 40.3212 82.0776 41.2382"
                            fill="#FFD100"
                          />
                          <path
                            d="M82.8045 120.239C87.7206 123.087 91.6649 127.349 94.1235 132.471C94.5325 133.315 95.7905 132.577 95.3825 131.736C92.8006 126.395 88.6754 121.952 83.5405 118.981C83.3736 118.883 83.1747 118.856 82.9876 118.905C82.8006 118.954 82.6406 119.076 82.543 119.243C82.4454 119.409 82.4182 119.608 82.4672 119.795C82.5162 119.982 82.6376 120.142 82.8045 120.24"
                            fill="#FFD100"
                          />
                          <path
                            d="M94.913 144.283C93.381 128.477 101.676 112.657 115.213 104.489C115.38 104.391 115.501 104.232 115.55 104.044C115.599 103.857 115.572 103.659 115.474 103.492C115.377 103.325 115.217 103.203 115.03 103.154C114.843 103.105 114.644 103.132 114.477 103.23C100.535 111.643 91.877 127.979 93.456 144.282C93.546 145.208 95.004 145.216 94.914 144.282"
                            fill="#FFD100"
                          />
                          <path
                            d="M116.416 85.0981C115.706 91.2981 115.065 97.4981 114.141 103.666C114.003 104.584 115.408 104.98 115.546 104.054C116.49 97.7541 117.146 91.4241 117.873 85.0981C117.979 84.1671 116.521 84.1751 116.415 85.0981"
                            fill="#FFD100"
                          />
                          <path
                            d="M4.92578 160.805L25.5078 132.657C25.5078 132.657 25.5078 124.721 27.6138 105.933C29.7198 87.1452 29.6698 77.9812 31.5008 74.1882C33.7678 69.4882 40.2468 70.3822 42.1288 74.1482C42.1288 74.1482 44.1208 49.7282 45.4368 43.4162C47.0078 35.8852 56.0368 37.2622 57.3368 39.7722C57.3315 38.2954 57.6776 36.8385 58.3465 35.5219C59.0154 34.2053 59.988 33.0667 61.1838 32.2002C64.5838 29.8122 70.3748 30.2572 72.2778 34.7922C72.9567 36.5625 73.3597 38.4265 73.4728 40.3192C74.4915 39.5747 75.6642 39.0682 76.9045 38.837C78.1449 38.6058 79.4213 38.6557 80.6398 38.9832C85.1948 40.2772 85.6398 44.3482 86.0858 49.2472C86.5318 54.1462 89.5678 90.9122 89.5678 105.852C89.5678 120.792 90.7818 135.734 84.7088 149.824C78.6358 163.914 64.2158 166.992 64.2158 166.992L44.2528 193.938C44.2528 193.938 19.0448 180.556 4.92578 160.805Z"
                            fill="#12264B"
                          />
                          <path
                            d="M56.368 40.2771C55.4393 56.4771 54.3963 72.6717 53.239 88.8611C53.173 89.7971 54.63 89.7921 54.697 88.8611C55.8543 72.6737 56.8973 56.4791 57.826 40.2771C57.88 39.3401 56.426 39.3431 56.368 40.2771Z"
                            fill="#FFD100"
                          />
                          <path
                            d="M72.3889 40.8232C71.4862 56.5725 70.4722 72.3145 69.3469 88.0492C69.2809 88.9862 70.7379 88.9812 70.8049 88.0492C71.9302 72.3159 72.9439 56.5739 73.8459 40.8232C73.8999 39.8862 72.4469 39.8892 72.3889 40.8232Z"
                            fill="#FFD100"
                          />
                          <path
                            d="M41.2667 74.0281C41.0974 80.6721 40.8137 87.3107 40.4157 93.9441C40.3587 94.8811 41.8157 94.8781 41.8737 93.9441C42.2737 87.3094 42.5574 80.6707 42.7247 74.0281C42.7247 73.8347 42.6479 73.6493 42.5112 73.5126C42.3745 73.3759 42.189 73.2991 41.9957 73.2991C41.8024 73.2991 41.6169 73.3759 41.4802 73.5126C41.3435 73.6493 41.2667 73.8347 41.2667 74.0281Z"
                            fill="#FFD100"
                          />
                          <path
                            d="M106.185 4.5191C104.793 10.0698 103.402 15.6208 102.012 21.1721C101.965 21.3567 101.993 21.5521 102.089 21.7166C102.185 21.881 102.341 22.0015 102.525 22.0521C102.708 22.1028 102.904 22.0797 103.071 21.9878C103.238 21.8958 103.362 21.7423 103.417 21.5601L107.591 4.9071C107.633 4.72384 107.602 4.53148 107.506 4.37009C107.409 4.2087 107.254 4.09072 107.073 4.04071C106.892 3.9907 106.698 4.01253 106.533 4.10164C106.367 4.19076 106.243 4.34029 106.185 4.5191Z"
                            fill="#FFD100"
                            stroke="#FFD100"
                            strokeWidth={2}
                          />
                          <path
                            d="M132.687 25.898L117.766 34.39C117.602 34.489 117.483 34.6485 117.436 34.834C117.389 35.0196 117.416 35.2163 117.513 35.3817C117.61 35.5471 117.767 35.6678 117.952 35.7178C118.137 35.7679 118.334 35.7431 118.501 35.649L133.422 27.158C133.586 27.0591 133.704 26.8996 133.751 26.714C133.799 26.5285 133.771 26.3318 133.675 26.1664C133.578 26.001 133.42 25.8803 133.236 25.8303C133.051 25.7802 132.854 25.8049 132.687 25.899"
                            fill="#FFD100"
                          />
                          <path
                            d="M132.687 25.898L117.766 34.39C117.602 34.489 117.483 34.6485 117.436 34.834C117.389 35.0196 117.416 35.2163 117.513 35.3817C117.61 35.5471 117.767 35.6678 117.952 35.7178C118.137 35.7679 118.334 35.7431 118.501 35.649L133.422 27.158C133.586 27.0591 133.704 26.8996 133.751 26.714C133.799 26.5285 133.771 26.3318 133.675 26.1664C133.578 26.001 133.42 25.8803 133.236 25.8303C133.051 25.7802 132.854 25.8049 132.687 25.899"
                            stroke="#FFD100"
                            strokeWidth={2}
                          />
                          <path
                            d="M74.1586 9.893L80.5286 25.832C80.8726 26.692 82.2826 26.317 81.9346 25.444L75.5636 9.505C75.2206 8.645 73.8096 9.02 74.1586 9.893Z"
                            fill="#FFD100"
                            stroke="#FFD100"
                            strokeWidth={2}
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_384_449">
                          <rect width="162.19" height="196.937" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3>Com você do início ao fim!</h3>
                    <p>
                      Lorem ipsum dolor sit amet. Sed veritatis maxime est illo ipsum
                      ut accusantium deleniti. Et explicabo vitae nam ipsam architecto
                      ad quis molestias et facere unde et cumque quia eum autem
                      reprehenderit est eveniet asperiores.
                    </p>
                  </div>
                  <div
                    className="direction_column space_evenly align_center por_que_card por_que_slide3"
                    id="por_que_slide3"
                  >
                    <svg
                      width={163}
                      height={128}
                      viewBox="0 0 163 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M81.4992 122.661C112.81 122.661 138.193 95.2836 138.193 61.5122C138.193 27.7407 112.81 0.363525 81.4992 0.363525C50.1882 0.363525 24.8057 27.7407 24.8057 61.5122C24.8057 95.2836 50.1882 122.661 81.4992 122.661Z"
                        fill="#FFD100"
                      />
                      <mask
                        id="mask0_384_479"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={16}
                        width={163}
                        height={112}
                      >
                        <path
                          d="M162.807 16.0208H0.192871V127.636H162.807V16.0208Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_384_479)">
                        <path
                          d="M53.8854 61.4125C54.2307 60.5675 54.3518 59.6357 54.2353 58.7208C54.1219 58.0427 53.8423 57.4097 53.4254 56.8875C53.0086 56.3653 52.4698 55.973 51.8649 55.7512C52.0671 55.1663 52.1501 54.5412 52.1083 53.9185C52.0665 53.2958 51.9008 52.6902 51.6225 52.1428C50.8765 50.7298 48.6792 50.1685 45.8639 50.4626C42.8389 50.7787 18.5567 52.774 8.63362 74.489C0.169781 93.0094 0.192872 114.088 0.192872 114.088C0.192872 114.088 7.36538 119.614 22.7353 119.22C22.7353 119.22 27.7852 101.379 30.6396 92.6952C31.4078 90.3579 32.0526 87.9478 32.5873 85.6718C33.6948 84.3853 41.8398 74.9556 44.839 72.4065C48.0593 69.6698 52.7646 68.459 54.0977 65.6168C54.3986 64.9549 54.537 64.2209 54.4999 63.4848C54.4627 62.7487 54.2512 62.0353 53.8854 61.4125Z"
                          fill="#12264B"
                        />
                        <path
                          d="M31.6381 72.7621C33.484 73.4578 35.0725 74.7774 36.1675 76.5248C36.4766 77.0325 37.2333 76.5583 36.926 76.0458C35.7082 74.0911 33.9333 72.6173 31.8699 71.8473C31.3317 71.6557 31.1016 72.5696 31.6363 72.7611"
                          fill="white"
                        />
                        <path
                          d="M30.9672 74.3761C33.088 69.076 37.5482 65.9321 42.1576 63.4108C45.5822 61.5381 50.4696 60.0438 52.0158 55.8433C52.2245 55.2762 51.3754 55.03 51.1694 55.5914C50.117 58.4555 47.203 59.6845 44.8122 60.949C42.6363 62.0985 40.4391 63.2164 38.3644 64.5738C34.8954 66.844 31.8438 69.8184 30.2123 73.8972C29.9903 74.4508 30.7452 74.9336 30.9707 74.3761"
                          fill="white"
                        />
                        <path
                          d="M35.9889 75.3148C39.1231 71.9114 43.133 69.7589 47.1456 67.8124C49.8739 66.4867 52.7834 65.0249 53.9157 61.8235C54.1173 61.2488 53.2683 61.0074 53.0685 61.5716C51.794 65.1753 47.7841 66.3832 44.8444 67.913C41.3529 69.558 38.1479 71.8349 35.3681 74.6452C35.304 74.7375 35.2728 74.8516 35.2804 74.9666C35.288 75.0816 35.3338 75.1898 35.4094 75.2713C35.4849 75.3528 35.5853 75.4022 35.6919 75.4104C35.7985 75.4185 35.9043 75.385 35.9898 75.3158"
                          fill="white"
                        />
                        <path
                          d="M128.555 102.712L36.1646 93.7347C35.9348 93.7124 35.7114 93.6416 35.5071 93.5261C35.3028 93.4107 35.1216 93.253 34.9738 93.062C34.826 92.871 34.7145 92.6505 34.6457 92.413C34.577 92.1756 34.5523 91.9258 34.573 91.678L40.7464 17.745C40.7672 17.4972 40.833 17.2562 40.9401 17.0358C41.0472 16.8155 41.1935 16.62 41.3706 16.4606C41.5478 16.3012 41.7523 16.181 41.9725 16.1068C42.1927 16.0327 42.4243 16.006 42.6541 16.0284L135.045 25.0041C135.509 25.0493 135.937 25.2914 136.236 25.6771C136.534 26.0627 136.678 26.5604 136.637 27.0608L130.462 100.994C130.442 101.242 130.376 101.483 130.269 101.704C130.162 101.924 130.016 102.12 129.839 102.279C129.661 102.439 129.457 102.559 129.237 102.634C129.016 102.708 128.784 102.735 128.555 102.712Z"
                          fill="#FAB500"
                        />
                        <path
                          d="M125.593 27.5042L47.625 19.93C47.1611 19.885 46.6997 20.0406 46.3421 20.3625C45.9845 20.6844 45.7601 21.1462 45.7182 21.6466L40.1106 88.7966C40.0689 89.2969 40.2131 89.7946 40.5116 90.1803C40.81 90.5659 41.2382 90.808 41.7021 90.8532L119.67 98.4284C120.134 98.4736 120.595 98.3183 120.953 97.9966C121.311 97.6749 121.535 97.2131 121.577 96.7128L127.185 29.5628C127.227 29.0625 127.083 28.5647 126.784 28.1791C126.486 27.7934 126.057 27.5514 125.594 27.5061"
                          fill="#00B1EB"
                        />
                        <path
                          d="M114.874 41.3146L112.938 48.1666C112.773 48.7509 113.62 49.001 113.785 48.4185C114.43 46.1342 115.076 43.8502 115.721 41.5666C115.886 40.9822 115.039 40.7322 114.874 41.3146Z"
                          fill="#FAB500"
                          stroke="#FAB500"
                          strokeWidth="1.5053"
                        />
                        <path
                          d="M97.0042 58.4228L103.599 57.577C104.155 57.5061 104.161 56.5578 103.599 56.6296L97.0042 57.4755C96.4501 57.5463 96.443 58.4947 97.0042 58.4228Z"
                          fill="#FAB500"
                          stroke="#FAB500"
                          strokeWidth="1.5053"
                        />
                        <path
                          d="M102.011 44.993L106.186 50.5681C106.541 51.047 107.162 50.3688 106.807 49.8975L102.633 44.3224C102.278 43.8435 101.656 44.5217 102.011 44.993Z"
                          fill="#FAB500"
                          stroke="#FAB500"
                          strokeWidth="1.5053"
                        />
                        <path
                          d="M128.851 67.074C128.764 67.074 128.676 67.0698 128.585 67.0615C127.801 66.9872 127.074 66.5846 126.562 65.9399C126.049 65.2952 125.791 64.4597 125.842 63.6122C125.894 62.7647 126.251 61.9727 126.837 61.4057C127.423 60.8386 128.192 60.5417 128.979 60.5785C129.766 60.6153 130.508 60.9828 131.046 61.6024C131.585 62.222 131.877 63.0444 131.86 63.8935C131.844 64.7426 131.519 65.5509 130.957 66.1454C130.395 66.7398 129.639 67.0731 128.851 67.074ZM128.845 61.4222C128.26 61.4214 127.697 61.6679 127.278 62.1089C126.859 62.55 126.617 63.1505 126.603 63.7819C126.589 64.4132 126.805 65.0253 127.205 65.4869C127.605 65.9485 128.156 66.223 128.741 66.2515C129.326 66.2801 129.898 66.0604 130.335 65.6396C130.771 65.2188 131.038 64.6303 131.077 64.0002C131.116 63.3701 130.925 62.7484 130.545 62.2684C130.164 61.7883 129.625 61.488 129.041 61.4318C128.976 61.4261 128.911 61.4222 128.845 61.4222Z"
                          fill="white"
                        />
                        <path
                          d="M40.3157 58.2391C40.4933 56.0512 40.6689 53.8633 40.8423 51.6754C40.8859 51.1294 40.0963 51.1332 40.0528 51.6754C39.8752 53.8639 39.6996 56.0518 39.5261 58.2391C39.4826 58.7851 40.2722 58.7812 40.3157 58.2391Z"
                          fill="#FAB500"
                        />
                        <path
                          d="M118.161 91.4806C118.161 91.4806 110.89 86.9928 108.464 85.5597C105.39 83.7397 102.81 84.4102 101.73 85.4017C100.568 86.464 99.498 88.9536 101.583 91.7172C103.669 94.4808 117.229 110.814 121.437 115.078C124.779 118.368 129.079 120.299 133.598 120.538L136.898 127.64C136.898 127.64 153.805 127.64 162.807 116.667C162.807 116.667 151.389 83.4274 149.12 78.7748C147.075 74.4088 143.758 70.8869 139.679 68.7492C135.433 66.3813 129.798 68.276 129.798 68.276C129.798 68.276 124.089 66.6179 115.6 68.0394C108.429 69.2397 104.873 71.1421 103.121 73.2888C101.51 75.2621 102.425 79.999 108.134 80.1571C113.843 80.3151 117.356 80.2366 117.356 80.2366L118.161 91.4806Z"
                          fill="#12264B"
                        />
                        <path
                          d="M118.161 91.4768C114.47 85.7575 111.79 79.3521 110.257 72.5829C107.915 61.7412 108.064 55.2676 110.622 53.1103C112.636 51.4129 116.04 52.3976 116.6 56.0578C118.134 66.0652 121.015 71.1623 121.015 71.1623L118.161 91.4768Z"
                          fill="#12264B"
                        />
                        <path
                          d="M108.922 70.0626C109.545 73.444 110.482 76.7494 111.718 79.9291C111.933 80.4837 112.784 80.2395 112.565 79.6772C111.329 76.4977 110.392 73.1922 109.769 69.8106C109.658 69.2129 108.812 69.4667 108.922 70.0626Z"
                          fill="white"
                        />
                        <path
                          d="M117.785 91.7C119.339 93.0341 120.905 94.3509 122.484 95.6505C122.934 96.0203 123.372 95.1974 122.928 94.8324C121.409 93.582 119.902 92.3144 118.406 91.0295C117.968 90.653 117.34 91.3169 117.784 91.7"
                          fill="white"
                        />
                        <path
                          d="M119.647 68.1132C122.179 74.651 125.153 81.319 129.89 86.3309C130.294 86.7581 130.916 86.0885 130.512 85.6603C125.894 80.7749 122.963 74.2324 120.494 67.8603C120.28 67.3057 119.428 67.5499 119.648 68.1122"
                          fill="white"
                        />
                        <path
                          d="M129.979 68.8766C134.385 71.3346 138.031 75.1228 140.473 79.7787C140.54 79.8686 140.634 79.9297 140.739 79.9507C140.844 79.9717 140.953 79.9512 141.045 79.8931C141.137 79.8349 141.206 79.743 141.241 79.634C141.275 79.525 141.272 79.4064 141.232 79.2997C138.714 74.5025 134.959 70.5968 130.423 68.0566C129.923 67.7693 129.478 68.5912 129.978 68.8747"
                          fill="white"
                        />
                        <path
                          d="M111.094 52.7397C111.124 55.4553 111.646 59.106 113.176 61.3714C113.4 61.7479 113.7 62.0657 114.052 62.3019C114.405 62.5381 114.801 62.6867 115.214 62.737C115.626 62.7873 116.044 62.7379 116.436 62.5925C116.828 62.4471 117.186 62.2093 117.483 61.8964C117.868 61.451 117.749 55.7322 115.917 53.7962C115.335 53.0693 114.545 52.5715 113.672 52.3808C112.8 52.1901 111.893 52.3173 111.094 52.7425"
                          fill="white"
                        />
                        <path
                          d="M100.392 87.7161C100.098 92.0075 104.744 96.4647 105.082 95.981C108.079 91.679 105.532 87.5369 102.884 85.1211C102.157 84.4572 100.486 86.3089 100.392 87.7161Z"
                          fill="white"
                        />
                        <path
                          d="M22.0283 113.035C22.0283 113.035 36.3005 110.509 39.5244 92.3513C39.5244 92.3513 47.6952 79.7863 49.4545 76.9441C51.2139 74.102 50.8995 71.9515 49.9181 70.8786C49.133 70.0213 47.0122 69.3258 44.5237 70.5912C42.0351 71.8566 27.6804 82.3928 27.6804 82.3928L22.0283 113.035Z"
                          fill="#12264B"
                        />
                        <path
                          d="M28.821 81.0843C31.1402 79.5459 33.4985 78.0825 35.8958 76.6941C36.3932 76.4068 35.9509 75.5868 35.4518 75.8761C33.0538 77.2682 30.6955 78.7316 28.3769 80.2662C27.8965 80.5852 28.337 81.4052 28.821 81.0843Z"
                          fill="white"
                        />
                        <path
                          d="M47.4944 69.8297C43.1426 69.6113 39.8618 73.5848 39.9338 73.6614C43.4738 77.4787 47.8177 74.1289 50.3169 71.3796C50.482 71.1986 49.0531 69.9073 47.4944 69.8297Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <h3>Aplicativo moderno, prático e intuito!</h3>
                    <p>
                      Lorem ipsum dolor sit amet. Sed veritatis maxime est illo ipsum
                      ut accusantium deleniti. Et explicabo vitae nam ipsam architecto
                      ad quis molestias et facere unde et cumque quia eum autem
                      reprehenderit est eveniet asperiores.
                    </p>
                  </div>
                  <div
                    className="direction_column space_evenly align_center por_que_card por_que_slide4"
                    id="por_que_slide4"
                  >
                    <svg
                      width={129}
                      height={138}
                      viewBox="0 0 129 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64.297 137.25C99.8073 137.25 128.594 106.525 128.594 68.6248C128.594 30.7244 99.8073 0 64.297 0C28.7867 0 0 30.7244 0 68.6248C0 106.525 28.7867 137.25 64.297 137.25Z"
                        fill="#FFD100"
                      />
                      <mask
                        id="mask0_384_512"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={3}
                        y={28}
                        width={122}
                        height={110}
                      >
                        <path
                          d="M124.235 28.5669H3.646V137.25H124.235V28.5669Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_384_512)">
                        <path
                          d="M44.9601 137.195L51.0601 124.071C51.0601 124.071 63.6601 121.675 63.8501 105.843C64.0401 90.0115 63.8501 44.8045 63.8501 41.6795C63.8501 38.5545 62.8661 35.982 60.3131 34.5963C56.6801 32.6173 53.5311 35.8466 53.5311 35.8466C53.5311 35.8466 53.1961 31.4692 50.0831 29.9642C48.7112 29.247 47.1343 29.1281 45.6827 29.6325C44.231 30.1368 43.0171 31.2253 42.2951 32.6699C42.1402 31.7228 41.7215 30.8485 41.0944 30.1627C40.4673 29.4769 39.6614 29.0118 38.7831 28.829C35.1501 27.754 32.8971 30.2265 31.8311 32.3055C30.7651 34.3846 23.6461 47.4093 24.1761 69.9079C24.1761 69.9079 18.6761 62.7151 14.1471 58.0604C10.8041 54.6204 7.38912 55.1697 5.47912 56.7456C3.46212 58.4097 3.04612 61.9282 4.54612 65.5972C6.13212 69.479 19.8161 105.167 19.8161 105.167L11.7251 123.863C11.7251 123.863 25.7751 138.237 44.9601 137.193"
                          fill="#12264B"
                        />
                        <path
                          d="M24.1948 70.0736C25.7057 72.3849 27.0503 74.8168 28.2168 77.3481C28.4658 77.8856 29.2168 77.4137 28.9698 76.8751C27.8031 74.3453 26.4585 71.9148 24.9478 69.6049C24.6278 69.1136 23.8718 69.5823 24.1948 70.0779"
                          fill="#FFD100"
                        />
                        <path
                          d="M41.9644 33.2389C42.7804 38.9751 41.4294 44.4296 40.3234 49.9992C39.0754 55.7782 38.8772 61.7618 39.7394 67.6217C39.8334 68.2151 40.6744 67.9635 40.5804 67.3723C39.5254 60.7234 40.2874 54.4142 41.6494 47.8986C42.6864 42.9354 43.5304 38.0807 42.8064 32.9895C42.7214 32.395 41.8804 32.6476 41.9644 33.2389Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M53.2351 36.1069C53.3118 39.2919 53.1898 42.4789 52.8701 45.6464C52.5401 48.6392 51.7431 51.4869 51.2821 54.4442C50.5276 59.823 50.3976 65.2818 50.8951 70.695C50.9421 71.2916 51.8151 71.297 51.7671 70.695C51.1848 64.9825 51.3711 59.2096 52.3201 53.5541C53.5348 47.831 54.1344 41.977 54.1071 36.1069C54.1071 35.9826 54.0612 35.8634 53.9794 35.7755C53.8976 35.6876 53.7867 35.6382 53.6711 35.6382C53.5555 35.6382 53.4446 35.6876 53.3628 35.7755C53.281 35.8634 53.2351 35.9826 53.2351 36.1069Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M33.7672 68.3655C41.8672 67.6646 50.6922 68.5634 56.3262 75.6111C56.6932 76.069 57.3072 75.4036 56.9432 74.9478C51.1702 67.727 42.0832 66.7079 33.7682 67.4228C33.2132 67.4701 33.2082 68.4086 33.7682 68.3602"
                          fill="#FFD100"
                        />
                        <path
                          d="M43.5494 123.265C45.8493 124.381 48.3632 124.892 50.8834 124.757C51.4424 124.728 51.4454 123.789 50.8834 123.819C48.5173 123.959 46.1543 123.491 43.9894 122.455C43.4814 122.212 43.0374 123.02 43.5494 123.265Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M44.689 111.127C46.665 97.1379 41.772 81.9192 28.71 76.656C28.184 76.441 27.957 77.3493 28.478 77.56C41.053 82.6276 45.746 97.44 43.847 110.878C43.764 111.468 44.605 111.722 44.689 111.127Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M82.9212 137.195L76.8212 124.071C76.8212 124.071 64.2212 121.675 64.0312 105.843C63.8412 90.0115 64.0312 44.8045 64.0312 41.6795C64.0312 38.5545 65.0152 35.982 67.5682 34.5963C71.2012 32.6173 74.3502 35.8466 74.3502 35.8466C74.3502 35.8466 74.6892 31.4713 77.8022 29.9642C79.1742 29.247 80.751 29.1281 82.2027 29.6325C83.6543 30.1368 84.8682 31.2253 85.5902 32.6699C85.7449 31.7234 86.163 30.8496 86.7893 30.1638C87.4156 29.478 88.2207 29.0126 89.0982 28.829C92.7312 27.754 94.9842 30.2265 96.0502 32.3055C97.1162 34.3846 104.238 47.4093 103.705 69.9079C103.705 69.9079 109.205 62.7151 113.734 58.0604C117.077 54.6204 120.492 55.1697 122.402 56.7456C124.42 58.4108 124.835 61.9293 123.336 65.5983C121.75 69.4801 108.066 105.168 108.066 105.168L116.156 123.865C116.156 123.865 102.106 138.239 82.9212 137.195Z"
                          fill="#12264B"
                        />
                        <path
                          d="M102.932 69.6005C101.421 71.9107 100.077 74.3415 98.91 76.8718C98.662 77.4093 99.41 77.8866 99.663 77.3448C100.83 74.8147 102.175 72.3839 103.685 70.0735C104.008 69.579 103.252 69.106 102.932 69.6005Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M85.0811 32.9903C84.3571 38.0794 85.2001 42.9373 86.2371 47.8995C87.5991 54.4162 88.3611 60.7221 87.3061 67.3731C87.2121 67.9633 88.0521 68.217 88.1471 67.6225C89.0096 61.7627 88.8113 55.779 87.5631 50.0001C86.4571 44.4294 85.1061 38.977 85.9221 33.2397C86.0061 32.6496 85.1661 32.3948 85.0811 32.9903Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M73.7734 36.1069C73.7459 41.977 74.3455 47.8311 75.5604 53.5541C76.5094 59.2096 76.6956 64.9825 76.1134 70.695C76.0664 71.2959 76.9384 71.2927 76.9854 70.695C77.4828 65.2818 77.3528 59.823 76.5984 54.4442C76.1594 51.6224 75.3884 48.8983 75.0544 46.0474C74.7004 42.7484 74.5637 39.4266 74.6454 36.1069C74.6454 35.9826 74.5994 35.8634 74.5177 35.7755C74.4359 35.6876 74.325 35.6382 74.2094 35.6382C74.0937 35.6382 73.9828 35.6876 73.9011 35.7755C73.8193 35.8634 73.7734 35.9826 73.7734 36.1069Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M94.114 67.428C85.798 66.7088 76.714 67.7279 70.939 74.953C70.575 75.4077 71.189 76.0742 71.556 75.6163C77.189 68.5707 86.014 67.6699 94.115 68.3708C94.674 68.4192 94.671 67.4818 94.115 67.4334"
                          fill="#FFD100"
                        />
                        <path
                          d="M83.8921 122.452C81.7272 123.488 79.3642 123.955 76.9981 123.816C76.4371 123.787 76.4391 124.725 76.9981 124.754C79.5181 124.89 82.032 124.379 84.3321 123.265C84.8431 123.02 84.4001 122.212 83.8921 122.455"
                          fill="#FFD100"
                        />
                        <path
                          d="M84.034 110.877C82.134 97.4398 86.828 82.6274 99.404 77.5599C99.925 77.3449 99.704 76.4429 99.172 76.6558C86.11 81.9233 81.217 97.1378 83.193 111.127C83.277 111.721 84.117 111.469 84.034 110.877Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M63.5039 42.8159V108.292C63.5039 108.416 63.5498 108.535 63.6316 108.623C63.7134 108.711 63.8243 108.761 63.9399 108.761C64.0555 108.761 64.1664 108.711 64.2482 108.623C64.33 108.535 64.3759 108.416 64.3759 108.292V42.8159C64.3759 42.6916 64.33 42.5723 64.2482 42.4844C64.1664 42.3966 64.0555 42.3472 63.9399 42.3472C63.8243 42.3472 63.7134 42.3966 63.6316 42.4844C63.5498 42.5723 63.5039 42.6916 63.5039 42.8159Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M77.6272 62.9033L75.0952 62.9796C75.2054 59.7139 74.7611 56.454 73.7842 53.3595C72.3152 49.0455 69.2482 44.9809 62.8902 45.3077C62.6222 45.3195 62.3622 45.3421 62.1052 45.3765C51.7052 46.6472 52.0422 62.11 52.0422 62.11L49.3852 61.5907C49.3852 61.5907 48.3952 44.5036 61.7112 42.5428C62.1892 42.4676 62.6812 42.4192 63.1952 42.3891C70.3652 41.9698 73.9782 46.7267 75.7952 51.7609C77.0011 55.3331 77.6209 59.1032 77.6272 62.9033Z"
                          fill="#12264B"
                          stroke="#FFD100"
                          strokeWidth={2}
                        />
                        <path
                          d="M81.909 59.4505C81.909 59.4505 82.363 63.9387 82.686 73.6932C82.708 74.364 82.729 75.0628 82.751 75.7841C82.771 76.3592 82.786 76.9451 82.8041 77.5482C83.125 89.9827 82.85 95.6727 82.85 95.6727C82.8559 95.8905 82.8217 96.1075 82.7495 96.3112C82.6772 96.5149 82.5683 96.7012 82.429 96.8596C82.2897 97.018 82.1227 97.1452 81.9375 97.2341C81.7524 97.323 81.5527 97.3718 81.35 97.3776L47.65 98.3849C47.2421 98.3982 46.846 98.2371 46.5484 97.9368C46.2509 97.6365 46.0764 97.2216 46.063 96.7831C46.063 96.7831 45.545 93.2098 45.171 78.6801C44.797 64.1504 45.124 60.5513 45.124 60.5513C45.1133 60.113 45.2646 59.688 45.5448 59.3694C45.8251 59.0509 46.2114 58.8647 46.619 58.8518L50.226 58.7443H50.269L80.321 57.8391C80.7295 57.8284 81.1252 57.9921 81.4217 58.2943C81.7182 58.5965 81.8913 59.0126 81.903 59.4516"
                          fill="#FFD100"
                        />
                        <path
                          d="M68.0272 72.4998C68.0631 73.3734 67.8573 74.2389 67.4358 74.9868C67.0142 75.7347 66.3958 76.3314 65.6587 76.7014C64.9217 77.0715 64.0991 77.1983 63.295 77.0658C62.491 76.9334 61.7415 76.5475 61.1414 75.9571C60.5413 75.3668 60.1175 74.5983 59.9237 73.749C59.7298 72.8997 59.7746 72.0077 60.0523 71.1858C60.3301 70.3639 60.8283 69.6489 61.484 69.1314C62.1397 68.6139 62.9235 68.317 63.7362 68.2783C64.2758 68.2526 64.8148 68.3414 65.3225 68.5396C65.8301 68.7379 66.2965 69.0417 66.695 69.4337C67.0934 69.8257 67.4162 70.2982 67.6447 70.8243C67.8733 71.3504 68.0033 71.9197 68.0272 72.4998Z"
                          fill="black"
                        />
                        <path
                          d="M62.906 75.7196L59.995 84.4271C59.9325 84.6144 59.9138 84.8153 59.9406 85.0122C59.9674 85.209 60.0388 85.3958 60.1486 85.556C60.2584 85.7162 60.4031 85.8449 60.5701 85.9307C60.7371 86.0165 60.9211 86.0569 61.106 86.0482L67.106 85.7622C67.2856 85.7538 67.4607 85.6994 67.6167 85.6035C67.7727 85.5076 67.9052 85.373 68.003 85.2109C68.1009 85.0488 68.1612 84.864 68.1792 84.6717C68.1971 84.4795 68.172 84.2854 68.106 84.1057L65.016 75.6841C64.9317 75.4551 64.7845 75.2592 64.594 75.1223C64.4035 74.9855 64.1787 74.9143 63.9496 74.9181C63.7205 74.922 63.498 75.0007 63.3116 75.1439C63.1251 75.2871 62.9837 75.4879 62.906 75.7196Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                    <h3>Prezamos pela segurança em nossas plataformas</h3>
                    <p>
                      Lorem ipsum dolor sit amet. Sed veritatis maxime est illo ipsum
                      ut accusantium deleniti. Et explicabo vitae nam ipsam architecto
                      ad quis molestias et facere unde et cumque quia eum autem
                      reprehenderit est eveniet asperiores.
                    </p>
                  </div>
                  <div
                    className="direction_column space_evenly align_center por_que_card por_que_slide5"
                    id="por_que_slide5"
                  >
                    <svg
                      width={129}
                      height={138}
                      viewBox="0 0 129 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64.297 137.25C99.8073 137.25 128.594 106.525 128.594 68.6248C128.594 30.7244 99.8073 0 64.297 0C28.7867 0 0 30.7244 0 68.6248C0 106.525 28.7867 137.25 64.297 137.25Z"
                        fill="#FFD100"
                      />
                      <mask
                        id="mask0_384_512"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={3}
                        y={28}
                        width={122}
                        height={110}
                      >
                        <path
                          d="M124.235 28.5669H3.646V137.25H124.235V28.5669Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_384_512)">
                        <path
                          d="M44.9601 137.195L51.0601 124.071C51.0601 124.071 63.6601 121.675 63.8501 105.843C64.0401 90.0115 63.8501 44.8045 63.8501 41.6795C63.8501 38.5545 62.8661 35.982 60.3131 34.5963C56.6801 32.6173 53.5311 35.8466 53.5311 35.8466C53.5311 35.8466 53.1961 31.4692 50.0831 29.9642C48.7112 29.247 47.1343 29.1281 45.6827 29.6325C44.231 30.1368 43.0171 31.2253 42.2951 32.6699C42.1402 31.7228 41.7215 30.8485 41.0944 30.1627C40.4673 29.4769 39.6614 29.0118 38.7831 28.829C35.1501 27.754 32.8971 30.2265 31.8311 32.3055C30.7651 34.3846 23.6461 47.4093 24.1761 69.9079C24.1761 69.9079 18.6761 62.7151 14.1471 58.0604C10.8041 54.6204 7.38912 55.1697 5.47912 56.7456C3.46212 58.4097 3.04612 61.9282 4.54612 65.5972C6.13212 69.479 19.8161 105.167 19.8161 105.167L11.7251 123.863C11.7251 123.863 25.7751 138.237 44.9601 137.193"
                          fill="#12264B"
                        />
                        <path
                          d="M24.1948 70.0736C25.7057 72.3849 27.0503 74.8168 28.2168 77.3481C28.4658 77.8856 29.2168 77.4137 28.9698 76.8751C27.8031 74.3453 26.4585 71.9148 24.9478 69.6049C24.6278 69.1136 23.8718 69.5823 24.1948 70.0779"
                          fill="#FFD100"
                        />
                        <path
                          d="M41.9644 33.2389C42.7804 38.9751 41.4294 44.4296 40.3234 49.9992C39.0754 55.7782 38.8772 61.7618 39.7394 67.6217C39.8334 68.2151 40.6744 67.9635 40.5804 67.3723C39.5254 60.7234 40.2874 54.4142 41.6494 47.8986C42.6864 42.9354 43.5304 38.0807 42.8064 32.9895C42.7214 32.395 41.8804 32.6476 41.9644 33.2389Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M53.2351 36.1069C53.3118 39.2919 53.1898 42.4789 52.8701 45.6464C52.5401 48.6392 51.7431 51.4869 51.2821 54.4442C50.5276 59.823 50.3976 65.2818 50.8951 70.695C50.9421 71.2916 51.8151 71.297 51.7671 70.695C51.1848 64.9825 51.3711 59.2096 52.3201 53.5541C53.5348 47.831 54.1344 41.977 54.1071 36.1069C54.1071 35.9826 54.0612 35.8634 53.9794 35.7755C53.8976 35.6876 53.7867 35.6382 53.6711 35.6382C53.5555 35.6382 53.4446 35.6876 53.3628 35.7755C53.281 35.8634 53.2351 35.9826 53.2351 36.1069Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M33.7672 68.3655C41.8672 67.6646 50.6922 68.5634 56.3262 75.6111C56.6932 76.069 57.3072 75.4036 56.9432 74.9478C51.1702 67.727 42.0832 66.7079 33.7682 67.4228C33.2132 67.4701 33.2082 68.4086 33.7682 68.3602"
                          fill="#FFD100"
                        />
                        <path
                          d="M43.5494 123.265C45.8493 124.381 48.3632 124.892 50.8834 124.757C51.4424 124.728 51.4454 123.789 50.8834 123.819C48.5173 123.959 46.1543 123.491 43.9894 122.455C43.4814 122.212 43.0374 123.02 43.5494 123.265Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M44.689 111.127C46.665 97.1379 41.772 81.9192 28.71 76.656C28.184 76.441 27.957 77.3493 28.478 77.56C41.053 82.6276 45.746 97.44 43.847 110.878C43.764 111.468 44.605 111.722 44.689 111.127Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M82.9212 137.195L76.8212 124.071C76.8212 124.071 64.2212 121.675 64.0312 105.843C63.8412 90.0115 64.0312 44.8045 64.0312 41.6795C64.0312 38.5545 65.0152 35.982 67.5682 34.5963C71.2012 32.6173 74.3502 35.8466 74.3502 35.8466C74.3502 35.8466 74.6892 31.4713 77.8022 29.9642C79.1742 29.247 80.751 29.1281 82.2027 29.6325C83.6543 30.1368 84.8682 31.2253 85.5902 32.6699C85.7449 31.7234 86.163 30.8496 86.7893 30.1638C87.4156 29.478 88.2207 29.0126 89.0982 28.829C92.7312 27.754 94.9842 30.2265 96.0502 32.3055C97.1162 34.3846 104.238 47.4093 103.705 69.9079C103.705 69.9079 109.205 62.7151 113.734 58.0604C117.077 54.6204 120.492 55.1697 122.402 56.7456C124.42 58.4108 124.835 61.9293 123.336 65.5983C121.75 69.4801 108.066 105.168 108.066 105.168L116.156 123.865C116.156 123.865 102.106 138.239 82.9212 137.195Z"
                          fill="#12264B"
                        />
                        <path
                          d="M102.932 69.6005C101.421 71.9107 100.077 74.3415 98.91 76.8718C98.662 77.4093 99.41 77.8866 99.663 77.3448C100.83 74.8147 102.175 72.3839 103.685 70.0735C104.008 69.579 103.252 69.106 102.932 69.6005Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M85.0811 32.9903C84.3571 38.0794 85.2001 42.9373 86.2371 47.8995C87.5991 54.4162 88.3611 60.7221 87.3061 67.3731C87.2121 67.9633 88.0521 68.217 88.1471 67.6225C89.0096 61.7627 88.8113 55.779 87.5631 50.0001C86.4571 44.4294 85.1061 38.977 85.9221 33.2397C86.0061 32.6496 85.1661 32.3948 85.0811 32.9903Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M73.7734 36.1069C73.7459 41.977 74.3455 47.8311 75.5604 53.5541C76.5094 59.2096 76.6956 64.9825 76.1134 70.695C76.0664 71.2959 76.9384 71.2927 76.9854 70.695C77.4828 65.2818 77.3528 59.823 76.5984 54.4442C76.1594 51.6224 75.3884 48.8983 75.0544 46.0474C74.7004 42.7484 74.5637 39.4266 74.6454 36.1069C74.6454 35.9826 74.5994 35.8634 74.5177 35.7755C74.4359 35.6876 74.325 35.6382 74.2094 35.6382C74.0937 35.6382 73.9828 35.6876 73.9011 35.7755C73.8193 35.8634 73.7734 35.9826 73.7734 36.1069Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M94.114 67.428C85.798 66.7088 76.714 67.7279 70.939 74.953C70.575 75.4077 71.189 76.0742 71.556 75.6163C77.189 68.5707 86.014 67.6699 94.115 68.3708C94.674 68.4192 94.671 67.4818 94.115 67.4334"
                          fill="#FFD100"
                        />
                        <path
                          d="M83.8921 122.452C81.7272 123.488 79.3642 123.955 76.9981 123.816C76.4371 123.787 76.4391 124.725 76.9981 124.754C79.5181 124.89 82.032 124.379 84.3321 123.265C84.8431 123.02 84.4001 122.212 83.8921 122.455"
                          fill="#FFD100"
                        />
                        <path
                          d="M84.034 110.877C82.134 97.4398 86.828 82.6274 99.404 77.5599C99.925 77.3449 99.704 76.4429 99.172 76.6558C86.11 81.9233 81.217 97.1378 83.193 111.127C83.277 111.721 84.117 111.469 84.034 110.877Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M63.5039 42.8159V108.292C63.5039 108.416 63.5498 108.535 63.6316 108.623C63.7134 108.711 63.8243 108.761 63.9399 108.761C64.0555 108.761 64.1664 108.711 64.2482 108.623C64.33 108.535 64.3759 108.416 64.3759 108.292V42.8159C64.3759 42.6916 64.33 42.5723 64.2482 42.4844C64.1664 42.3966 64.0555 42.3472 63.9399 42.3472C63.8243 42.3472 63.7134 42.3966 63.6316 42.4844C63.5498 42.5723 63.5039 42.6916 63.5039 42.8159Z"
                          fill="#FFD100"
                        />
                        <path
                          d="M77.6272 62.9033L75.0952 62.9796C75.2054 59.7139 74.7611 56.454 73.7842 53.3595C72.3152 49.0455 69.2482 44.9809 62.8902 45.3077C62.6222 45.3195 62.3622 45.3421 62.1052 45.3765C51.7052 46.6472 52.0422 62.11 52.0422 62.11L49.3852 61.5907C49.3852 61.5907 48.3952 44.5036 61.7112 42.5428C62.1892 42.4676 62.6812 42.4192 63.1952 42.3891C70.3652 41.9698 73.9782 46.7267 75.7952 51.7609C77.0011 55.3331 77.6209 59.1032 77.6272 62.9033Z"
                          fill="#12264B"
                          stroke="#FFD100"
                          strokeWidth={2}
                        />
                        <path
                          d="M81.909 59.4505C81.909 59.4505 82.363 63.9387 82.686 73.6932C82.708 74.364 82.729 75.0628 82.751 75.7841C82.771 76.3592 82.786 76.9451 82.8041 77.5482C83.125 89.9827 82.85 95.6727 82.85 95.6727C82.8559 95.8905 82.8217 96.1075 82.7495 96.3112C82.6772 96.5149 82.5683 96.7012 82.429 96.8596C82.2897 97.018 82.1227 97.1452 81.9375 97.2341C81.7524 97.323 81.5527 97.3718 81.35 97.3776L47.65 98.3849C47.2421 98.3982 46.846 98.2371 46.5484 97.9368C46.2509 97.6365 46.0764 97.2216 46.063 96.7831C46.063 96.7831 45.545 93.2098 45.171 78.6801C44.797 64.1504 45.124 60.5513 45.124 60.5513C45.1133 60.113 45.2646 59.688 45.5448 59.3694C45.8251 59.0509 46.2114 58.8647 46.619 58.8518L50.226 58.7443H50.269L80.321 57.8391C80.7295 57.8284 81.1252 57.9921 81.4217 58.2943C81.7182 58.5965 81.8913 59.0126 81.903 59.4516"
                          fill="#FFD100"
                        />
                        <path
                          d="M68.0272 72.4998C68.0631 73.3734 67.8573 74.2389 67.4358 74.9868C67.0142 75.7347 66.3958 76.3314 65.6587 76.7014C64.9217 77.0715 64.0991 77.1983 63.295 77.0658C62.491 76.9334 61.7415 76.5475 61.1414 75.9571C60.5413 75.3668 60.1175 74.5983 59.9237 73.749C59.7298 72.8997 59.7746 72.0077 60.0523 71.1858C60.3301 70.3639 60.8283 69.6489 61.484 69.1314C62.1397 68.6139 62.9235 68.317 63.7362 68.2783C64.2758 68.2526 64.8148 68.3414 65.3225 68.5396C65.8301 68.7379 66.2965 69.0417 66.695 69.4337C67.0934 69.8257 67.4162 70.2982 67.6447 70.8243C67.8733 71.3504 68.0033 71.9197 68.0272 72.4998Z"
                          fill="black"
                        />
                        <path
                          d="M62.906 75.7196L59.995 84.4271C59.9325 84.6144 59.9138 84.8153 59.9406 85.0122C59.9674 85.209 60.0388 85.3958 60.1486 85.556C60.2584 85.7162 60.4031 85.8449 60.5701 85.9307C60.7371 86.0165 60.9211 86.0569 61.106 86.0482L67.106 85.7622C67.2856 85.7538 67.4607 85.6994 67.6167 85.6035C67.7727 85.5076 67.9052 85.373 68.003 85.2109C68.1009 85.0488 68.1612 84.864 68.1792 84.6717C68.1971 84.4795 68.172 84.2854 68.106 84.1057L65.016 75.6841C64.9317 75.4551 64.7845 75.2592 64.594 75.1223C64.4035 74.9855 64.1787 74.9143 63.9496 74.9181C63.7205 74.922 63.498 75.0007 63.3116 75.1439C63.1251 75.2871 62.9837 75.4879 62.906 75.7196Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                    <h3>Prezamos pela segurança em nossas plataformas</h3>
                    <p>
                      Lorem ipsum dolor sit amet. Sed veritatis maxime est illo ipsum
                      ut accusantium deleniti. Et explicabo vitae nam ipsam architecto
                      ad quis molestias et facere unde et cumque quia eum autem
                      reprehenderit est eveniet asperiores.
                    </p>
                  </div>
                </div>
                <a href="#por_que_slide5" className="slide_cards">
                  <svg
                    width={38}
                    height={64}
                    viewBox="0 0 38 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25 4.53906L4.29297 0.75L37.75 32L4.29297 63.25L0.25 59.4805L29.6445 32L0.25 4.53906Z"
                      fill="#12264B"
                    />
                  </svg>
                </a>
              </div>
              <div className="circulos direction_row align_center space_between">
                <div className="por_que_circulos" />
                <div className="por_que_circulos ativo_circulo" />
              </div>
              <Link to={'/cadastro/usuario'} style={{ textDecoration: 'none' }}
                className="align_center justify_center btn_cadastrar"
              >Venha se cadastrar</Link>
            </div>
          </div>
        </section>
        <section className="secao_nosso_objetivo">
          <div className="container_80 direction_column space_evenly" id="objetivo">
            <h2>Nosso Objetivo</h2>
            <div className="direction_row space_between">
              <div className="nosso_objetivo_conteudo align_center justify_center">
                <p>
                  A empresa tem como objetivo principal ajudar seus clientes com suas
                  dores e problemas do dia a dia, atrair novos clientes e consolidar
                  sua marca, além de promover parcerias com empresas do setor e
                  alavancar cada vez mais o setor de transportes.
                </p>
              </div>
              <svg
                className="img_nosso_objetivo"
                width={615}
                height={416}
                viewBox="0 0 615 416"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_384_196)">
                  <path
                    d="M361.908 305.183C447.14 305.183 516.234 236.865 516.234 152.591C516.234 68.3175 447.14 0 361.908 0C276.677 0 207.583 68.3175 207.583 152.591C207.583 236.865 276.677 305.183 361.908 305.183Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M87.0387 368.934C91.2306 370.391 95.7314 370.756 100.107 369.994C104.483 369.232 108.587 367.368 112.023 364.583C120.774 357.32 123.517 345.356 125.75 334.277L132.353 301.509L118.529 310.921C108.587 317.689 98.4218 324.675 91.5384 334.478C84.6549 344.282 81.6503 357.665 87.1809 368.273"
                    fill="#FFD100"
                  />
                  <path
                    d="M88.2205 408.607C86.8213 398.53 85.3826 388.323 86.3641 378.138C87.2357 369.092 90.0267 360.257 95.7089 353.013C98.725 349.175 102.395 345.887 106.554 343.296C107.638 342.619 108.637 344.319 107.557 344.993C100.361 349.49 94.7947 356.13 91.6614 363.956C88.2008 372.66 87.645 382.147 88.2414 391.392C88.602 396.983 89.3663 402.538 90.1366 408.085C90.1973 408.336 90.1594 408.6 90.0306 408.824C89.9018 409.049 89.6917 409.216 89.4427 409.293C89.1886 409.361 88.9179 409.327 88.6891 409.198C88.4603 409.07 88.2919 408.858 88.2205 408.607Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M180.816 394.728C182.453 396.639 184.559 398.101 186.933 398.973C189.307 399.846 191.868 400.099 194.369 399.709C200.789 398.632 205.626 393.532 209.953 388.721L222.753 374.492L213.212 375.179C206.351 375.673 199.316 376.211 193.074 379.069C186.831 381.927 181.452 387.651 181.079 394.443"
                    fill="#FFD100"
                  />
                  <path
                    d="M169.832 414.571C172.081 409.217 174.349 403.789 177.801 399.061C180.867 394.862 184.815 391.313 189.721 389.371C192.322 388.343 195.085 387.773 197.886 387.684C198.616 387.661 198.612 388.781 197.884 388.804C193.035 388.964 188.362 390.643 184.54 393.598C180.302 396.89 177.263 401.397 174.86 406.112C173.408 408.964 172.164 411.913 170.926 414.86C170.883 415.001 170.787 415.12 170.658 415.193C170.529 415.267 170.377 415.289 170.232 415.256C170.088 415.217 169.965 415.123 169.889 414.995C169.814 414.866 169.794 414.714 169.832 414.571Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M101.697 390.775C103.495 393.477 105.966 395.675 108.873 397.159C111.779 398.642 115.023 399.36 118.292 399.244C126.693 398.85 133.696 393.053 140 387.549L158.647 371.27L146.306 370.686C137.431 370.266 128.327 369.874 119.874 372.58C111.421 375.286 103.625 381.799 102.079 390.451"
                    fill="#FFD100"
                  />
                  <path
                    d="M84.2665 414.4C91.001 402.618 98.8124 389.523 112.77 385.338C116.651 384.178 120.721 383.762 124.759 384.114C126.032 384.222 125.714 386.162 124.444 386.054C117.674 385.498 110.917 387.266 105.311 391.059C99.9163 394.69 95.716 399.737 92.1608 405.09C89.9832 408.369 88.0326 411.787 86.0816 415.2C85.4582 416.291 83.6358 415.504 84.2665 414.4Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M375.105 213.288C388.496 206.011 405.161 207.472 419.589 212.447C434.016 217.422 447.091 225.573 461.101 231.602C503.915 250.025 555.517 247.054 595.879 223.843C599.696 232.623 595.601 242.665 591.103 251.124C586.604 259.582 581.477 268.749 583.329 278.129C585.699 290.131 598.426 297.328 603.583 308.443C608.478 318.994 605.851 331.386 602.095 342.384C598.34 353.383 593.466 364.464 594.104 376.056C594.742 387.648 603.26 399.905 615 399.914C597.601 402.587 579.859 405.262 562.471 402.523C545.082 399.783 527.785 390.69 519.711 375.218C515.676 367.484 514.12 358.593 509.485 351.195C501.592 338.594 486.442 332.669 472.148 328.203C457.854 323.737 442.557 319.435 432.493 308.45C422.904 297.983 419.866 283.402 414.786 270.203C406.229 248.107 391.368 228.944 372.006 215.041"
                    fill="#00B1EB"
                  />
                  <path
                    d="M390.621 158.449C385.92 156.287 380.149 155.578 375.366 157.587C370.583 159.596 367.322 164.746 368.868 169.304C369.57 171.37 371.167 173.403 370.544 175.49C370.066 177.096 368.395 178.156 366.754 178.911C365.113 179.665 363.319 180.299 362.132 181.57C360.946 182.842 360.698 185.032 362.18 186.018C362.669 186.343 363.279 186.497 363.753 186.84C364.156 187.164 364.447 187.604 364.586 188.1C364.724 188.596 364.702 189.122 364.524 189.605C364.129 190.576 363.477 191.425 362.636 192.061C360.953 193.496 358.729 195.138 359.251 197.175C359.445 197.719 359.769 198.209 360.195 198.604C360.622 198.998 361.138 199.285 361.7 199.44C362.868 199.773 364.079 199.931 365.295 199.909L414.948 201.455C416.587 201.577 418.235 201.486 419.85 201.184C420.635 201.043 421.382 200.743 422.045 200.303C422.707 199.863 423.271 199.292 423.7 198.627C424.651 196.887 424.027 194.743 422.853 193.118C421.678 191.493 420.017 190.211 418.643 188.719C417.27 187.227 416.147 185.364 416.389 183.436C416.582 181.892 417.612 180.558 418.351 179.155C419.091 177.752 419.52 175.999 418.563 174.709C417.213 172.89 413.975 173.055 412.441 171.36C411.283 170.082 411.507 168.241 411.391 166.592C411.115 162.625 408.337 158.88 404.384 157.14C402.373 156.287 400.187 155.918 398.004 156.065C395.821 156.212 393.705 156.87 391.83 157.985L390.621 158.449Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M359.243 407.412L351.467 405.101L356.778 374.343L368.256 377.753L359.243 407.412Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M358.962 415.455L333.887 408.005L333.982 407.692C334.367 406.424 335.001 405.245 335.847 404.219C336.693 403.194 337.735 402.344 338.914 401.717C340.093 401.09 341.384 400.699 342.716 400.566C344.047 400.432 345.392 400.56 346.674 400.941L361.99 405.49L358.962 415.455Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M432.629 407.672L424.508 407.671L420.646 376.702L432.63 376.703L432.629 407.672Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M434.699 415.455L408.517 415.454V415.126C408.517 413.803 408.78 412.493 409.292 411.27C409.804 410.048 410.555 408.937 411.501 408.001C412.448 407.065 413.571 406.323 414.808 405.817C416.044 405.31 417.369 405.05 418.708 405.05L434.7 405.05L434.699 415.455Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M421.357 384.249C420.648 384.248 419.963 383.998 419.424 383.544C418.885 383.089 418.527 382.46 418.415 381.768L406.358 307.401C406.278 306.908 406.038 306.455 405.674 306.11C405.31 305.764 404.842 305.546 404.341 305.487C403.84 305.429 403.333 305.534 402.898 305.786C402.462 306.038 402.122 306.424 401.928 306.884L370.691 381.239C370.4 381.925 369.859 382.478 369.174 382.787C368.489 383.096 367.711 383.138 366.996 382.905L355.714 379.186C355.011 378.957 354.421 378.476 354.057 377.839C353.694 377.202 353.584 376.454 353.749 375.741L379.348 263.739C379.473 263.199 379.749 262.705 380.144 262.313C380.538 261.92 381.036 261.645 381.581 261.518L415.912 253.638C416.334 253.543 416.772 253.539 417.195 253.626C417.619 253.713 418.019 253.889 418.368 254.142C440.974 270.383 439.064 323.444 434.851 381.06C434.798 381.781 434.48 382.458 433.955 382.962C433.431 383.466 432.737 383.762 432.007 383.793L421.487 384.246C421.444 384.247 421.4 384.249 421.357 384.249Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M392.457 201.075C401.442 201.075 408.725 193.873 408.725 184.99C408.725 176.106 401.442 168.905 392.457 168.905C383.473 168.905 376.189 176.106 376.189 184.99C376.189 193.873 383.473 201.075 392.457 201.075Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M393.16 268.357C389.255 268.332 385.404 267.452 381.884 265.78L381.763 265.724L381.715 265.601L367.124 228.222L366.847 221.727C366.754 219.555 367.122 217.388 367.927 215.365C368.732 213.343 369.957 211.509 371.523 209.983C373.088 208.456 374.96 207.271 377.016 206.503C379.073 205.736 381.27 205.402 383.465 205.525L398.956 206.387C402.957 206.612 406.721 208.337 409.482 211.209C412.243 214.082 413.793 217.887 413.816 221.85C414.219 222.614 417.076 228.59 411.476 234.205C411.267 235.483 409.308 248.774 416.7 256.083L416.908 256.288L416.726 256.517C416.608 256.665 407.115 268.355 393.16 268.357Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M414.912 271.176C415.828 270.848 416.659 270.326 417.348 269.645C418.037 268.965 418.567 268.144 418.9 267.239C419.233 266.334 419.362 265.368 419.277 264.409C419.192 263.45 418.895 262.521 418.407 261.688L433.879 243.977L421.682 242.408L408.86 259.467C407.499 260.369 406.519 261.734 406.107 263.303C405.696 264.872 405.88 266.536 406.626 267.979C407.372 269.423 408.628 270.545 410.155 271.135C411.682 271.724 413.375 271.739 414.912 271.176Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M424.585 257.507C424.004 257.506 423.436 257.338 422.95 257.022L415.298 252.06C414.655 251.644 414.199 250.998 414.026 250.258C413.854 249.518 413.977 248.74 414.372 248.088L419.911 238.885C420.211 238.388 420.401 237.833 420.468 237.257C420.536 236.682 420.479 236.098 420.302 235.546C420.126 234.994 419.833 234.484 419.443 234.052C419.053 233.619 418.575 233.273 418.041 233.036L402.126 225.981C400.169 225.103 398.571 223.593 397.595 221.699C396.619 219.806 396.322 217.641 396.753 215.559C397.051 214.154 397.672 212.837 398.568 211.709C399.465 210.581 400.612 209.672 401.922 209.054C403.231 208.436 404.667 208.125 406.118 208.145C407.569 208.166 408.995 208.516 410.286 209.171L434.43 221.403C436.059 222.229 437.488 223.392 438.62 224.814C439.751 226.236 440.559 227.884 440.987 229.643C441.415 231.402 441.453 233.233 441.1 235.008C440.746 236.784 440.008 238.462 438.937 239.93L427.002 256.282C426.726 256.662 426.363 256.97 425.943 257.183C425.523 257.396 425.057 257.507 424.585 257.507Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M375.815 182.703C380.952 182.295 385.218 177.221 384.683 172.152C384.623 174.241 385.342 176.279 386.702 177.879C388.063 179.478 389.971 180.527 392.063 180.827C394.419 181.083 397.003 180.378 399.054 181.554C401.326 182.856 402.053 186.017 404.419 187.142C406.706 188.228 409.611 186.747 410.74 184.501C411.87 182.254 411.593 179.556 410.844 177.159C409.776 173.741 407.832 170.654 405.2 168.199C402.569 165.744 399.339 164.004 395.826 163.149C392.313 162.293 388.636 162.352 385.152 163.318C381.668 164.284 378.497 166.125 375.946 168.662C373.786 170.81 372.07 173.548 371.792 176.565C371.514 179.582 372.93 182.856 375.67 184.211L375.815 182.703Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M337.969 138.147C338.826 138.604 339.571 139.241 340.152 140.013C340.733 140.786 341.136 141.675 341.332 142.618C341.528 143.561 341.513 144.535 341.287 145.472C341.061 146.408 340.63 147.284 340.025 148.038L352.715 167.793L340.417 167.585L330.252 148.857C329.038 147.768 328.271 146.276 328.095 144.664C327.92 143.053 328.348 141.433 329.299 140.113C330.25 138.793 331.658 137.864 333.256 137.501C334.854 137.139 336.531 137.369 337.969 138.147Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M348.197 152.214L364.539 190.396L381.673 219.122C382.396 220.335 382.831 221.695 382.946 223.098C383.06 224.501 382.85 225.912 382.332 227.223C381.814 228.534 381.001 229.712 379.955 230.668C378.91 231.623 377.658 232.331 376.295 232.738C374.133 233.372 371.813 233.221 369.754 232.312C367.695 231.403 366.033 229.796 365.068 227.781L332.045 158.013C331.866 157.634 331.77 157.221 331.764 156.803C331.759 156.385 331.843 155.97 332.013 155.586C332.182 155.203 332.432 154.859 332.745 154.578C333.059 154.298 333.43 154.086 333.833 153.958L344.54 150.557C344.743 150.493 344.953 150.449 345.165 150.428C345.797 150.365 346.433 150.504 346.979 150.826C347.525 151.148 347.952 151.634 348.197 152.214Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M501.392 416H0.66234C0.486677 416 0.318207 415.931 0.193994 415.808C0.0697816 415.685 0 415.519 0 415.345C0 415.171 0.0697816 415.005 0.193994 414.882C0.318207 414.759 0.486677 414.69 0.66234 414.69H501.392C501.567 414.69 501.736 414.759 501.86 414.882C501.984 415.005 502.054 415.171 502.054 415.345C502.054 415.519 501.984 415.685 501.86 415.808C501.736 415.931 501.567 416 501.392 416Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M395.986 70.8683V124.57C395.986 124.744 395.916 124.91 395.792 125.033C395.668 125.156 395.499 125.225 395.323 125.225C395.148 125.225 394.979 125.156 394.855 125.033C394.731 124.91 394.661 124.744 394.661 124.57V70.8683C394.661 70.6946 394.731 70.528 394.855 70.4052C394.979 70.2824 395.148 70.2134 395.323 70.2134C395.499 70.2134 395.668 70.2824 395.792 70.4052C395.916 70.528 395.986 70.6946 395.986 70.8683Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M453.494 116.426L434.76 134.95C434.636 135.072 434.467 135.141 434.292 135.14C434.117 135.14 433.948 135.071 433.824 134.949C433.7 134.826 433.631 134.66 433.63 134.486C433.63 134.313 433.7 134.146 433.823 134.023L452.557 115.5C452.619 115.439 452.692 115.391 452.772 115.358C452.852 115.324 452.939 115.307 453.026 115.307C453.113 115.307 453.199 115.324 453.28 115.357C453.36 115.39 453.433 115.438 453.495 115.499C453.556 115.56 453.605 115.632 453.639 115.712C453.672 115.791 453.689 115.877 453.689 115.963C453.689 116.049 453.671 116.134 453.638 116.214C453.605 116.293 453.556 116.365 453.494 116.426Z"
                    fill="#FFD100"
                  />
                  <path
                    d="M337.153 116.426L355.886 134.95C356.011 135.072 356.179 135.141 356.355 135.141C356.53 135.141 356.699 135.072 356.823 134.95C356.947 134.827 357.017 134.66 357.017 134.487C357.017 134.313 356.947 134.146 356.823 134.023L338.089 115.5C338.028 115.439 337.955 115.391 337.874 115.358C337.794 115.324 337.708 115.307 337.621 115.307C337.534 115.307 337.447 115.324 337.367 115.357C337.286 115.39 337.213 115.438 337.152 115.499C337.09 115.56 337.041 115.632 337.008 115.712C336.975 115.791 336.957 115.877 336.958 115.963C336.958 116.049 336.975 116.134 337.008 116.214C337.042 116.293 337.091 116.365 337.153 116.426Z"
                    fill="#FFD100"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_384_196">
                    <rect width={615} height={416} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </section>
        <section className="container_80">
          <div className="secao_faz_diferenca space_evenly align_center direction_column">
            <div className="direction_column align_center justify_center">
              <h2>
                A VolksWay faz a <span className="azul diferenca">diferença!</span>
              </h2>
              <p>
                Aqui nós importamos e agregamos na vida de milhares de pessoas, venha
                você também faz parte!!
              </p>
            </div>
            <div className="faz_diferenca_cards space_between direction_column">
              <div className="direction_row space_between space_900px">
                <div className="faz_diferenca_card direction_row align_center space_between ">
                  <img
                    src={Depoimento}
                    alt="Foto do usuario que deu o depoimento"
                  />
                  <div className="direction_column faz_diferenca_card_conteudo">
                    <p>
                      “A VolksWay está economizando muito meu tempo e dinheiro, sempre
                      indicam as melhores promoções.”
                    </p>
                    <span>Antônio Santos, motorista há de 30 anos</span>
                  </div>
                </div>
                <div className="faz_diferenca_card direction_row align_center space_between">
                  <img
                    src={Depoimento}
                    alt="Foto do usuario que deu o depoimento"
                  />
                  <div className="direction_column faz_diferenca_card_conteudo">
                    <p>
                      “A VolksWay está economizando muito meu tempo e dinheiro, sempre
                      indicam as melhores promoções.”
                    </p>
                    <span>Antônio Santos, motorista há de 30 anos</span>
                  </div>
                </div>
                <div className="faz_diferenca_card direction_row align_center space_between none_900px">
                  <img
                    src={Depoimento}
                    alt="Foto do usuario que deu o depoimento"
                  />
                  <div className="direction_column faz_diferenca_card_conteudo">
                    <p>
                      “A VolksWay está economizando muito meu tempo e dinheiro, sempre
                      indicam as melhores promoções.”
                    </p>
                    <span>Antônio Santos, motorista há de 30 anos</span>
                  </div>
                </div>
              </div>
              <div className="direction_row space_between space_900px">
                <div className="faz_diferenca_card direction_row align_center space_between">
                  <img
                    src={Depoimento}
                    alt="Foto do usuario que deu o depoimento"
                  />
                  <div className="direction_column faz_diferenca_card_conteudo">
                    <p>
                      “A VolksWay está economizando muito meu tempo e dinheiro, sempre
                      indicam as melhores promoções.”
                    </p>
                    <span>Antônio Santos, motorista há de 30 anos</span>
                  </div>
                </div>
                <div className="faz_diferenca_card direction_row align_center space_between">
                  <img
                    src={Depoimento}
                    alt="Foto do usuario que deu o depoimento"
                  />
                  <div className="direction_column faz_diferenca_card_conteudo">
                    <p>
                      “A VolksWay está economizando muito meu tempo e dinheiro, sempre
                      indicam as melhores promoções.”
                    </p>
                    <span>Antônio Santos, motorista há de 30 anos</span>
                  </div>
                </div>
                <div className="faz_diferenca_card direction_row align_center space_between none_900px">
                  <img
                    src={Depoimento}
                    alt="Foto do usuario que deu o depoimento"
                  />
                  <div className="direction_column faz_diferenca_card_conteudo">
                    <p>
                      “A VolksWay está economizando muito meu tempo e dinheiro, sempre
                      indicam as melhores promoções.”
                    </p>
                    <span>Antônio Santos, motorista há de 30 anos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container_80 margin_bottom5">
          <div
            className="direction_row space_between align_center"
            id="mais_vendidos"
          >
            <div className="home_selecao_card direction_column space_between">
              <div className="space_evenly direction_column">
                <h2>
                  Seleção de caminhões e ônibus mais
                  <span className="azul mais_vendidos"> Vendidos!!</span>
                </h2>
                <span className="home_selecao_nao_encontrou uppercase">
                  não encontrou nada de interessante?
                </span>
                <p>
                  Temos uma gigantesca rede de parceiras com ofertas especiais para
                  encontrar o veículo perfeito!!
                </p>
              </div>
              <Link to={'/cadastro/usuario'} style={{ textDecoration: 'none' }}
                className="align_center justify_center"
              >
                Cadastre-se
              </Link>
            </div>
            <img
              className="img_selecao"
              src={MaisVendidos}
              alt="Caminhao meteor"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
