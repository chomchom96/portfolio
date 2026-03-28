import { HiQuestionMarkCircle } from "react-icons/hi";
import SkillItem from "./SkillItem";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex justify-center bg-slate-50 px-4 py-16 text-slate-900 lg:px-8"
    >
      <div className="relative w-full max-w-6xl">
        {/* 섹션 헤더 */}
        <header className="mb-10 text-center lg:text-left">
          <p className="mb-2 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium tracking-tight text-indigo-700">
            <HiQuestionMarkCircle className="mr-1" />
            제가 다루는 기술 스택과 강점입니다.
          </p>
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Skills
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                프론트엔드를 중심으로, 웹 UI와 협업 도구까지 실무에서 사용한
                기술들입니다.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                React · Next.js 중심의 프론트엔드
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                TailwindCSS 기반 UI 구현
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                Git · Jira로 협업과 일정 관리
              </span>
            </div>
          </div>
        </header>

        {/* 스킬 그리드 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Frontend */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 sm:text-2xl">
                Frontend
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                SPA·SSR 경험과 상태 관리, 타입 안정성을 중심으로 합니다.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm sm:text-base md:flex-col">
              <SkillItem
                title="React"
                description="React Hook과 커스텀 훅으로 상태/로직을 분리해 재사용 가능한 UI를 설계합니다. Zustand를 이용해 전역 상태를 관리한 경험이 있습니다."
                stroke="#22d3ee"
              />
              <SkillItem
                title="Next.js"
                description="SSR/SSG를 활용해 초기 로딩 성능과 SEO를 고려한 프로젝트를 구현한 경험이 있습니다."
                stroke="#22d3ee"
              />
              <SkillItem
                title="Vue.js"
                description="Vue lifecycle과 컴포넌트 패턴을 이해하고, SPA를 직접 설계/구현한 경험이 있습니다."
                stroke="#22d3ee"
              />
              <SkillItem
                title="JavaScript (ES6+)"
                description="비구조화 할당, async/await 등 ES6+ 문법과 클로저/스코프 개념에 익숙합니다."
                stroke="#22d3ee"
              />
              <SkillItem
                title="TypeScript"
                description="유니온/제네릭 타입을 활용해 런타임 전에 오류를 줄이고, 컴포넌트 props를 타입으로 관리합니다."
                stroke="#22d3ee"
              />
            </ul>
            <p className="mt-2 text-xs text-cyan-800 sm:text-[0.8rem]">
              주로 React + Next.js 조합으로 프로젝트를 진행하며, UI 상태와 서버
              데이터 흐름을 분리해 설계하는 것에 익숙합니다.
            </p>
          </div>

          {/* Web & Styling */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 sm:text-2xl">
                Web &amp; Styling
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                정보 구조를 먼저 생각하고, 그 위에 일관된 UI 스타일을 쌓습니다.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm sm:text-base md:flex-col">
              <SkillItem
                title="HTML/CSS"
                description="시맨틱 마크업과 반응형 레이아웃을 고려해 구조를 잡고, Flex/Grid를 활용해 레이아웃을 설계합니다."
                stroke="#c084fc"
              />
              <SkillItem
                title="TailwindCSS"
                description="공통 색상·폰트·spacing을 테마로 관리하고, breakpoint를 활용해 모바일/데스크탑 UI를 통일감 있게 구성합니다."
                stroke="#c084fc"
              />
              <SkillItem
                title="Figma"
                description="간단한 와이어프레임과 컴포넌트를 제작하고, 인터랙션을 미리 정의해 개발 전 화면 흐름을 맞춰본 경험이 있습니다."
                stroke="#c084fc"
              />
            </ul>
            <p className="mt-2 text-xs text-purple-800 sm:text-[0.8rem]">
              화면을 먼저 예쁘게 만드는 것보다, 사용자 플로우와 정보 구조를
              고민한 뒤 스타일을 입히는 방식을 선호합니다.
            </p>
          </div>

          {/* Collaboration */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div>
              <h3 className="text-xl font-semibold text-rose-700 sm:text-2xl">
                Collaboration
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                작은 팀에서도, 도구를 활용해 흐름을 맞추는 것을 중요하게
                생각합니다.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm sm:text-base md:flex-col">
              <SkillItem
                title="Git"
                description="Git flow 전략을 기반으로 feature 브랜치 개발, 코드 리뷰, 머지를 경험했습니다. GitLab을 이용해 MR 중심으로 협업했습니다."
                stroke="#fb7185"
              />
              <SkillItem
                title="Jira"
                description="스프린트 계획, 이슈 상태 관리, 백로그 정리를 통해 팀의 업무 흐름을 시각화하고 관리한 경험이 있습니다."
                stroke="#fb7185"
              />
            </ul>
            <p className="mt-2 text-xs text-rose-800 sm:text-[0.8rem]">
              도구를 쓰는 것에 그치지 않고, 이슈 템플릿·라벨 등의 규칙을 맞춰
              팀이 같은 언어로 대화할 수 있게 만드는 것에 관심이 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
