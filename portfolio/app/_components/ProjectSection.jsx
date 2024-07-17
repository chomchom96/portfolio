"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "TARGET",
    description: "Short description of Project 1",
    extraDescription: "Detailed information about Project 1...",
    image: "/target.jpg",
  },
  {
    title: "당모카",
    description: "Short description of Project 2",
    extraDescription: "Detailed information about Project 2...",
    image: "/dangmoca.jpg",
  },
  {
    title: "모꼬지",
    description: "Short description of Project 3",
    extraDescription: "Detailed information about Project 3...",
    image: "/mokkoji.jpg",
  },
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const dragConstraints = { left: -100, right: 100 };

  const handleDragEnd = (event, info) => {
    setIsFlipped(false);

    if (info.offset.x < -50) {
      setDirection(1);
      if (currentIndex < projects.length - 1) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(0);
    } else if (info.offset.x > 50) {
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
    <section
      id="projects"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-indigo-900 py-16"
    >
      <h2 id="title">
        Projects
      </h2>
      <div className="relative mx-auto h-[60vh] w-4/5">
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
            className="absolute h-full w-full cursor-grab active:cursor-grabbing"
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
