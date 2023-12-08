import img from "../../../assets/logo.png";

import "./style.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="header-link">
        <a href="https://www.fasipe.com.br/" target='_blank'>HOME</a>
        <a href="https://www.fasipe.com.br/institucional/estrutura/" target='_blank'>SOBRE A FASICLIN</a>
        <a href="https://www.fasipe.com.br/graduacao/cursos" target='_blank'>CURSOS</a>
        <a href="https://grupofasipe.com.br/" target='_blank'>UNIDADES</a>
      </div>
      <div className="header-div-input">
        <input type="text" placeholder="O que você procura?" />
      </div>
    </header>
  );
};

export default Header;
