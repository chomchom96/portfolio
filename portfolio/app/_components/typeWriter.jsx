"use client";

import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    let timer;

    const typeNextChar = () => {
      if (index < text.length) {
        setDisplayText((current) => current + text.charAt(index));
        index++;
        timer = setTimeout(typeNextChar, speed);
      }
    };

    typeNextChar();

    return () => clearTimeout(timer);
  }, [text, speed]);

  return <p className="w-2/3 mx-auto">{displayText}</p>;
};

export default Typewriter;
