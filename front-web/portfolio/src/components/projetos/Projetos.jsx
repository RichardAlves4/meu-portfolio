import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "./projetos.css";
import styles from  "./projetos.module.css";
import "swiper/css";
import "swiper/css/navigation";

import arrayProjects from "./projetosDB"

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
    <div className={`${styles.modalContainer} ${styles.animateFadeIn}`} onClick={onClose}>
      <button className={styles.btnCloseModal} onClick={onClose}>X</button>
      <div className={`${styles.modalContent} ${styles.animateScaleUp}`} onClick={(e) => e.stopPropagation()}>
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
                  <div className={styles.imgSlide}>
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

        <div className={styles.textModalContent}>
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
          <div className={styles.btnModalLink}>
            <button className={`${styles.btnProject} btn`} onClick={() => linkButton(projeto)}>Ver Projeto</button>          
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
    <div className={styles.projectsContainer}>
      <ul>
        {arrayProjects.map((proj) => (
            <li key={proj.id} className={styles.projectContent}>
              <img src={proj.img} alt="" />
              <h3>{proj.titulo}</h3>
              <p>{proj.resumo}</p>
              
              <button className={`${styles.btnProject} btn`} onClick={() => setProjetoSelecionado(proj)}>
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
