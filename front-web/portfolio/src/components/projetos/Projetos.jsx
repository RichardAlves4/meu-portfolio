import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation('pages');

  if (!projeto) return null;

  const imagensDoProjeto = mapaDeImagens[projeto.pasta] || [];

  const linkButton = (projeto) => {
      window.open(projeto.urlProjeto, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${styles.modalContainer} ${styles.animateFadeIn}`} onClick={onClose}>
      <button className={`${styles.btnCloseModal} btnTheme tertiaryborderTheme`} onClick={onClose}>X</button>
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
            <p className="secondaryTextTheme">Nenhuma imagem encontrada para este projeto.</p>
          )}
        </div>

        <div className={styles.textModalContent}>
          <h2>{projeto.titulo}</h2>
          <div>
            <h3>{t('common:projects.introduction_title')}:</h3>
            <p>{t(projeto.introducao)}</p>
          </div>

          <div>
            <h3>{t('common:projects.objective_title')}:</h3>
            <p>{t(projeto.objetivo)}</p>
          </div>

          <div>
            <h3>{t('common:projects.technologies_title')}:</h3>
            <p>{t(projeto.front)}</p>
            <p>{t(projeto.back)}</p>
            <p>{t(projeto.dados)}</p>
          </div>

          <div>
            <h3>{t('common:projects.observations_title')}:</h3>
            <p>{t(projeto.observacoes)}</p>
          </div>
          <div className={styles.btnModalLink}>
            <button className='btn secondaryBtnTheme tertiaryborderTheme' onClick={() => linkButton(projeto)}>
              {t('common:projects.btn_view_project')}
            </button>    
          </div>
        </div>
      </div>
    </div>
  );
};

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const { t } = useTranslation('pages');

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
            <li key={proj.id} className={`${styles.projectContent} textTheme`}>
              <img src={proj.img} alt="" />
              <h3>{proj.titulo}</h3>
              <p>{t(proj.resumo)}</p>
              
              <button className='btn secondaryBtnTheme tertiaryborderTheme' onClick={() => setProjetoSelecionado(proj)}>
                {t('common:projects.btn_details')}
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
