import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, isFlipped, onClick }) {
  return (
    <div className="w-[60vw] mx-auto h-full perspective-1000" onClick={onClick}>
      <motion.div
        className="w-full h-full relative transition-transform duration-200 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.3 }} // Change this line

      >
        {/* Front of the card */}
        <div className="w-full h-full absolute backface-hidden bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-1/2 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="w-full h-full absolute backface-hidden transform rotate-y-180 bg-white">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              {project.title} - Details
            </h3>
            <p>{project.extraDescription}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
