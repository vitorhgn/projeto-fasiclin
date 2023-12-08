import React from "react";

// import { Container } from './styles';

import conteudoNotificasImagem1 from "../../../assets/conteudoNotificasImagem1.png"
import conteudoNotificasImagem2 from "../../../assets/conteudoNotificasImagem2.png"
import conteudoNotificasImagem3 from "../../../assets/conteudoNotificasImagem3.png"
import "./styles.css";

const SectionNoticias: React.FC = () => {
  return (
    <div className="section-noticias-container">
      <div className='conteudo-noticias-container'>
        <div className="conteudo-noticias-button">
          <a href="https://www.fasipecuiaba.com.br/imprensa/noticias" target='_blank'>Acesse mais notícias</a>
        </div>
        <div className="conteudo-noticias-button">
        <a href="https://www.fasipecuiaba.com.br/imprensa/palavra-do-diretor" target='_blank'>Acesse palavras do diretor</a>
        </div>
      </div>
      <div className="conteudo-noticias-images">
        <div>
          <img src={conteudoNotificasImagem1} alt="" />
        </div>
        <div>
          <img src={conteudoNotificasImagem2} alt="" />
        </div>
        <div>
          <img src={conteudoNotificasImagem3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionNoticias;
