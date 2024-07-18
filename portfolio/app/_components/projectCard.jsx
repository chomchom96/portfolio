import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ project, isFlipped, onClick }) {
  const [showEnlarged, setShowEnlarged] = useState(false);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setShowEnlarged(true);
  };

  return (
    <div className="perspective-1000 mx-auto h-[70vh] w-[70vw]">
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 0 : 1,
          }}
        >
          <div className="absolute inset-0 z-10 bg-black bg-opacity-40" />
          <div className="relative z-20 flex h-full w-full flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            {project.isAwarded && (
              <p className="mb-2 text-sm font-light">SSAFY 프로젝트 우수상</p>
            )}
            <p>{project.description}</p>
            <ul>
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="mr-2 mt-1 inline-block rounded-full bg-indigo-100 bg-opacity-60 px-2 py-1 text-sm text-black"
                >
                  #{tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <button
                className="rounded border-2 px-4 py-2 hover:bg-white hover:bg-opacity-10"
                onClick={onClick}
              >
                자세히보기
              </button>
              <button
                className="rounded border-2 px-4 py-2 hover:bg-white hover:bg-opacity-10"
                onClick={handleImageClick}
              >
                사진 확대
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute flex h-full w-full flex-row overflow-y-auto bg-white font-light text-black"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 1 : 0,
          }}
        >
          <div className="flex h-full w-3/4 flex-col bg-white p-8">
            <p className="mb-1 font-bold text-black">
              프로젝트 기간 : {project.period}
            </p>
            <div className="space-y-2 text-lg tracking-tighter">
              {project.whatIdid.map((text) => (
                <p>{text}</p>
              ))}
            </div>
            <div className="mt-auto">
              <button
                className="rounded border-2 border-slate-300 px-4 py-2 hover:border-slate-500 hover:bg-slate-500 hover:bg-opacity-5"
                onClick={onClick}
              >
                돌아가기
              </button>
            </div>
          </div>
          <div className="flex h-full w-1/4 flex-col items-end justify-end">
            <a href={project.link} target="_blank">
              <svg className="size-16 mr-5 mb-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>{" "}
            </a>
          </div>
        </div>
      </motion.div>

      {showEnlarged && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setShowEnlarged(false)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}
