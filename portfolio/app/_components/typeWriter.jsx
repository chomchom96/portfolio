"use client"

import { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
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
        setTimeout(() => setIsDone(true), 3000);
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
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentIndex(currentIndex + 1);
      setTypingSpeed(100);
    }
  };

  return (
    <>
      <h1 className="text-center font-bold text-white text-5xl">
        {text}
        <span aria-hidden="true"></span>
      </h1>
      {isDone && (
        <button className="text-white border-white w-fit p-2 m-2 mx-auto mt-10 font-light border-[0.05rem] text-lg" onClick={() => console.log("스크롤 내리기")}>
          더 알아보기
        </button>
      )}
    </>
  );
};

export default Typewriter;
