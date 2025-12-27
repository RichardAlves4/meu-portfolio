import { Link } from "react-router-dom";
import "./home-page.css"

import myPhoto from "../../assets/richard.jpg"

const Home = () => {
  return (
    <main>
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

    </main>
  ) 
}

export { Home };