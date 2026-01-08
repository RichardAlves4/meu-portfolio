import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "./certificados.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import certificadoAWS from "../../assets/certificados/certificado-AWS.png"
import certificadoAWS2 from "../../assets/certificados/fotnet.png"

const certificados = [
  {
    id: 1,
    titulo: "AWS Impressionador",
    instituicao: "Hashtag Treinamentos",
    duracao: "23 horas",
    descricao: "Fundamentos básico, ferramentas e funcionalidades da AWS.",
    imagem: `${certificadoAWS}`
  },
  {
    id: 2,
    titulo: "UI/UX Design",
    descricao: "Especialização em prototipagem e experiência do usuário com Figma.",
    imagem: `${certificadoAWS2}`
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
        // autoplay={{ delay: 10000 }}
      >
        {certificados.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="slide-content">
              {/* Lado do Texto */}
              <div className="text-side">
                <h2>{cert.titulo}</h2>
                <p>Instituição: {cert.instituicao}</p>
                <p>Duração: {cert.duracao}</p>
                <p>Descrição: {cert.descricao}</p>
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