"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./projectCard";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "Short description of Project 1",
      extraDescription: "Detailed information about Project 1...",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Project 2",
      description: "Short description of Project 2",
      extraDescription: "Detailed information about Project 2...",
      image: "/path/to/image2.jpg",
    },
    {
      title: "Project 3",
      description: "Short description of Project 3",
      extraDescription: "Detailed information about Project 3...",
      image: "/path/to/image3.jpg",
    },
  ];

  const nextProject = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <>
      <div className="w-4/5 h-4/5 relative mx-auto mt-10">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <ProjectCard
              project={projects[currentIndex]}
              isFlipped={isFlipped}
              onClick={() => setIsFlipped(!isFlipped)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
        onClick={prevProject}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
        onClick={nextProject}
      >
        →
      </button>
    </>
  );
};

export default ProjectSection;
