"use client";
import { useState, useEffect } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const baseButtonClass =
    "text-white text-base underline-offset-4 p-2 rounded-xl transition-all duration-200 hover:text-white hover:no-underline";

  return (
    <>
      <header
        className={`w-full flex flex-row justify-end gap-1 p-2 fixed z-10 bg-none font-light ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <button
          className={`${baseButtonClass} ${"hover:bg-blue-500"}`}
          onClick={() => scrollToSection("about")}
          disabled={activeSection === "about"}
        >
          About me
        </button>
        <button
          className={`${baseButtonClass} ${"hover:bg-slate-800"}`}
          onClick={() => scrollToSection("skills")}
          disabled={activeSection === "skills"}
        >
          Skills
        </button>
        <button
          className={`${baseButtonClass} ${"hover:bg-indigo-500"}`}
          onClick={() => scrollToSection("projects")}
          disabled={activeSection === "projects"}
        >
          Projects
        </button>
        <button
          className={`${baseButtonClass} ${"hover:bg-orange-600"}`}
          onClick={() => scrollToSection("contact")}
          disabled={activeSection === "contact"}
        >
          Contact
        </button>
      </header>
      {isVisible && (
        <HiArrowCircleUp
          className={`fixed bottom-4 right-4 size-10 fill-white cursor-pointer z-10`}
          onClick={scrollToTop}
        />
      )}
    </>
  );
}
