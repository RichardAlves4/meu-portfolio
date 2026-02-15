import { useState } from "react";
import styles from  "./header.module.css"; 
import { ThemeSelect } from "../themeSelect/ThemeSelect";
import { HiMenu } from "react-icons/hi";

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='containerTheme'>
      <section className={styles.logoContainer}>
          <img src={logo} alt="" className={styles.logo}/>
      </section>

      <section className={`${styles.navBar} ${menuOpen ? styles.active : ""} containerTheme`}>
        <ul>
          <li>
            <a
              href="#about"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              Sobre
            </a>
          </li>

          <hr className="hrTheme" />

          <li>
            <a
              href="#formation"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              Formação
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#certificates"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              Certificados
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#projects"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              Projetos
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#technologies"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              Tecnologias
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#contacts"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              Contatos
            </a>
          </li>
        </ul>

        <img src={logo} alt="" className={styles.logo && styles.logoNavbar}/>
      </section>

      <section
      onClick={toggleMenu} 
      className={`${styles.menuHidden}  ${menuOpen ?  styles.open : ""}`}
      >
        <HiMenu className={`${styles.icon} iconTheme`} />
      </section>

      <section className={styles.itensContainer}>
        <div>
          <ThemeSelect />
        </div>

        <div>
          <button style={{display:'none'}}>BR</button>
        </div>
      </section>
    </header>
  );
};

export { Header };
