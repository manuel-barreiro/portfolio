import {
  power,
  boxmoment,
  coccions,
  remindMe,
  devaluApp,
  shortcut,
  tablemaster,
  zzautomotores,
  pokedex,
  reformer,
} from "@/public";
import { StaticImageData } from "next/image";

export type Project = {
  category: string;
  name: string;
  description: string;
  image: StaticImageData;
  tools: string[];
  href: string;
  github?: string;
};

export const projects: Project[] = [
  {
    category: "Landing page",
    name: "Reformer Club",
    description: "Landing page desarrollada para estudio de pilates y yoga.",
    image: reformer,
    tools: ["Next.js", "TypeScript", "Framer Motion"],
    href: "https://www.reformer.com.ar/",
  },
  {
    category: "Aplicación web",
    name: "Shortcut",
    description:
      "Diseño y desarrollo de una aplicación web para un bar, que cuenta con un sistema de pedidos integrado con Mercado Pago para el procesamiento de pagos. Incluye notificaciones por correo electrónico, y panel de administrador para visualizar pagos y órdenes.",
    image: shortcut,
    tools: ["TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
    href: "https://shortcut.com.ar/",
    github: "https://github.com/manuel-barreiro/InTime",
  },
  {
    category: "Landing page y catálogo web",
    name: "Power Consultant",
    description:
      "Diseño y desarrollo (Figma to code) de landing page corporativa y catálogo de productos. Desarrollado utilizando Next.js (App router), optimizado aprovechando el SSR (renderizado del lado del servidor).",
    image: power,
    tools: ["TypeScript", "Next.js", "Tailwind CSS"],
    href: "https://powerconsultant.com.ar/",
    github: "https://github.com/manuel-barreiro/power_consultant",
  },
  {
    category: "Aplicación web",
    name: "DevaluApp",
    description:
      "DevaluApp te ayuda a calcular la devaluación de tu salario en relación al valor del dólar estadounidense. Lo hace utilizando la API de Bluelytics. Desarrollado utilizando Next.js, con estilos realizados a través de Tailwind CSS.",
    image: devaluApp,
    tools: ["TypeScript", "Next.js", "Tailwind CSS"],
    href: "https://devaluapp.ar/",
    github: "https://github.com/manuel-barreiro/devaluapp",
  },
  {
    category: "Landing Page",
    name: "Z&Z Automotores",
    description:
      "Diseño y desarrollo de una landing page para un concesionario de autos. Desarrollado con Next.js y estilizado con Tailwind CSS. Envío de correos con Resend.",
    image: zzautomotores,
    tools: ["TypeScript", "Next.js", "Tailwind", "Resend"],
    href: "https://zzautomotores.com.ar/",
    github: "https://github.com/manuel-barreiro/jmauto",
  },
  {
    category: "Landing page",
    name: "Box Moment",
    description:
      "Diseño y desarrollo de landing page para una empresa de cajas de regalo de Navidad. Desarrollado en React utilizando Vite, con Tailwind CSS, y desplegado en el hosting de la empresa.",
    image: boxmoment,
    tools: ["React", "Vite", "Tailwind CSS", "EmailJS"],
    href: "https://boxmoment.com.ar/",
    github: "https://github.com/manuel-barreiro/boxmoment",
  },
  {
    category: "Aplicación web",
    name: "TableMaster",
    description:
      "Desarrollo en progreso de aplicación para reservar mesas en restaurantes. Desarrollada utilizando Next.js y la librería de UI Shadcn.",
    image: tablemaster,
    tools: ["TypeScript", "Next.js", "Tailwind", "Shadcn"],
    href: "https://tablemaster.vercel.app/",
    github: "https://github.com/manuel-barreiro/tablemaster",
  },
  {
    category: "Aplicación web",
    name: "RemindMe",
    description:
      "Una aplicación que permite a los usuarios crear y guardar recordatorios. Desarrollada en TypeScript con Next.js, aprovechando server actions, Tailwind CSS y Prisma con PostgreSQL.",
    image: remindMe,
    tools: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    href: "https://mb-remind-me.vercel.app/",
    github: "https://github.com/manuel-barreiro/remind-me",
  },
  {
    category: "Landing page y catálogo web",
    name: "Coccions",
    description:
      "Diseño y desarrollo de una catálogo web para empresa de pastelería. Desarrollado utilizando vanilla JavaScript, y CSS.",
    image: coccions,
    tools: ["HTML", "CSS", "JavaScript"],
    href: "https://coccions.netlify.app/",
    github: "https://github.com/manuel-barreiro/Coccions",
  },
  {
    category: "Aplicación Web",
    name: "MB Pokédex",
    description:
      "Prueba técnica realizada en 48hs para puesto de frontend developer. Lazy loading, infinite scroll. ",
    image: pokedex,
    tools: ["Next.js", "TypeScript", "Chakra UI"],
    href: "https://mb-pokedex.vercel.app/",
    github: "https://github.com/manuel-barreiro/pokemon-app",
  },
];
