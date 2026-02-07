import { useState } from "react";
import styles from  "./header.module.css"; 

import { ThemeSelect } from "../themeSelect/themeSelect";

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <section className={styles.logoContainer}>
          <img src={logo} alt="" className={styles.logo}/>
      </section>

      <section className={`${styles.navBar} ${menuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <a
              href="#about-content"
              className={styles.anchor}
              onClick={toggleMenu}
            >
              Sobre
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#formation-content"
              className={styles.anchor}
              onClick={toggleMenu}
            >
              Formação
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#certificates-content"
              className={styles.anchor}
              onClick={toggleMenu}
            >
              Certificados
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#projects-content"
              className={styles.anchor}
              onClick={toggleMenu}
            >
              Projetos
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#technologies-content"
              className={styles.anchor}
              onClick={toggleMenu}
            >
              Tecnologias
            </a>
          </li>

          <hr />

          <li>
            <a
              href="#anchors-content"
              className={styles.anchor}
              onClick={toggleMenu}
            >
              Contatos
            </a>
          </li>
        </ul>

        <img src={logo} alt="" className={styles.logo && styles.logoNavbar}/>
      </section>

      <section id="menu-icon-content" 
      onClick={toggleMenu} 
      className={`${styles.menuHidden}  ${menuOpen ?  styles.open : ""}`}
      >
        <img src={menu_icon} alt="Menu" />
      </section>

      {/* <section id="items-content">
        <div>
          <ThemeSelect />
        </div>

        <div>
          <button>BR</button>
        </div>
      </section> */}
    </header>
  );
};

export { Header };
