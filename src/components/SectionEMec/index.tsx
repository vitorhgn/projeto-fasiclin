import React from "react";

import "./styles.css";

import imgEmecQrCode from  "../../../assets/imgEmecQrCode.svg"
import imgAvaliacaoEmec from  "../../../assets/imgAvaliacaoEmec.svg"
import imgLogoEmec from  "../../../assets/imgLogoEmec.svg"

const SectionEMec: React.FC = () => {
  return <div className='section-emec-main'>
    <div className='section-emec-img'>
        <img id='qrCode' src={imgEmecQrCode} alt="" />
        <img src={imgAvaliacaoEmec} alt="" />
        <img src={imgLogoEmec} alt="" />
    </div>
  </div>;
};

export default SectionEMec;
