import React from 'react';

import "./style.css"


const Header: React.FC = () => {
  return (
    <header className='header'>
    <div>
      <img src="../assets/logo.png" alt="" />
    </div>
    <div className='header-link'>
      <a href="">HOME</a>
      <a href="">SOBRE A FASICLIN</a>
      <a href="">CURSOS</a>
      <a href="">UNIDADES</a>
    </div>
    <div className='header-div-input'>
        <input type="text" placeholder='O que você procura?'/>
    </div>
  </header>
  );
}

export default Header;