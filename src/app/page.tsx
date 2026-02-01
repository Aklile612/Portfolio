import { Navbar, Footer, FloatingNav, Hero, About, Projects, Experience, Contact } from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </>
  );
}

