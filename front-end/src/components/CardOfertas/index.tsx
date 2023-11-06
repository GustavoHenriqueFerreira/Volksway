///estilizacao
import "./style.css"

//imagens
import imgCardOfertas from "../../assets/img/caminhao_banner_home.png";

//hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle'
import { EffectFade, Navigation, Pagination } from "swiper";



register();
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


function CardOfertas(props: any) {

    // useEffect(() => {
    //     function handleResize(){
    //         if(window.innerWidth < 720){
    //           setSlidesPerView(1);
    //         }
    //     }

    //     handleResize();

    // }, []);



    return (
        <>
            <div id="cardOfertas">
                <div className="container">
                    {/* <h1 className="teste">teste</h1> */}

                    <Swiper
                        // effect={'fade'}
                        slidesPerView={4}
                        breakpoints={{
                            1920: {
                                slidesPerView: 4,
                            },
                            1040:{
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            320: {
                                slidesPerView:1
                            }


                        }}
                        // pagination={{ clickable: true }}
                        navigation
                    >

                        {
                            props.conteudo.map((ofertas: any) => (
                                <SwiperSlide key={ofertas.objectId}>
                                    <div className="carrossel">
                                        <div className="prod_card_ofertas">
                                            <h3>{ofertas.titulo} teste</h3>
                                            <h4>{ofertas.subtitulo}</h4>
                                            <img
                                                src={ofertas.imagem.url}
                                                alt="imagem caminhão contstellation 2023 card um"
                                            />
                                            <span>R$ {ofertas.preco},00</span>
                                            <h5>{ofertas.descricao}</h5>
                                            <a className="prod_btn_card" href={ofertas.url}>
                                                estou interessado
                                            </a>
                                            <h6>Oferta Válida Até {ofertas.validade}</h6>
                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>

        </>
    )

}
export default CardOfertas;