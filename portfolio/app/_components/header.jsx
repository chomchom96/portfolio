"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    setIsVisible(scrollY > 0);

    const sectionIndex = Math.round(scrollY / viewportHeight);
    const sections = ["", "about", "skills", "projects", "contact"];
    setActiveSection(sections[sectionIndex] || "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const baseButtonClass = "text-slate-600 text-sm underline-offset-4 p-2 rounded-xl transition-all duration-200 hover:text-white hover:no-underline";

  return (
    <header className={`w-full flex flex-row justify-end gap-1 p-2 fixed z-10 bg-white bg-opacity-80 font-light ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <button 
        className={`${baseButtonClass} ${activeSection === "about" ? "bg-blue-500 cursor-default text-white" : "hover:bg-blue-500"}`}
        onClick={() => scrollToSection("about")}
        disabled={activeSection === "about"}
      >
        About me
      </button>
      <button 
        className={`${baseButtonClass} ${activeSection === "skills" ? "bg-cyan-500 cursor-default text-white" : "hover:bg-cyan-500"}`}
        onClick={() => scrollToSection("skills")}
        disabled={activeSection === "skills"}
      >
        Skills
      </button>
      <button 
        className={`${baseButtonClass} ${activeSection === "projects" ? "bg-indigo-500 cursor-default text-white" : "hover:bg-indigo-500"}`}
        onClick={() => scrollToSection("projects")}
        disabled={activeSection === "projects"}
      >
        Projects
      </button>
      <button 
        className={`${baseButtonClass} ${activeSection === "contact" ? "bg-green-500 cursor-default text-white" : "hover:bg-green-500"}`}
        onClick={() => scrollToSection("contact")}
        disabled={activeSection === "contact"}
      >
        Contact
      </button>
    </header>
  );
}