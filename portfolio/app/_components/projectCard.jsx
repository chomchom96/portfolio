import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, isFlipped, onClick }) {
  return (
    <div className="perspective-1000 mx-auto h-full w-[60vw]" onClick={onClick}>
      <motion.div
        className="transform-style-3d relative h-full w-full transition-transform duration-200"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
      >
        <div className="backface-hidden absolute h-full w-full bg-white flex flex-row items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="h-1/2 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>

        <div className="backface-hidden rotate-y-180 absolute h-full w-full transform bg-white">
          <div className="p-6">
            <h3 className="mb-4 text-2xl font-bold">
              {project.title} - Details
            </h3>
            <p>{project.extraDescription}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
