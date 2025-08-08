import React, { useState, useEffect } from 'react';

const TypewriterWithStatic = ({
  staticWord = "creative",
  dynamicWords = ["developer", "engineer", "editor"],
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 1500,
  loop = true,
  cursor = "_",
  cursorBlink = true,
  staticColor = "text-white-200",
  dynamicColor = "text-yellow-300",
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = dynamicWords[wordIndex];

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else {
      if (!isDeleting && loop) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else if (isDeleting) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % dynamicWords.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, dynamicWords, typeSpeed, deleteSpeed, delay, loop]);

  const cursorStyle = {
    display: 'inline-block',
    marginLeft: 2,
    animation: cursorBlink ? 'blink 1s steps(2, start) infinite' : undefined,
  };

  return (
    <span>
      <span className={staticColor}>{staticWord}</span>{' '}
      <span className={dynamicColor}>{text}</span>
      <span style={cursorStyle}>{cursor}</span>
      <style>
        {`@keyframes blink { to { opacity: 0; } }`}
      </style>
    </span>
  );
};

export default TypewriterWithStatic;
