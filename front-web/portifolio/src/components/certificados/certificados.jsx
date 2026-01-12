import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "./certificados.css";

import 'swiper/css';
import 'swiper/css/navigation';

import certificadoGoogleCloud from "../../assets/certificados/certificado-GoogleCloud.png";
import certificadoJAVA from "../../assets/certificados/certificado-JAVA.png";
import certificadoFortinet from "../../assets/certificados/fortinet.png";
import certificadoAWS from "../../assets/certificados/certificado-AWS.png";
import certificadoPowerBI from "../../assets/certificados/certificado-PowerBI.png";
import certificadoJS from "../../assets/certificados/JavaScript-Impressionador.png";
import certificadoJSNode from "../../assets/certificados/Certificado-JS-E-Node.js.png";

const certificados = [
  {
    id: 1,
    titulo: "Implementação de Serviços em Nuvem Google Cloud Foundations",
    instituicao: "SENAI",
    duracao: "40 horas",
    descricao: "Fundamentos básico, ferramentas, funcionalidades e implementação de serviços da Google Cloud.",
    arquivoUrl:"/certificados-docs/Certificado-Google-Cloud-Foundation.pdf",
    imagem: `${certificadoGoogleCloud}`,
    tipo: "pdf"
  },
  {
    id: 2,
    titulo: "Programação JAVA",
    instituicao: "SENAI",
    duracao: "120 horas",
    descricao: "Lógica de programação, POO, API, Spring Boot, banco de dados, Clean Architecture.",
    arquivoUrl:"/certificados-docs/Certificado-Programacao-JAVA.pdf",
    imagem: `${certificadoJAVA}`,
    tipo: "pdf"
  },
  {
    id: 3,
    titulo: "Cibersegurança com Suluções Fortinet",
    instituicao: "SENAI",
    duracao: "60 horas",
    descricao: "Cibersegurança, Networking Fundamentals, FCA - FortiGate, Fortinet.",
    arquivoUrl:"/certificados-docs/Certificado-Fortinet.pdf",
    imagem: `${certificadoFortinet}`,
    tipo: "pdf"
  },
  {
    id: 4,
    titulo: "AWS Impressionador",
    instituicao: "Hashtag Treinamentos",
    duracao: "23 horas",
    descricao: "Fundamentos básico, ferramentas e funcionalidades da AWS.",
    arquivoUrl:"https://portalhashtag.com/certificado-hashtag/1751045521525x570445423228418800",
    imagem: `${certificadoAWS}`,
    tipo: "link"

  },
  {
    id: 5,
    titulo: "Microsoft Power BI",
    instituicao: "SENAI",
    duracao: "32 horas",
    descricao: "Excel básico, Power BI, ferramentas, Dashboards.",
    arquivoUrl:"/certificados-docs/Certificado-Power-BI.pdf",
    imagem: `${certificadoPowerBI}`,
    tipo: "pdf"
  },
  {
    id: 6,
    titulo: "JavaScript Impressionador",
    instituicao: "Hashtag Treinamentos",
    duracao: "170 horas",
    descricao: "Fundamentos do básico ao avançado, lógica de programação, API, ExpressJS.",
    arquivoUrl:"https://portalhashtag.com/certificado-hashtag/1767829438099x242036252114419700",
    imagem: `${certificadoJS}`,
    tipo: "link"
  },
  {
    id: 7,
    titulo: "Javascript E Node.js",
    instituicao: "Hashtag Treinamentos",
    duracao: "19 horas",
    descricao: "fundamentos NodeJS, criação de APIs com ExpressJS.",
    arquivoUrl:"https://portalhashtag.com/certificado-hashtag/1766535876408x767787135316000800",
    imagem: `${certificadoJSNode}`,
    tipo: "link"
  }
];

const Certificados = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [certSelecionado, setCertSelecionado] = useState(null);

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
      // Se for PDF, abre o modal interno
      setCertSelecionado(cert);
      setModalAberto(true);
    } else {
      // Se for link externo, abre direto em uma nova aba por segurança
      window.open(cert.arquivoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="container-carrossel">
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
              <div className="text-side">
                <h2>{cert.titulo}</h2>
                <p>Instituição: {cert.instituicao}</p>
                <p>Duração: {cert.duracao}</p>
                <p>Descrição: {cert.descricao}</p>
                <button onClick={() => gerenciarClique(cert)}>
                  {cert.tipo === 'pdf' ? 'Visualizar Agora' : 'Ver no Site Oficial'}
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

          <button className="close-button" onClick={() => setModalAberto(false)}>&times;</button>
          
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
    </div>
  );
}
export {Certificados};