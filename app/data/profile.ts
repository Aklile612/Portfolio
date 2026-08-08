import type { ProfileType } from "@/types";
import { siteConfig } from "./site";

export const profile: ProfileType = {
  _id: "profile",
  fullName: siteConfig.name,
  headline:
    "Full Stack Developer passionate about building scalable products and AI-powered experiences",
  profileImage: {
    image: "/logo.png",
    alt: "Aklile Ansa",
  },
  shortBio:
    "I'm Aklile Ansa, a Full Stack Developer and Information Science student at Addis Ababa University. I build reliable backends, clean frontends, and AI-assisted products — from e-commerce platforms to HR automation and blood donation systems.",
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.location,
  resumeURL: "/Aklile_Ansa.pdf",
  fullBio: [
    "I'm a Full Stack Developer based in Addis Ababa, currently pursuing a B.Sc. in Information Science at Addis Ababa University (expected graduation 2026).",
    "My work sits at the intersection of software engineering and applied AI. I've contributed to AI training and evaluation, built backend systems for web and e-commerce products, and developed LLM-powered applications for real-world use cases.",
    "I care about shipping software that is clear, maintainable, and useful — whether that's inventory and booking systems, candidate screening platforms, or donation management workflows with real-time notifications.",
    "Outside of work, I keep learning across Go, TypeScript, Python, and modern frontend frameworks, and I enjoy turning ideas into production-ready full-stack applications.",
  ],
};
