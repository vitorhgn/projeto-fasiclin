import React from "react";

import "./styles.css";

const RedesSociais: React.FC = () => {
  return (
    <div className="section-redes-sociais-main">
      <div className="section-redes-sociais">
        <div className="informacoes-contato-fasiclin">
          <h4>Informações</h4>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>
              Rua Jornalista Amaro de Figueiredo Falcão, 133 - Cpa I, Cuiabá -
              MT
            </span>
          </div>
          <div>
            <i className="fa-regular fa-clock"></i>
            <span>De manha 08:00 - 12:00, de tarde 13:30 - 18:00</span>
          </div>
          <div><i className="fa-solid fa-phone"></i><span>(65) 3648-3900 - (65) 9 8464-0233</span></div>
          <div><i className="fa-regular fa-envelope"></i><span>contato@fasipecuiaba.com.br</span></div>
        </div>
        <div className="redes-sociais-fasiclin">
          <div>
            <a href="https://www.facebook.com/faculdadefasipe" target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/fasipecuiaba" target='_blank'><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.instagram.com/fasiclin/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesSociais;
