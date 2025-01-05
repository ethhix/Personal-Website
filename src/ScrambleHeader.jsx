import React, { useState, useEffect } from "react";

const ScrambleHeader = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  const ScrambleHeader = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iterations = 0;

    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return char;
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(newIntervalId);
        setDisplayText(text);
      }

      iterations += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  return (
    <h1
      onMouseOver={ScrambleHeader}
      className="font-departureMono text-slate-200 text-3xl"
    >
      {displayText}
    </h1>
  );
};

export default ScrambleHeader;
