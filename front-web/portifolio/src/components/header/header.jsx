import { Link } from "react-router-dom"
import './header.css';

import menu_icon from "../../assets/menu.png"
import pdf_icon from "../../assets/certificados/certificados-docs/Certificado_PROGRAMAÇÃO JAVA.pdf"
import { ThemeSelect } from "../themeSelect/themeSelect"

const Header = () => {
  return (
    <header>
      <section id="menu-icon-content">
        <img src={menu_icon} alt=""/>
      </section>

      <section id="nav-bar">
        <a href="#about-content">Sobre</a>
        <a href="#formation-content">Formação</a>
        <a href="#certificates-content">Certificados</a>
        <a href="#projects-content">Projetos</a>
        <a href="#technologies-content">Tecnologias</a>
        <a href="#anchors-content">Contatos</a>
      </section>

      <section id="items-content">
        <div>
          <ThemeSelect/>
        </div>

        <div>
           <button>BR</button> 
        </div>
      </section>




    </header>
  )
}

export {Header};