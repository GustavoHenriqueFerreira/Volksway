//estilizacao
import "./style.css"

//hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react"



import { register } from "swiper/element/bundle";

register();
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


function Banner(props: any) {

    return (
        <>
            <div id="banner">
                <div className="container">
                    {/* <h1 className="teste">teste</h1> */}
                    <Swiper
                        // effect={'fade'}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >

                        {
                            props.conteudo.map((banner: any) => (
                                <SwiperSlide key={banner.objectId}>
                                        <img
                                            src={banner.imagem.url}
                                            className="slide-item"
                                        />
                                   <div className="banner_conteudo">
                                   <div className="produtos_banner_conteudo">
                                        <h2>{banner.titulo}</h2>
                                        <p>{banner.descricao}
                                        </p>
                                        <a className="produtos_btn_banner" href={banner.url}>ver mais</a>
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
export default Banner;