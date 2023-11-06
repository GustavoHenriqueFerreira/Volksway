import { useState } from 'react'
import './style.css'

function CardAvaliacao() {
    return (
        <div id="cardAvaliacao">
            <section className="container_80">
                <div className="secao_faz_diferenca space_evenly align_center direction_column">
                    <div className="direction_column align_center justify_center">
                        <h2>
                            A VolksWay faz a <span className="azul">diferença!</span>
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
                                    src="./img/caminhoneiro_home.png"
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
                                    src="./img/caminhoneiro_home.png"
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
                                    src="./img/caminhoneiro_home.png"
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
                                    src="./img/caminhoneiro_home.png"
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
                                    src="./img/caminhoneiro_home.png"
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
                                    src="./img/caminhoneiro_home.png"
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

        </div>
    )
}

export default CardAvaliacao
