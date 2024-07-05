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

type Tool = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export type Project = {
  category: string;
  name: string;
  description: string;
  image: StaticImageData;
  tools: Tool[];
  href: string;
  github?: string;
  index?: number;
};

export const projects: Project[] = [
  {
    category: "Landing page",
    name: "Reformer Club",
    description: "Landing page desarrollada para estudio de pilates y yoga.",
    image: reformer,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "Framer Motion",
        designation: "",
        image: "/icons/framer.png",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
    ],
    href: "https://www.reformer.com.ar/",
  },
  {
    category: "Aplicación web",
    name: "Shortcut",
    description:
      "Diseño y desarrollo de una aplicación web para un bar, que cuenta con un sistema de pedidos integrado con Mercado Pago para el procesamiento de pagos. Incluye notificaciones por correo electrónico, y panel de administrador para visualizar pagos y órdenes.",
    image: shortcut,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        designation: "",
        image: "/icons/mongodb.png",
      },
    ],
    href: "https://shortcut.com.ar/",
    github: "https://github.com/manuel-barreiro/InTime",
  },
  {
    category: "Landing page y catálogo web",
    name: "Power Consultant",
    description:
      "Diseño y desarrollo (Figma to code) de landing page corporativa y catálogo de productos. Desarrollado utilizando Next.js (App router), optimizado aprovechando el SSR (renderizado del lado del servidor).",
    image: power,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
    ],
    href: "https://powerconsultant.com.ar/",
    github: "https://github.com/manuel-barreiro/power_consultant",
  },
  {
    category: "Aplicación web",
    name: "DevaluApp",
    description:
      "DevaluApp te ayuda a calcular la devaluación de tu salario en relación al valor del dólar estadounidense. Lo hace utilizando la API de Bluelytics. Desarrollado utilizando Next.js, con estilos realizados a través de Tailwind CSS.",
    image: devaluApp,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
    ],
    href: "https://devaluapp.ar/",
    github: "https://github.com/manuel-barreiro/devaluapp",
  },
  {
    category: "Landing Page",
    name: "Z&Z Automotores",
    description:
      "Diseño y desarrollo de una landing page para un concesionario de autos. Desarrollado con Next.js y estilizado con Tailwind CSS. Envío de correos con Resend.",
    image: zzautomotores,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
      {
        id: 4,
        name: "Resend",
        designation: "",
        image: "/icons/resend.webp",
      },
    ],
    href: "https://zzautomotores.com.ar/",
    github: "https://github.com/manuel-barreiro/jmauto",
  },
  {
    category: "Landing page",
    name: "Box Moment",
    description:
      "Diseño y desarrollo de landing page para una empresa de cajas de regalo de Navidad. Desarrollado en React utilizando Vite, con Tailwind CSS, y desplegado en el hosting de la empresa.",
    image: boxmoment,
    tools: [
      {
        id: 1,
        name: "React",
        designation: "",
        image: "/icons/react.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "JavaScript",
        designation: "",
        image: "/icons/js.png",
      },
      {
        id: 4,
        name: "Vite",
        designation: "",
        image: "/icons/vite.jpg",
      },
    ],
    href: "https://boxmoment.com.ar/",
    github: "https://github.com/manuel-barreiro/boxmoment",
  },
  {
    category: "Aplicación web",
    name: "TableMaster",
    description:
      "Desarrollo en progreso de aplicación para reservar mesas en restaurantes. Desarrollada utilizando Next.js y la librería de UI Shadcn.",
    image: tablemaster,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
      {
        id: 4,
        name: "Shadcn",
        designation: "",
        image: "/icons/shadcn.png",
      },
    ],
    href: "https://tablemaster.vercel.app/",
    github: "https://github.com/manuel-barreiro/tablemaster",
  },
  {
    category: "Aplicación web",
    name: "RemindMe",
    description:
      "Una aplicación que permite a los usuarios crear y guardar recordatorios. Desarrollada en TypeScript con Next.js, aprovechando server actions, Tailwind CSS y Prisma con PostgreSQL.",
    image: remindMe,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        designation: "",
        image: "/icons/tailwind.jpg",
      },
      {
        id: 3,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        designation: "",
        image: "/icons/postgres.png",
      },
      {
        id: 4,
        name: "Prisma",
        designation: "",
        image: "/icons/prisma.jpeg",
      },
    ],
    href: "https://mb-remind-me.vercel.app/",
    github: "https://github.com/manuel-barreiro/remind-me",
  },
  {
    category: "Landing page y catálogo web",
    name: "Coccions",
    description:
      "Diseño y desarrollo de una catálogo web para empresa de pastelería. Desarrollado utilizando vanilla JavaScript, y CSS.",
    image: coccions,
    tools: [
      {
        id: 1,
        name: "HTML",
        designation: "",
        image: "/icons/html.png",
      },
      {
        id: 2,
        name: "CSS",
        designation: "",
        image: "/icons/css.webp",
      },
      {
        id: 3,
        name: "JavaScript",
        designation: "",
        image: "/icons/js.png",
      },
    ],
    href: "https://coccions.netlify.app/",
    github: "https://github.com/manuel-barreiro/Coccions",
  },
  {
    category: "Aplicación Web",
    name: "MB Pokédex",
    description:
      "Prueba técnica realizada en 48hs para puesto de frontend developer. Lazy loading, infinite scroll. ",
    image: pokedex,
    tools: [
      {
        id: 1,
        name: "Next.js",
        designation: "",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        designation: "",
        image: "/icons/ts.svg",
      },
      {
        id: 3,
        name: "ChakraUI",
        designation: "",
        image: "/icons/chakra.png",
      },
    ],
    href: "https://mb-pokedex.vercel.app/",
    github: "https://github.com/manuel-barreiro/pokemon-app",
  },
];

export const tools: Tool[] = [
  {
    id: 1,
    name: "TypeScript",
    designation: "",
    image: "/icons/ts.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "",
    image: "/icons/js.png",
  },
  {
    id: 3,
    name: "Python",
    designation: "",
    image: "/icons/python.jpg",
  },
  {
    id: 4,
    name: "Next.js",
    designation: "",
    image: "/icons/next.svg",
  },
  {
    id: 5,
    name: "React",
    designation: "",
    image: "/icons/react.png",
  },
  {
    id: 6,
    name: "Tailwind",
    designation: "",
    image: "/icons/tailwind.jpg",
  },
  {
    id: 7,
    name: "HTML",
    designation: "",
    image: "/icons/html.png",
  },
  {
    id: 8,
    name: "CSS",
    designation: "",
    image: "/icons/css.webp",
  },
  {
    id: 9,
    name: "Framer Motion",
    designation: "",
    image: "/icons/framer.png",
  },
  {
    id: 10,
    name: "Vite",
    designation: "",
    image: "/icons/vite.jpg",
  },
  {
    id: 11,
    name: "MySQL",
    designation: "",
    image: "/icons/mysql.png",
  },
  {
    id: 12,
    name: "PostgreSQL",
    designation: "",
    image: "/icons/postgres.png",
  },
  {
    id: 13,
    name: "MongoDB",
    designation: "",
    image: "/icons/mongodb.png",
  },
  {
    id: 14,
    name: "Shadcn",
    designation: "",
    image: "/icons/shadcn.png",
  },
  {
    id: 15,
    name: "Resend",
    designation: "",
    image: "/icons/resend.webp",
  },
  {
    id: 16,
    name: "Figma",
    designation: "",
    image: "/icons/figma.png",
  },
  {
    id: 17,
    name: "ChakraUI",
    designation: "",
    image: "/icons/chakra.png",
  },
  {
    id: 18,
    name: "Prisma",
    designation: "",
    image: "/icons/prisma.jpeg",
  },
  {
    id: 19,
    name: "Streamlit",
    designation: "",
    image: "/icons/streamlit.png",
  },
  {
    id: 20,
    name: "Git",
    designation: "",
    image: "/icons/git.jpg",
  },
];
