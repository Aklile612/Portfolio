import Image from "next/image";
import { Metadata } from "next";
import type { ProfileType } from "@/types";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";
import RefLink from "../components/shared/RefLink";
import { profile as profileData } from "../data/profile";
import { siteConfig } from "../data/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: `About | ${siteConfig.name}`,
    url: `${siteConfig.url}/about`,
    description:
      "Learn more about my skills, experience and technical background",
    images: siteConfig.ogImage,
  },
};

export default function About() {
  const profile: ProfileType = profileData;

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
        <div className="order-2 lg:order-none">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
              I&apos;m {profile.fullName}. I live in {profile.location}, where I
              build the future.
            </h1>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed space-y-4">
              {profile.fullBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-incognito text-3xl font-bold tracking-tight mb-4">
                Education
              </h2>
              <div className="dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold">Addis Ababa University</h3>
                <p className="mt-1">B.Sc. in Information Science</p>
                <p className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  Expected Graduation: 2026 · Addis Ababa, Ethiopia
                </p>
                <p className="mt-4 dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed">
                  Coursework includes Software Requirements Engineering, Machine
                  Learning, Software Design & Architecture, Prompt Engineering,
                  Networking, Web Engineering, and Mobile Development.
                </p>
              </div>
            </div>
          </Slide>
        </div>

        <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
          <Slide delay={0.1}>
            <div className="sticky top-10">
              <Image
                className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 w-full max-w-[400px] bg-[#09090b]"
                src="/logo.png"
                width={400}
                height={400}
                quality={100}
                alt={profile.fullName}
                priority
              />

              <div className="flex flex-col text-center gap-y-4">
                <div className="flex items-center gap-x-3">
                  <RefLink
                    href={profile.resumeURL}
                    className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                  >
                    View Résumé <BiLinkExternal className="text-base" />
                  </RefLink>
                  <a
                    href={profile.resumeURL}
                    download="Aklile_Ansa_Resume.pdf"
                    className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                    title="Download Resume"
                  >
                    <BiSolidDownload
                      className="text-lg"
                      aria-label="Download Resume"
                    />
                  </a>
                </div>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-x-2 hover:text-primary-color"
                >
                  <BiEnvelope className="text-lg" />
                  {profile.email}
                </a>
              </div>
            </div>
          </Slide>
        </aside>
      </section>
      <Slide delay={0.14}>
        <Usage />
      </Slide>
    </main>
  );
}
