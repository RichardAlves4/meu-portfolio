import { FaAws, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact,  } from "react-icons/fa";
import { SiDbeaver, SiMysql, SiPostgresql, SiPostman, SiSpring } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const LinguagemCIcon = () => (

  <svg 
  viewBox="0 0 128 128" 
  xmlns="http://www.w3.org/2000/svg"
  width="5rem"
  height="5rem">
    <path
      className='secondaryIconTheme'
      d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
    ></path>
    <path
      className='secondaryIconTheme'
      d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
    ></path>
    <path
      className='secondaryContainerTheme'
      d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
    ></path>
  </svg>
);

const tecnologiasIconsDB = [
  {
    id:1,
    icon: <FaHtml5 />,
    nome: "HTML5",
  },
  {
    id:2,
    icon: <FaCss3Alt />,
    nome: "CSS",
  },
  {
    id:3,
    icon: <FaJs />,
    nome: "Java Script",
  },
  {
    id:4,
    icon: <FaPython />,
    nome: "Python",
  },
  {
    id:5,
    icon: <LinguagemCIcon/>,
    nome: "Linguagem C",
  },
  {
    id:6,
    icon: <FaJava />,
    nome: "Java",
  },
  {
    id:7,
    icon: <SiSpring />,
    nome: "Spring Boot",
  },
  {
    id:8,
    icon: <FaAws />,
    nome: "AWS",
  },
  {
    id:9,
    icon: <FaNodeJs />,
    nome: "NodeJs",
  },
  {
    id:10,
    icon: <FaReact />,
    nome: "React",
  },
  {
    id:11,
    icon:<TbBrandReactNative />,
    nome: "React Native",
  },
  {
    id:12,
    icon: <FaGithub />,
    nome: "Github",
  },
  {
    id:13,
    icon: <FaGitAlt />,
    nome: "Git",
  },
  {
    id:14,
    icon: <FaFigma />,
    nome: "Figma",
  },
  {
    id:15,
    icon: <SiMysql />,
    nome: "MySQL",
  },
  {
    
    id:16,
    icon: <SiPostgresql />,
    nome: "PostgreSQL",
  },
  {
    id:17,
    icon: <SiPostman />,
    nome: "Postman",
  },
  {
    id:18,
    icon: <SiDbeaver />,
    nome: "DBeaver",
  },
];

export default tecnologiasIconsDB;