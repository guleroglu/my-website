import {
  FaFigma,
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export const mainMenu = [
  { path: "/", title: "home" },
  { path: "/about", title: "about" },
  { path: "/projects", title: "projects" },
];

export const Technologies = [
  {
    icon: <FaFigma size={30} />,
  },
  {
    icon: <FaBootstrap size={30} color="#6E41A4" />,
  },
  {
    icon: <FaCss3 size={30} color="#254BDD" />,
  },
  {
    icon: <FaGitAlt size={30} color="#E84D31" />,
  },
  {
    icon: <FaHtml5 size={30} color="#DD4B25" />,
  },
  {
    icon: <IoLogoJavascript size={30} color="#EFD81D" />,
  },
  {
    icon: <FaReact size={30} color="#149ECA" />,
  },
  {
    icon: <FaSass size={30} color="#CF649A" />,
  },
  {
    icon: <SiTypescript size={30} color="#2F74C0" />,
  },
  {
    icon: <FaSass size={30} color="#CF649A" />,
  },
];
