
//import Style
import "./style.css";

//import imagen 
import imgPneu from "../../assets/img/pneu.png";
import { Link } from "react-router-dom";

//rota
import React from 'react';
import ReactDOM from 'react-dom/client';


function CardOfertasPneu(props: any) {
  return (
    <div id="CardOfertasPneu">
      <div id="prod_slide_1" className="prod_card_promo1">
        <img src={props.imagem.url} alt="imagem Pneu" />
        <div className="prod_card_azul ">
          <div className="prod_preco">R${props.preco}</div>{/* R$ */}
          <h3>{props.titulo}</h3>{/* pneu triangle 275/80R */}
          <h4>{props.descricao}</h4>{/* caminhão */}
          <span>novidade</span>

        </div>
      </div>
    </div>


  )
}
export default CardOfertasPneu;