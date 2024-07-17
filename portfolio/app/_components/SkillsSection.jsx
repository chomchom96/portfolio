import { HiQuestionMarkCircle } from "react-icons/hi";
import SkillItem from "./SkillItem";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center overflow-hidden bg-slate-800 text-white"
    >
      <div className="relative w-full max-w-6xl px-4">
        <div className="relative z-10">
          <h2 id="title">
            Skills
          </h2>
          <p className="mb-6 flex flex-row items-center justify-center gap-1">
            <HiQuestionMarkCircle /> 마우스롤 올리면 세부사항을 확인할 수
            있습니다.
          </p>

          <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
            {/* Frontend */}
            <div className="flex flex-wrap gap-3 rounded-xl bg-white bg-opacity-10 p-6 backdrop-blur-lg backdrop-filter md:flex-col">
              <h3 className="text-2xl font-bold text-cyan-400">Frontend</h3>
              <ul className="flex flex-wrap gap-2 text-lg sm:text-base md:flex-col">
                <SkillItem
                  title="React"
                  description="리액트의 기본적인 Hook을 이해하고 활용하며 자주 사용하는 기능을 커스텀 훅으로 사용합니다.
            Zustand를 사용한 상태관리를 할 수 있습니다."
                  stroke="#22d3ee"
                />
                <SkillItem
                  title="Next.js"
                  description="Next를 사용한 SSR를 구현한 경험이 있습니다."
                  stroke="#22d3ee"
                />
                <SkillItem
                  title="Vue.js"
                  description="Vue의 Life cycle을 이해하고 SPA 앱을 개발한 경험이 있습니다."
                  stroke="#22d3ee"
                />
                <SkillItem
                  title="JavaScript"
                  description="ES6+ 문법에 익숙합니다."
                  stroke="#22d3ee"
                />
                <SkillItem
                  title="TypeScript"
                  description="Typescript를 활용한 컴파일 단계의 정적 타입 검사를 할 수 있습니다."
                  stroke="#22d3ee"
                />
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 rounded-xl bg-white bg-opacity-10 p-6 backdrop-blur-lg backdrop-filter md:flex-col">
              <h3 className="mb-4 text-2xl font-bold text-purple-400">
                Web & Styling
              </h3>
              <ul className="flex flex-wrap gap-2 text-lg sm:text-base md:flex-col">
                <SkillItem title="HTML/CSS" description="" stroke="#c084fc" />
                <SkillItem
                  title="Figma"
                  description="피그마로 간단한 컴포넌트와 페이지를 만들수 있습니다."
                  stroke="#c084fc"
                />
                <SkillItem
                  title="Tailwind"
                  description="테마, 색상 등을 커스텀하고, breakpoint를 활용한 반응형 UI를 구현할 수 있습니다."
                  stroke="#c084fc"
                />
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 rounded-xl bg-white bg-opacity-10 p-6 backdrop-blur-lg backdrop-filter md:flex-col">
              <h3 className="mb-4 text-2xl font-bold text-red-400">
                Collaboration
              </h3>
              <ul className="flex flex-wrap gap-2 text-lg sm:text-base md:flex-col">
                <SkillItem
                  title="Git"
                  description="Git과 Gitlab에서 Git branch 전략에 따른 프로젝트 관리를 한 경험이 있습니다."
                  stroke="#c084fc"
                />
                <SkillItem
                  title="Jira"
                  description="Jira로 스프린트를 계획하고, 백로그 관리, 이슈 추적을 한 경험이 있습니다."
                  stroke="#c084fc"
                />
              </ul>
            </div>
          </div>
          {/* <div className="mt-8 text-center">
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
    </div> */}
        </div>
      </div>
    </section>
  );
}
