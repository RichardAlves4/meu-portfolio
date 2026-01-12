import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./projetos.css";

import "swiper/css";
import "swiper/css/navigation";

const arrayProjects = [
  {
    id: 1,
    titulo: "Students Cool",
    introducao: "O \"Students-cool\" foi o meu TCC no curso técnico de analise e desenvolvimento de sistemas no Senai de Santo André.",
    objetivo:"Esse projeto foi criado com o objetivo de diminuir o desperdício de alimentos em instituições de ensino, para atingir esse objetivo eu e o meu grupo criamos um cardápio interativo online (para pc e mobile), onde os responsáveis por distribuir alimentos poderiam informar o cardápio do dia, e os alunos poderiam selecionar exatamente o que iriam consumir, assim os profissionais poderiam calcular com precisão a quantidade a ser produzida, diminuindo o desperdício de comida.",
    front: "Front-end: HTML, CSS, TypeScript, React, Figma;",
    back: "Back-end: Java,Spring Boot,Firebase Auth;Banco de dados: MySQL;",
    dados: "Banco de dados: MySQL;",
    observacoes: "Nesse projeto eu atuei no desenvolvimento do front-end e posso afirmar que ele foi o melhor projeto que desenvolvi enquanto estive no Senai. Durante o desenvolvimento aprendi muito sobre como trabalhar em equipe, foi também a partir desse projeto que eu criei gosto pela programação e decidi ter a área como carreira, além disso devo muito a equipe que participou comigo desse projeto, por causa deles eu tive a experiencia de trabalhar em uma equipe unida e animada o que me levou a dar o meu melhor para desenvolver esse projeto. Por esse e outros motivos sou muito grato a eles.",
    urlProjeto: "https://potfolio-gabrielf.vercel.app/",
    pasta: "students-cool",
  },
  {
    id: 2,
    introducao: "O \"Students-cool\" foi o meu TCC no curso técnico de analise e desenvolvimento de sistemas no Senai de Santo Andr",
    objetivo:"wad",
    tecnologias: "Cardápio online interativo...",
    observacoes: "Aqui vai o texto longo do projeto 1...",
    urlProjeto: "https://potfolio-gabrielf.vercel.app/",
    pasta: "students-cool",
  },
  // ... adicione os outros aqui
];

const todasAsImagens = import.meta.glob(
  "../../assets/projetos-img/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const organizarImagensPorProjeto = () => {
  const mapa = {};

  Object.keys(todasAsImagens).forEach((path) => {
    // Extrai o nome da pasta (ex: 'students-cool') do caminho do arquivo
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
          <a href={projeto.urlProjeto}>Ver projeto</a> 
        </div>
      </div>
    </div>
  );
};

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  useEffect(() => {
    if (projetoSelecionado) {
      // Quando o modal abre, esconde o scroll do site
      document.body.style.overflow = 'hidden';
    } else {
      // Quando o modal fecha, restaura o scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup: garante que o scroll volte se o componente for desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [projetoSelecionado]);

  return (
    <div className="grid-container">
      {arrayProjects.map((proj) => (
        <div key={proj.id} className="card">
          <h3>{proj.titulo}</h3>
          <p>{proj.descricao}</p>
          <button onClick={() => setProjetoSelecionado(proj)}>
            Ver detalhes
          </button>
        </div>
      ))}

      {/* Passamos o estado 'projetoSelecionado' para a prop 'projeto' */}
      <Modal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </div>
  );
};

export { Projetos };
