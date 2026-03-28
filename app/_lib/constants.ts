import type { Skill, SkillCategory, Project, StatCard } from "./types";

export const SKILLS: Skill[] = [
  {
    name: "React",
    claim: "Custom hook으로 서버 상태와 UI 상태를 분리해 설계합니다.",
    category: "frontend",
    relatedProject: "ai-canvas",
  },
  {
    name: "TypeScript",
    claim: "제네릭과 유니온 타입으로 컴포넌트 경계를 명확히 합니다.",
    category: "frontend",
    relatedProject: "target",
  },
  {
    name: "Next.js",
    claim: "SSR/SSG 전략을 상황에 맞게 선택해 적용한 경험이 있습니다.",
    category: "frontend",
    relatedProject: "target",
  },
  {
    name: "Redux · Saga",
    claim: "복합 비동기 흐름과 히스토리 상태를 미들웨어로 설계했습니다.",
    category: "state",
    relatedProject: "ai-canvas",
  },
  {
    name: "Vue.js",
    claim: "lifecycle과 컴포넌트 패턴을 이해하고 SPA를 구현했습니다.",
    category: "frontend",
    relatedProject: "mokkoji",
  },
  {
    name: "Canvas API",
    claim: "노드 그래프, 헬퍼라인 등 커스텀 렌더링을 직접 구현합니다.",
    category: "frontend",
    relatedProject: "ai-canvas",
  },
  {
    name: "styled-components",
    claim: "테마 기반 토큰으로 일관된 스타일 시스템을 유지합니다.",
    category: "styling",
    relatedProject: "ai-canvas",
  },
  {
    name: "TailwindCSS",
    claim: "breakpoint와 arbitrary value를 조합해 빠르게 UI를 구성합니다.",
    category: "styling",
    relatedProject: "target",
  },
  {
    name: "Git",
    claim: "Git flow 기반 브랜치 전략과 코드 리뷰 경험이 있습니다.",
    category: "tools",
  },
  {
    name: "AI 툴 활용",
    claim: "Cursor, Claude 등으로 빠르게 검증하고 완성도를 높입니다.",
    category: "tools",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Core",
    icon: "⚡",
    items: ["HTML / CSS", "JavaScript (ES6+)", "TypeScript", "반응형 웹 디자인"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "🧩",
    items: ["React", "Next.js", "Vue.js", "TailwindCSS"],
  },
  {
    id: "state",
    title: "State Management",
    icon: "🔄",
    items: ["Redux / Redux-Saga", "Zustand", "Pinia"],
  },
  {
    id: "rendering",
    title: "Canvas & Rendering",
    icon: "🎨",
    items: ["Canvas API", "styled-components", "Framer Motion", "SVG 애니메이션"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "🛠",
    items: ["Git / GitHub", "Figma", "Jira", "AI 툴 (Cursor · Claude)"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-canvas",
    title: "AI Canvas",
    period: "2025.12 – 현재",
    summary:
      "AI 자동화 플랫폼 AI Canvas의 노드 개발, 편의성 기능 및 배포 전용 대시보드를 개발합니다.",
    bullets: [
      "Redux-Saga와 Reducer를 조합해 Ctrl+Z/Y 히스토리를 설계했습니다. 컴포넌트 종류별, 배치 선택, 실행 결과 등 복합 케이스를 각각 대응하는 스냅샷 구조입니다.",
      "노드 목록/카테고리 UI 추가 및 React.memo, useRef로 불필요한 리렌더링을 제거했습니다.",
      "노드 정렬 시 Figma 스타일의 헬퍼라인을 Canvas API로 시각화하고 Redux 상태와 실시간 연동합니다.",
    ],
    tags: ["React", "Redux", "Redux-Saga", "styled-components", "Canvas API"],
  },
  {
    id: "target",
    title: "TARGET",
    period: "2023.04 – 2023.05",
    award: "SSAFY 우수상",
    summary:
      "팀원 역량 데이터를 시각화하는 매칭 플랫폼입니다.",
    bullets: [
      "Figma 디자인 전담 및 사용자 프로필 검색·필터 UI를 구현했습니다.",
      "Recharts로 레이더 차트, 히스토그램 등 데이터 시각화를 구현했습니다.",
      "Zustand로 복잡한 필터 조합 상태를 전역 관리했습니다.",
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "Recharts"],
  },
  {
    id: "mokkoji",
    title: "모꼬지",
    period: "2023.01 – 2023.02",
    award: "SSAFY 우수상",
    summary:
      "화상 미팅 기반 모임 플랫폼입니다.",
    bullets: [
      "전체 UI 디자인 및 로그인·프로필 화면을 구현했습니다.",
      "Pinia로 JWT 토큰 기반 인증 상태를 관리했습니다.",
      "OpenVidu를 연동해 화상 연결 기능을 구현했습니다.",
    ],
    tags: ["Vue.js", "Pinia", "TailwindCSS", "OpenVidu"],
  },
];

export const STAT_CARDS: StatCard[] = [
  { value: 15, suffix: "개월", label: "총 개발 경험" },
  { value: 55, label: "블로그 포스트" },
  { value: 99, label: "Lighthouse 점수" }, // 배포 후 실측값으로 업데이트
];

export const LINKS = {
  github: "https://github.com/chomchom96",
  velog: "https://velog.io/@error_io",
  email: "cyy8071@gmail.com",
} as const;
