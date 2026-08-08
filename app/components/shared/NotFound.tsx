import Image from "next/image";
import Link from "next/link";
import duckImage from "@/public/searching-duck.gif";
import { projects } from "@/app/data/projects";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-4xl">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="Yellow duck searching"
        />
        <h1 className="font-incognito font-black tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="max-w-4xl grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        {projects.slice(0, 4).map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
          >
            <h2 className="font-incognito text-lg font-semibold mb-1">
              {project.name}
            </h2>
            <p className="text-sm dark:text-zinc-400 text-zinc-600">
              {project.tagline}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
