import React from "react";

import "./styles.css";
import CardBox from "../CardBox";
import img from "../../../assets/imgPrincipal.svg";


// Isso deveria vir do banco de dados dinamicamente
import img1 from "../../../assets/imgCardBox1.svg";
import img2 from "../../../assets/imgCardBox2.svg";
import img3 from "../../../assets/imgCardBox3.svg";
import SectionEMec from "../SectionEMec";
import SectionNoticias from '../SectionNoticias';
import SectionNovidades from '../SectionNovidades';
import RedesSociais from '../SectionRedesSociais';

const Main: React.FC = () => {
  return (
    <>
      <div className="section-img-card">
        <div className="card-img-principal">
          <img src={img} alt="" />
        </div>
        <div className="card-noticias">
          <CardBox img={img1} />
          <CardBox img={img2} />
          <CardBox img={img3} />
        </div>
      </div>
      <SectionEMec />
      <SectionNoticias/>
      <SectionNovidades/>
      <RedesSociais/>
    </>
  );
};

export default Main;
