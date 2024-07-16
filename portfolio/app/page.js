import Image from "next/image";
import TypeWriter from "./_components/typeWriter";
import Header from "./_components/header";
import { HiMail } from "react-icons/hi";
import SkillItem from "./_components/skillItem";
import ProjectSection from "./_components/projectCarousel";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <main className="p-0">
      <Header />
      <section
        id="main"
        className="h-screen flex flex-col justify-center text-4xl bg-black bg-opacity-80"
      >
        <Image src="/bg1.jpg" fill className="opacity-80 -z-10" />
        <TypeWriter />
      </section>
      <section id="about" className="bg-blue-500 text-white overflow-hidden">
        <div className="h-full relative">
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16">
            <main className="flex-grow flex items-center">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  About{" "}
                  <span className="underline underline-offset-8 decoration-black">
                    Me
                  </span>
                  .
                </h2>
                <div className="text-xl md:text-2xl text-white mb-8 pr-10 space-y-1">
                  <p>완성도 있는 코드와 깔끔한 UI를 추구합니다.</p>
                  <p>어쩌고1</p>
                  <p>어쩌고2</p>
                </div>
              </div>
            </main>

            <footer className="flex justify-between items-center text-lg bg-white text-black py-3 px-8 rounded-full w-fit">
              <div className="flex space-x-4">
                <a
                  href="mailto:cyy8071@gmail.com"
                  className="hover:text-gray-500 transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://github.com/chomchom96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://velog.io/@error_io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 transition-colors"
                >
                  Velog
                </a>
              </div>
            </footer>
          </div>
          <div className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl hidden lg:block">
            <Image
              src="/증명사진2.jpg"
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="bg-slate-800 text-white overflow-hidden flex items-center justify-center"
      >
        <div className="w-full max-w-6xl px-4 relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl mb-8 text-center">
              <span className="text-white">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[80vh]">
              {/* Frontend */}
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Frontend
                </h3>
                <ul className="space-y-2 text-lg sm:text-base">
                  <SkillItem
                    title="React"
                    description="React를 사용해서 "
                    stroke="#22d3ee"
                  />
                  <SkillItem title="Next.js" description="" stroke="#22d3ee" />
                  <SkillItem title="Vue.js" description="" stroke="#22d3ee" />
                  <SkillItem
                    title="JavaScript"
                    description=""
                    stroke="#22d3ee"
                  />
                  <SkillItem
                    title="TypeScript"
                    description=""
                    stroke="#22d3ee"
                  />
                </ul>
              </div>

              {/* Design & Prototype */}
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Design & Deploy
                </h3>
                <ul className="space-y-2 text-lg sm:text-base">
                  <SkillItem title="Figma" description="" stroke="#c084fc" />
                  <SkillItem
                    title="TailwindCSS"
                    description=""
                    stroke="#c084fc"
                  />
                  <SkillItem title="Flowbite" description="" stroke="#c084fc" />
                </ul>
              </div>

              {/* Communication */}
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  Collaboration
                </h3>
                <ul className="space-y-2 text-lg sm:text-base">
                  <SkillItem title="Git" description="" stroke="#c084fc" />
                  <SkillItem title="Jira" description="" stroke="#c084fc" />
                </ul>
              </div>
            </div>

            {/* Additional Skills */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Additional skills
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Java", "Python", "Spring boot", "MyBatis"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="bg-indigo-500 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl text-center">
          <span className="text-white">Projects</span>
        </h2>
        <ProjectSection />
      </section>
      <section id="contact" className="bg-orange-600">
        <ContactSection />
      </section>
    </main>
  );
}
