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
      duracao: " 19",
      descricao: "certificates.description_text1",
      arquivoUrl:"/certificados-docs/Certificado-Google-Cloud-Foundation.pdf",
      imagem: `${certificadoGoogleCloud}`,
      tipo: "pdf"
    },
    {
      id: 2,
      titulo: "Programação JAVA",
      instituicao: "SENAI",
      duracao: "120",
      descricao: "certificates.description_text2",
      arquivoUrl:"/certificados-docs/Certificado-Programacao-JAVA.pdf",
      imagem: `${certificadoJAVA}`,
      tipo: "pdf"
    },
    {
      id: 3,
      titulo: "Cibersegurança com Suluções Fortinet",
      instituicao: "SENAI",
      duracao: "60",
      descricao: "certificates.description_text3",
      arquivoUrl:"/certificados-docs/Certificado-Fortinet.pdf",
      imagem: `${certificadoFortinet}`,
      tipo: "pdf"
    },
    {
      id: 4,
      titulo: "AWS Impressionador",
      instituicao: "Hashtag Treinamentos",
      duracao: "23",
      descricao: "certificates.description_text4",
      arquivoUrl:"https://portalhashtag.com/certificado-hashtag/1751045521525x570445423228418800",
      imagem: `${certificadoAWS}`,
      tipo: "link"
  
    },
    {
      id: 5,
      titulo: "Microsoft Power BI",
      instituicao: "SENAI",
      duracao: "32",
      descricao: "certificates.description_text5",
      arquivoUrl:"/certificados-docs/Certificado-Power-BI.pdf",
      imagem: `${certificadoPowerBI}`,
      tipo: "pdf"
    },
    {
      id: 6,
      titulo: "JavaScript Impressionador",
      instituicao: "Hashtag Treinamentos",
      duracao: "170",
      descricao: "certificates.description_text6",
      arquivoUrl:"https://portalhashtag.com/certificado-hashtag/1767829438099x242036252114419700",
      imagem: `${certificadoJS}`,
      tipo: "link"
    },
    {
      id: 7,
      titulo: "Javascript E Node.js",
      instituicao: "Hashtag Treinamentos",
      duracao: "19",
      descricao: "certificates.description_text7",
      arquivoUrl:"https://portalhashtag.com/certificado-hashtag/1766535876408x767787135316000800",
      imagem: `${certificadoJSNode}`,
      tipo: "link"
    }
];

export default certificados;