"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "TARGET",
    description:
      "삼성전자 기업연계 프로젝트로 진행한 인재풀 관리 서비스",
    period: "23.04.04 ~ 23.05.24",
    isAwarded: true,
    techStack: ["Next.js", "Typescript", "TailwindCSS", "Zustand", "Recharts"],
    whatIdid: [
      "삼성전자 인재영입팀과 연계한 인재풀 관리 서비스로, 인재 프로필을 등록 및 검색, 필터링하고 관리하는 기능이 있습니다.",
      "Next 14의 페이지 기반 라우터와 SSR 등 Next의 기능을 일부 활용했습니다.",
      "피그마와 초기 프로젝트 퍼블리싱을 했고, 프로필 검색, 목록, 필터링 등을 맡아 구현했습니다.",
      "필터 설정값을 저장 및 유지하고 access token을 관리하면서 상태관리 라이브러리인 Zustand를 활용했습니다.",
      "Rechart를 사용해 대시보드와 필터 중 그래프로 시각화한 Range selector 컴포넌트를 구현했습니다",
    ],
    image: "/target.jpg",
    link: "https://github.com/kjy0349/target_talent_management",
  },
  {
    title: "당모카",
    description: "위치기반 카페 추천 서비스",
    period: "23.02.17 ~ 23.04.03",
    isAwarded: false,
    techStack: ["React.js", "Typescript", "TailwindCSS", "framer"],
    whatIdid: [
      "현 위치와 취향테스트를 기반으로 카페를 추천받고, 리뷰 작성 및 분석을 하는 서비스입니다.",
      "공부해오던 리액트를 처음으로 프로젝트에 적용해보며 react-router와 Hook 등 기능을 숙지할 수 있었습니다.",
      "메인화면, 카페 검색, 목록, 상세, 취향테스트 등을 구현했습니다.",
      "framer 라이브러리를 사용해보며 부드러운 애니메이션을 구현하고자 했습니다.",
      "localStorage와 JS 배열 함수를 이용한 검색 이력 컴포넌트를 구현했습니다.",
      "Tailwind 사용에 익숙해지며 breakpoint를 활용한 반응형 UI를 구현하고자 했습니다."
    ],
    image: "/dangmoca.jpg",
    link: "https://github.com/chomchom96/mokkoji?tab=readme-ov-file#frontend",
  },
  {
    title: "모꼬지",
    description: "OpenVidu를 활용한 비대면 화상 모임 플랫폼",
    period: "23.01.03 ~ 23.02.16",
    isAwarded: true,
    techStack: ["Vue.js", "Pinia","TailwindCSS", "Openvidu"],
    whatIdid: [
      "Openvidu를 활용한 비대면 화상 모임 플랫폼입니다.",
      "첫 번째 팀 프로젝트를 진행하며 Git branch 전략에 따른 프로젝트 관리, Jira의 스프린트와 백로그 기능을 활용한 애자일 기법을 배웠습니다.",
      "페이지 디자인과 로그인, 마이페이지 등 사용자 기능을 맡았습니다.",
      "Pinia store로 JWT 토큰을 관리하며 로그인과 세션 유지를 구현했습니다.",
    ],
    image: "/mokkoji.png",
    link: "",
  },
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const dragConstraints = { left: -200, right: 200 };

  const handleDragEnd = (event, info) => {
    setIsFlipped(false);

    if (info.offset.x < -100) {
      setDirection(1);
      if (currentIndex < projects.length - 1) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(0);
    } else if (info.offset.x > 100) {
      setDirection(-1);
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
      else setCurrentIndex(projects.length - 1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="relative bg-slate-600">
      <h2 id="title">Projects</h2>
      <div className="flex w-full flex-col items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute cursor-grab active:cursor-grabbing"
          >
            <ProjectCard
              project={projects[currentIndex]}
              isFlipped={isFlipped}
              onClick={() => setIsFlipped(!isFlipped)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
