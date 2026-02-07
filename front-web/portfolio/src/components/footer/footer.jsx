import "./footer.css";

import linkedin from "../../assets/footer-icons/linkedin.png"
import github from "../../assets/footer-icons/github.png"
import email from "../../assets/footer-icons/e-mail.png"
import whatsapp from "../../assets/footer-icons/whatsapp.png"
import instagram from "../../assets/footer-icons/instagram.png"

const Footer = () => {
  return (
    <footer className="container">
        <h1 className="purple">REDE/CONTATO</h1>

        <section id="anchors-content">
        <div id="media-content">
          <a href="https://www.linkedin.com/in/richardalves4/" className="media-icon">
              <img src={linkedin} alt=""></img>
            <p>Linkedin</p>
          </a>

          <a href="https://github.com/RichardAlves4" className="media-icon">
            <img src={github} alt="" ></img>
            <p>GitHub</p>
          </a>

          <a href="mailto:richardalvessilva41@gmail.com" className="media-icon">
            <img src={email} alt=""></img>
            <p>E-mail</p>
          </a>

          <a href="https://wa.me/5511978393539" className="media-icon">
            <img src={whatsapp} alt=""></img>
            <p>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/r1chard.alves/" className="media-icon">
            <img src={instagram} alt=""></img>
            <p>Instagram</p>
          </a>
        </div>
        
        <ul id="nav-bar-footer">
          <li><a href="#about-content" className="anchor-footer">Sobre</a></li>
          <li><a href="#formation-content" className="anchor-footer">Formação</a></li>
          <li><a href="#certificates-content" className="anchor-footer">Certificados</a></li>
          <li><a href="#projects-content" className="anchor-footer">Projetos</a></li>
          <li><a href="#technologies-content" className="anchor-footer">Tecnologias</a></li>
          <li><a href="#anchors-content" className="anchor-footer">Contatos</a></li>
        </ul>
      </section>
      <h4>© Copyright 2025 - Richard Alves - Todos os direitos reservados.</h4>
    </footer>
  )
}

export {Footer};