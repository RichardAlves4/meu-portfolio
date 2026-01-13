import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import { ThemeSelect } from "../themeSelect/themeSelect";

import menu_icon from "../../assets/menu.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <section id="menu-icon-content" 
      onClick={toggleMenu} 
      className={menuOpen ? "open" : ""}
      >
        <img src={menu_icon} alt="Menu" />
      </section>

      <section id="nav-bar" className={menuOpen ? "active" : ""}>
        <ul>
          <li>
            <a
              href="#about-content"
              className="anchor-header"
              onClick={toggleMenu}
            >
              Sobre
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#formation-content"
              className="anchor-header"
              onClick={toggleMenu}
            >
              Formação
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#certificates-content"
              className="anchor-header"
              onClick={toggleMenu}
            >
              Certificados
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#projects-content"
              className="anchor-header"
              onClick={toggleMenu}
            >
              Projetos
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#technologies-content"
              className="anchor-header"
              onClick={toggleMenu}
            >
              Tecnologias
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#anchors-content"
              className="anchor-header"
              onClick={toggleMenu}
            >
              Contatos
            </a>
          </li>
        </ul>
      </section>

      <section id="items-content">
        <div>
          <ThemeSelect />
        </div>

        <div>
          <button>BR</button>
        </div>
      </section>
    </header>
  );
};

export { Header };
