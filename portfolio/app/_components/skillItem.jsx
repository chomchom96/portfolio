'use client'

import { useState } from 'react';

export default function SkillItem({ title, description, stroke }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className="flex items-center relative group w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="w-4 h-4 mr-2 flex-shrink-0"
        fill="none"
        stroke={stroke}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <span>{title}</span>
      {isHovered && description && (
        <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-sm rounded py-1 px-2 w-56 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {description}
        </div>
      )}
    </li>
  );
}