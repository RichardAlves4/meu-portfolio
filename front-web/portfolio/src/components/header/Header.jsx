import { useState } from "react";
import { ThemeSelect } from "../themeSelect/ThemeSelect";
import { HiMenu } from "react-icons/hi";
import { LanguageSwitcher } from '../languageSwitcher/LanguageSwitcher';
import { useTranslation } from "react-i18next";

import styles from  "./header.module.css"; 

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation('common');

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
              {t('navbar.anchor1')}
            </a>
          </li>

          <hr className="hrTheme" />

          <li>
            <a
              href="#formation"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              {t('navbar.anchor2')}
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#certificates"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              {t('navbar.anchor3')}
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#projects"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              {t('navbar.anchor4')}
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#technologies"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              {t('navbar.anchor5')}
            </a>
          </li>

          <hr className="hrTheme"/>

          <li>
            <a
              href="#contacts"
              className={`${styles.anchor} secondaryAnchorTheme`}
              onClick={toggleMenu}
            >
              {t('navbar.anchor6')}
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
          <ThemeSelect />
          <LanguageSwitcher/>
      </section>
    </header>
  );
};

export { Header };
