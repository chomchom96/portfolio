import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
