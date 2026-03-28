'use client'

import { useState } from 'react';

export default function SkillItem({ title, description, stroke }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="relative flex w-fit items-center gap-1 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <svg
        className="mr-1 h-4 w-4 flex-shrink-0"
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
      <span className="text-sm sm:text-base">{title}</span>
      {(description && (isHovered || isOpen)) && (
        <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-md bg-white px-3 py-2 text-xs text-black shadow-lg sm:left-full sm:top-1/2 sm:mt-0 sm:ml-2 sm:-translate-y-1/2 sm:text-sm">
          {description}
        </div>
      )}
    </li>
  );
}
