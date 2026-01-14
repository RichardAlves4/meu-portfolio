import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./projetos.css";

import "swiper/css";
import "swiper/css/navigation";

import studentsCool from "../../assets/projetos-img/img-students-cool.png";
import pim2 from "../../assets/projetos-img/img-pim-2.png";

const arrayProjects = [
  {
    id: 1,
    img: `${studentsCool}`,
    titulo: "Students Cool",
    resumo: "Cardápio online interativo para instituições de ensino, com o objetivo de reduzir o desperdício de alimentos.",
    introducao: "O \"Students-cool\" foi o meu TCC no curso técnico de analise e desenvolvimento de sistemas no Senai de Santo André.",
    objetivo:"Esse projeto foi criado com o objetivo de diminuir o desperdício de alimentos em instituições de ensino, para atingir esse objetivo eu e o meu grupo criamos um cardápio interativo online (para pc e mobile), onde os responsáveis por distribuir alimentos poderiam informar o cardápio do dia, e os alunos poderiam selecionar exatamente o que iriam consumir, assim os profissionais poderiam calcular com precisão a quantidade a ser produzida, diminuindo o desperdício de comida.",
    front: "Front-end: HTML, CSS, TypeScript, React, Figma;",
    back: "Back-end: Java,Spring Boot,Firebase Auth;Banco de dados: MySQL;",
    dados: "Banco de dados: MySQL;",
    observacoes: "Nesse projeto eu atuei no desenvolvimento do front-end e posso afirmar que ele foi o melhor projeto que desenvolvi enquanto estive no Senai. Durante o desenvolvimento aprendi muito sobre como trabalhar em equipe, foi também a partir desse projeto que eu criei gosto pela programação e decidi ter a área como carreira, além disso devo muito a equipe que participou comigo desse projeto, por causa deles eu tive a experiencia de trabalhar em uma equipe unida e animada o que me levou a dar o meu melhor para desenvolver esse projeto. Por esse e outros motivos sou muito grato a eles.",
    urlProjeto: "https://github.com/matheus-bicarato/StudentsCool",
    pasta: "students-cool",
  },
  {
    id: 2,
    img: `${pim2}`,
    titulo: "PIM 2° Semestre.",
    resumo: "PIM é um projeto em equipe multidisciplinar da Unip, sua nota é usada como de uma materia própria e que também entra no calculo da média de cada materia.",
    introducao: "A proposta desse PIM era criar um sistema acadêmico para gerenciar turmas, alunos, aulas e os dados gerados deveriam ser persistentes.",
    objetivo:"O principal Objetivo desse projeto era reduzir o desperdício de materiais e papeis, tendo em vista que o sistema seria desenvolvido para uma instituição que fazia tudo manualmente. Por isso eu e minha equipe focamos em tornar esse sistema o mais completo possível.",
    front: "Front-end: TKinter(nativo python), CustomTKinter(biblioteca).",
    back: "Back-end: Python, C.",
    dados: "Banco de dados: Arquivos .json.",
    observacoes: "Esse projeto ficou mais extenso do que complexo, pois as tecnologias e conceitos permitidos eram básicos. Por já ter familiaridade com boa parte do que foi usado no projeto, eu não consegui aprender muito da parte de programação. Mas aprendi muito sendo praticamente o QA desse projeto e também aprendi bastante sobre gerenciar/liderar o desenvolvimento de um projeto.",
    urlProjeto: "https://github.com/RichardAlves4/PIM_2/",
    pasta: "pim-2",
  }
];

const todasAsImagens = import.meta.glob(
  "../../assets/projetos-img/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const organizarImagensPorProjeto = () => {
  const mapa = {};

  Object.keys(todasAsImagens).forEach((path) => {
    const partes = path.split("/");
    const nomeDaPasta = partes[partes.length - 2];

    if (!mapa[nomeDaPasta]) {
      mapa[nomeDaPasta] = [];
    }

    mapa[nomeDaPasta].push(todasAsImagens[path].default);
  });

  return mapa;
};

const mapaDeImagens = organizarImagensPorProjeto();

const Modal = ({ projeto, onClose }) => {
  if (!projeto) return null;

  const imagensDoProjeto = mapaDeImagens[projeto.pasta] || [];

  const linkButton = (projeto) => {
      window.open(projeto.urlProjeto, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay-projects animate-fade-in" onClick={onClose}>
      <button className="close-button" onClick={onClose}>X</button>
      <div className="modal-content-project animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <div className="swiper-container-projects">
          {imagensDoProjeto.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {imagensDoProjeto.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className="image-slide-projetcs">
                    <img
                      src={url}
                      alt={`Slide ${index}`}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Nenhuma imagem encontrada para este projeto.</p>
          )}
        </div>

        <div id="text-content-project">
          <h2>{projeto.titulo}</h2>
          <div>
            <h3>Introdução:</h3>
            <p>{projeto.introducao}</p>
          </div>

          <div>
            <h3>Objetivo:</h3>
            <p>{projeto.objetivo}</p>
          </div>

          <div>
            <h3>Tecnologias:</h3>
            <p>{projeto.front}</p>
            <p>{projeto.back}</p>
            <p>{projeto.dados}</p>
          </div>

          <div>
            <h3>Observações:</h3>
            <p>{projeto.observacoes}</p>
          </div>
          <div className="btn-modal-projects">
            <button className="btn-projects btn" onClick={() => linkButton(projeto)}>Ver Projeto</button>          
          </div>
        </div>
      </div>
    </div>
  );
};

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  useEffect(() => {
    if (projetoSelecionado) {
      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [projetoSelecionado]);

  return (
    <div className="grid-container-projects">
      <ul>
        {arrayProjects.map((proj) => (
            <li key={proj.id} className="card">
              <img src={proj.img} alt="" />
              <h3>{proj.titulo}</h3>
              <p>{proj.resumo}</p>
              
              <button className="btn-projects btn" onClick={() => setProjetoSelecionado(proj)}>
                Ver detalhes
              </button>
            </li>
          ))}
          </ul>

      <Modal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </div>
  );
};

export { Projetos };
