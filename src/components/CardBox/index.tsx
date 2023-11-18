import React from "react";

import "./styles.css";

type CardBoxProps = {
  img: string;
};

const CardBox: React.FC<CardBoxProps> = ({ img }) => {
  return (
    <div className="card-box">
      <div className="img-card-box">
        <img src={img} alt="" />
      </div>
      <div className="card-box-text">
        <span>03/04/2023 às 15:01</span>
        <p>
          Comissão Própria de Avaliação divulga resultados da autoavaliação
          institucional
        </p>
      </div>
    </div>
  );
};

export default CardBox;
