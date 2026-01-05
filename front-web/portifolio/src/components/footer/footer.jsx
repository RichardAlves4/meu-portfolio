import "./footer.css";

import linkedin from "../../assets/footer-icons/linkedin.png"
import github from "../../assets/footer-icons/github.png"
import email from "../../assets/footer-icons/e-mail.png"
import whatsapp from "../../assets/footer-icons/whatsapp.png"
import instagram from "../../assets/footer-icons/instagram.png"

const Footer = () => {
  return (
    <footer>
        <h1>Rede/Contato</h1>

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
            <img src={email} alt="" href=""></img>
            <p>E-mail</p>
          </a>

          <a href="https://wa.me/5511978393539" className="media-icon">
            <img src={whatsapp} alt="" href=""></img>
            <p>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/r1chard.alves/" className="media-icon">
            <img src={instagram} alt="" href=""></img>
            <p>Instagram</p>
          </a>
        </div>
        
        <div id="pageanchors-content">
          <a href="">Sobre</a>
          <a href="">Formação</a>
          <a href="">Certificados</a>
          <a href="">Tecnologias</a>
          <a href="">Projetos</a>
          <a href="">Contatos</a>
        </div>
      </section>
      <h4>© Copyright 2025 - Richard Alves - Todos os direitos reservados.</h4>
    </footer>
  )
}

export {Footer};