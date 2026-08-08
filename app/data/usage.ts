import type { IconType } from "react-icons";
import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiVuedotjs,
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiNestjs,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiRedis,
  SiMongodb,
  SiGraphql,
  SiStripe,
  SiOpenai,
  SiDocker,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandNextjs, TbComponents } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa";

export type UsageItem = {
  name: string;
  icon: IconType;
  color: string;
};

export type UsageCategory = {
  title: string;
  items: UsageItem[];
};

export const usage: UsageCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Rust", icon: SiRust, color: "#DEA584" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: TbComponents, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Next.js API Routes", icon: TbBrandNextjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "API & Tools",
    items: [
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "REST APIs", icon: TbApi, color: "#10B981" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Chapa", icon: FaCreditCard, color: "#7DC400" },
      { name: "OpenAI API", icon: SiOpenai, color: "#10A37F" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];
