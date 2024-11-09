import React from "react";
import { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Heelo, I'm Gourab",
    "Hello, I'm Gourab",
    "Hello, I'm Gourab"
    
  ];
  
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); 
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  const getStyledText = (text) => {
    const parts = text.split("Gourab"); 
    return (
      <>
        {parts[0]}
        <span style={{ color: "green" }}>Gourab</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="transition ease duration-100">
      {getStyledText(currentText)}
    </div>
  );
};

export default TextChange;
