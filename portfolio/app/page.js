import Image from "next/image";
import TypeWriter from "./_components/TypeWriter";
import Header from "./_components/Header";
import ProjectSection from "./_components/ProjectSection";
import ContactSection from "./_components/ContactSection";
import SkillsSection from "./_components/SkillsSection";
import AboutMeSection from "./_components/AboutMeSection";
import MainSection from "./_components/MainSection";

export default function Home() {
  return (
    <main className="p-0">
      <Header />
      <MainSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
