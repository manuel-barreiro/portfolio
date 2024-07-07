import { StaticImageData } from "next/image";
import { nestle, freelance, weplan, iea, ferrero } from "@/public";

export type ExperienceType = {
  id: number;
  date: string;
  workPlace: string;
  position: string;
  image: StaticImageData;
  mainTasks: string[];
};

export const experience: ExperienceType[] = [
  {
    id: 0,
    date: "Junio 2024 - Presente",
    workPlace: "Nestlé",
    position: "Front End Developer",
    image: nestle,
    mainTasks: [
      "Developed and maintained the frontend of the company’s website",
      "Worked with the backend team to implement new features",
      "Optimized the website for mobile devices",
    ],
  },
  {
    id: 1,
    date: "Octubre 2022 - Presente",
    workPlace: "Freelance",
    position: "Full Stack Developer",
    image: freelance,
    mainTasks: [
      "Desarrollo completo de sitios web o aplicaciones para clientes.",
      "Comunicación con los clientes para comprender los requisitos del proyecto y entregar soluciones personalizadas.",
    ],
  },
  {
    id: 2,
    date: "Mayo 2022 - Deciembre 2023",
    workPlace: "We Plan",
    position: "Data Engineer",
    image: weplan,
    mainTasks: [
      "Asistencia en el desarrollo e implementación de aplicaciones",
      "Revisiones de código y procesos de aseguramiento de calidad",
      "Generación de documentación de sistemas de software",
    ],
  },
  {
    id: 3,
    date: "Octubre 2021 - Diciembre 2023",
    workPlace: "IEA",
    position: "Data Analyst",
    image: iea,
    mainTasks: [
      "Aplicación de modelos de machine learning para predecir oferta/demanda eléctrica",
      "Trabajo en equipo con diseñadores y desarrolladores para crear soluciones innovadoras",
      "Generación mensual de reportes",
    ],
  },
  {
    id: 4,
    date: "Marzo 2021 - Mayo 2022",
    workPlace: "Ferrero",
    position: "Junior Engineer",
    image: ferrero,
    mainTasks: [
      "Automatización de procesos con Python",
      "Desarrollo de KPIs y tableros en PowerBI",
      "Análisis de datos y generación de reportes",
    ],
  },
];
