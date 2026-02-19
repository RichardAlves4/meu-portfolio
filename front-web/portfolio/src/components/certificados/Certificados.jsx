import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {useTranslation } from "react-i18next";

import "./certificados.css";
import 'swiper/css';
import 'swiper/css/navigation';

import certificados from "./certificadosDB"

export const Certificados = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [certSelecionado, setCertSelecionado] = useState(null);
  const { t } = useTranslation('pages');

  useEffect(() => {
    if (modalAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalAberto]);

  const gerenciarClique = (cert) => {
    if (cert.tipo === 'pdf') {
      setCertSelecionado(cert);
      setModalAberto(true);
    } else {
      window.open(cert.arquivoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
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
        {certificados.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="slide-content">
              <div className="text-side secondaryTextTheme">
                <h2>{cert.titulo}</h2>
                <p>{t('certificates.institution_title')}: {cert.instituicao}</p>
                <p>{t('certificates.duration_title')}: {t('certificates.duration_text', { count: cert.duracao })}</p>
                <p>{t('certificates.description_title')}: {t(cert.descricao)}</p>
                <button className="btn-certificates btn btnTheme tertiaryborderTheme" onClick={() => gerenciarClique(cert)}>
                  {cert.tipo === 'pdf' ? t('certificates.btn_view1') : t('certificates.btn_view2')}
                </button>
              </div>

              <div className="image-side" onClick={() => gerenciarClique(cert)} style={{cursor: 'pointer'}}>
                <img src={cert.imagem} alt={cert.titulo} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {modalAberto && certSelecionado && (
        <div className="modal-overlay animate-fade-in" onClick={() => setModalAberto(false)}>

          <button className="close-button btnTheme tertiaryborderTheme" onClick={() => setModalAberto(false)}>&times;</button>
          
          <div className="modal-content animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={`${certSelecionado.arquivoUrl}#view=FitH`} 
              title={certSelecionado.titulo}
              width="100%" 
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
}