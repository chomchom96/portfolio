"use client";

import { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const [isDone, setIsDone] = useState(false);

  const dataText = [
    "안녕하세요!",
    "프론트엔드 개발자",
    "조용운의 포트폴리오입니다.",
  ];

  useEffect(() => {
    if (currentIndex < dataText.length) {
      let timer = setTimeout(() => {
        handleType();
      }, typingSpeed);

      if (currentIndex === dataText.length - 1) {
        setTimeout(() => setIsDone(true), 1500);
      }

      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, currentIndex, typingSpeed]);

  const handleType = () => {
    const fullText = dataText[currentIndex];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 100);

    if (
      !isDeleting &&
      text === fullText &&
      currentIndex < dataText.length - 1
    ) {
      setTimeout(() => setIsDeleting(true), 650);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentIndex(currentIndex + 1);
      setTypingSpeed(200);
    }
  };

  const scrollToAboutMe = () => {
    window.scrollTo({ 
      top: 800, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  return (
    <div className="relative">
      <h1 className="text-center font-bold text-white text-5xl">
        {text}
      </h1>
      {isDone && (
        <div className="opacity-0 translate-y-4 transition-all animate-fadeIn group">
          <button
            className="absolute left-1/2 transform -translate-x-1/2 text-white border-white w-fit p-2 mx-auto mt-6 font-light border-[0.05rem] text-lg flex flex-row gap-2 items-center group-hover:bg-white group-hover:bg-opacity-10 "
            onClick={scrollToAboutMe}
          >
            더 알아보기{" "}
            <HiArrowRight className="size-4 block group-hover:rotate-90 duration-300" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Typewriter;
