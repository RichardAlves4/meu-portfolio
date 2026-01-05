import { Link } from "react-router-dom";
import "./home-page.css";

import myPhoto from "../../assets/richard.jpg";
import HTML_icon from "../../assets/tech/html-5.png";
import CSS_icon from "../../assets/tech/css-3.png";
import JS_icon from "../../assets/tech/js.png";
import Python_icon from "../../assets/tech/python.png";
import C_icon from "../../assets/tech/c.png";
import JAVA_icon from "../../assets/tech/java.png";
import springboot_icon from "../../assets/tech/spring-boot.png";
import AWS_icon from "../../assets/tech/aws.png";
import NodeJS_icon from "../../assets/tech/nodejs.png";
import React_icon from "../../assets/tech/react.png";
import reactnative_icon from "../../assets/tech/react.png";
import Vite_icon from "../../assets/tech/vite.png";
import github_icon from "../../assets/tech/github.png";
import git_icon from "../../assets/tech/git.png";
import Figma_icon from "../../assets/tech/figma.png";
import MySQL_icon from "../../assets/tech/mysql.png";
import postgre_icon from "../../assets/tech/postgre.png";
import DBeaver_icon from "../../assets/tech/DBeaver.png";
import postman from "../../assets/tech/postman.png";





const Home = () => {
  return (
    <main>
      <hr />
      <section id="about-content">
        <h1>SOBRE</h1>

        <div id="photo-text-content">
          <div id="photo-content">
            <img src={myPhoto} alt="" id="my-photo"/>
            <h2>Richard Alves da Silva</h2>
          </div>

          <div id="text-about-content">
            <h2>dev full-stack</h2>
            <p id="about-text">Durante o ensino médio tive a grande oportunidade de 
              fazer um <span className="about-keyWord">curso técnico</span> em <span className="about-keyWord">ADS no Senai</span>. Nesse curso eu estudei programação 
              por dois anos e tive certeza que gostaria de seguir na área da tecnologia. 
              Nesse curso tive contato com linguagens como <span className="about-keyWord">HTML e CSS</span>. Também usei 
              linguagens de programação, ferramentas e frameworks como <span className="about-keyWord">JS</span>, <span className="about-keyWord">Git/Git Hub</span>, 
              <span className="about-keyWord">React + Vite</span> entre outros... Durante meu período no Senai também fiz um 
              curso de <span className="about-keyWord">JAVA</span> e outro de Power BI. Após a graduação em meu curso técnico 
              eu dei inicio ao ensino superior na <span className="about-keyWord">Unip Paulista</span> onde atualmente estou 
              cursando ADS para aperfeiçoar meu conhecimento e aprender ainda mais. 
              Atualmente estou para dar inicio ao meu terceiro semestre e estou 
              buscando um estágio para conseguir experiência e aprender como lidar com 
              situações reais do coditiano de um programador nas empresas. Atualmente 
              meu <span className="about-keyWord">objetivos</span> são: Aprender, estudar e conseguir um estágio.</p>
          </div>
        </div>
      </section>

      <hr />

      <section id="certificates-content">
        <h1>CERTIFICADOS</h1>
      </section>

      <hr />

      <section id="technologies-content">
        <h1>TECNOLOGIAS</h1>

        <div id="technologies-icons-content">
          <div className="technologies-icons">
            <img src={HTML_icon} alt="" />
            <p>HTML</p>
          </div>

          <div className="technologies-icons">
            <img src={CSS_icon} alt="" />
            <p>CSS</p>
          </div>

          <div className="technologies-icons">
            <img src={JS_icon} alt="" />
            <p>Java Script</p>
          </div>

          <div className="technologies-icons">
            <img src={Python_icon} alt="" />
            <p>Python</p>
          </div>

          <div className="technologies-icons">
            <img src={C_icon} alt="" />
            <p>C</p>
          </div>

          <div className="technologies-icons">
            <img src={JAVA_icon} alt="" />
            <p>JAVA</p>
          </div>

          <div className="technologies-icons">
            <img src={springboot_icon} alt="" />
            <p>Spring Boot</p>
          </div>

          <div className="technologies-icons">
            <img src={AWS_icon} alt="" />
            <p>AWS</p>
          </div>

          <div className="technologies-icons">
            <img src={NodeJS_icon} alt="" />
            <p>NodeJS</p>
          </div>

          <div className="technologies-icons">
            <img src={React_icon} alt="" />
            <p>React</p>
          </div>

          <div className="technologies-icons">
            <img src={reactnative_icon} alt="" />
            <p>React Native</p>
          </div>

          <div className="technologies-icons">
            <img src={Vite_icon} alt="" />
            <p>Vite</p>
          </div>

          <div className="technologies-icons">
            <img src={github_icon} alt="" />
            <p>Github</p>
          </div>

          <div className="technologies-icons">
            <img src={git_icon} alt="" />
            <p>Git</p>
          </div>

          <div className="technologies-icons">
            <img src={Figma_icon} alt="" />
            <p>Figma</p>
          </div>

          <div className="technologies-icons">
            <img src={MySQL_icon} alt="" />
            <p>MySQL</p>
          </div>
          
          <div className="technologies-icons">
            <img src={postgre_icon} alt="" />
            <p>PostgreSQL</p>
          </div>

          <div className="technologies-icons">
            <img src={postman} alt="" />
            <p>Postman</p>
          </div>

          <div className="technologies-icons">
            <img src={DBeaver_icon} alt="" />
            <p>DBeaver</p>
          </div>
        </div>
      </section>
    </main>
  ) 
}

export { Home };