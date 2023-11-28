import React from "react";

// import { Container } from './styles';


import "./styles.css";

const SectionNoticias: React.FC = () => {
  return (
    <div className="section-noticias-container">
      <div className='conteudo-noticias-container'>
        <div className="conteudo-noticias-button">
          <a href="">Acesse mais notícias da saúde</a>
        </div>
        <div className="conteudo-noticias-button">
        <a href="">Acesse Notícias para os estados</a>
        </div>
      </div>
      <div className="conteudo-noticias-images">
        <div>
          <img src="../../../assets/conteudoNotificasImagem1.png" alt="" />
        </div>
        <div>
          <img src="../../../assets/conteudoNotificasImagem2.png" alt="" />
        </div>
        <div>
          <img src="../../../assets/conteudoNotificasImagem3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionNoticias;
