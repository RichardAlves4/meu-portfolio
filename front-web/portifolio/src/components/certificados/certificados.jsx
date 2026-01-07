import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "./certificados.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certificados = [
  {
    id: 1,
    titulo: "Fullstack Developer",
    descricao: "Certificado focado em React, Node.js e bancos de dados relacionais.",
    imagem: "link-da-sua-imagem-1.jpg"
  },
  {
    id: 2,
    titulo: "UI/UX Design",
    descricao: "Especialização em prototipagem e experiência do usuário com Figma.",
    imagem: "link-da-sua-imagem-2.jpg"
  }
];

const Certificados = () => {
  return (
    <div className="container-carrossel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {certificados.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="slide-content">
              {/* Lado do Texto */}
              <div className="text-side">
                <h2>{cert.titulo}</h2>
                <p>{cert.descricao}</p>
              </div>

              {/* Lado da Imagem */}
              <div className="image-side">
                <img src={cert.imagem} alt={cert.titulo} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export {Certificados};