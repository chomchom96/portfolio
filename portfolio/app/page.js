import dynamic from "next/dynamic";
import Header from "./_components/Header";
import MainSection from "./_components/MainSection";

// 랜딩 화면 이후 섹션들은 lazy loading
const AboutMeSection = dynamic(() => import("./_components/AboutMeSection"), {
  loading: () => <div className="h-screen bg-blue-500" />,
});
const SkillsSection = dynamic(() => import("./_components/SkillsSection"), {
  loading: () => <div className="h-screen bg-slate-800" />,
});
const ProjectSection = dynamic(() => import("./_components/ProjectSection"), {
  loading: () => <div className="h-screen bg-slate-600" />,
});
const ContactSection = dynamic(() => import("./_components/ContactSection"), {
  loading: () => <div className="h-screen bg-yellow-500" />,
});

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
