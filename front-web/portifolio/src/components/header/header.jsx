import { Link } from "react-router-dom"
import './header.css';

import menu_icon from "../../assets/menu.png"
import { ThemeSelect } from "../themeSelect/themeSelect"

const Header = () => {
  return (
    <header>
      <section id="menu-icon-content">
        <img src={menu_icon} alt="" />
      </section>

      <section id="nav-bar">
        <a href="">Sobre</a>
        <a href="">Certificados</a>
        <a href="">Tecnologias</a>
        <a href="">Projetos</a>
        <a href="">Contatos</a>
      </section>

      <section id="items-content">
        <div>
          <ThemeSelect/>
        </div>

        <div>
           <button /*onClick={language()}*/>BR</button> 
        </div>
      </section>




    </header>
  )
}

export {Header};