"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TypingEffectProps {
  text: string;
  duration?: number;
  typingMode?: "character" | "word" | "chunk";
  className?: string;
  chunkSize?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  duration = 2000,
  typingMode = "character",
  className = "",
  chunkSize = 5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [textContent, setTextContent] = useState<React.ReactNode[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const typeText = async () => {
    let currentTextContent: React.ReactNode[] = [];
    let textIndex = 0;
    const paragraphs = text.split("\n"); // Handle new lines

    for (const paragraph of paragraphs) {
      if (textIndex > 0) {
        currentTextContent.push(<br key={`br-${textIndex}`} />);
      }

      if (typingMode === "character") {
        const delay = Math.max(5, duration / text.length);
        for (const char of paragraph) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          currentTextContent.push(<span key={`char-${textIndex}`}>{char}</span>);
          setTextContent([...currentTextContent]);
          textIndex++;
        }
      } else if (typingMode === "word") {
        const words = paragraph.split(" ");
        const delay = Math.max(20, duration / words.length);
        for (const word of words) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          currentTextContent.push(<span key={`word-${textIndex}`}>{word} </span>);
          setTextContent([...currentTextContent]);
          textIndex++;
        }
      } else {
        const chars = paragraph.split("");
        let i = 0;
        const chunkCount = Math.ceil(chars.length / chunkSize);
        const delay = Math.max(10, duration / chunkCount);
        while (i < chars.length) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          const chunk = chars.slice(i, i + chunkSize).join("");
          currentTextContent.push(<span key={`chunk-${textIndex}`}>{chunk}</span>);
          setTextContent([...currentTextContent]);
          i += chunkSize;
          textIndex++;
        }
      }
    }

    setIsComplete(true);
  };

  useEffect(() => {
    if (isInView && !isComplete) {
      typeText();
    }
  }, [isInView]);

  return (
    <span ref={ref} className={className}>
      {textContent}
      {!isComplete && (
        <motion.span
          className="inline-block w-2 h-5 bg-indigo-500 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
        />
      )}
    </span>
  );
};

export default TypingEffect;