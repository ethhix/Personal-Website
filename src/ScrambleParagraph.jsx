import React, { useState, useEffect } from "react";

const ScrambleParagraph = ({ text, hoverEffect }) => {
  const [displayText, setDisplayText] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  const scrambleEffect = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iterations = 0;

    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setDisplayText(
        text
          .split(" ")
          .map((word) =>
            word
              .split("")
              .map((char, index) => {
                if (index < iterations) {
                  return char;
                }
                return characters[
                  Math.floor(Math.random() * characters.length)
                ];
              })
              .join("")
          )
          .join(" ")
      );

      if (
        iterations >= Math.max(...text.split(" ").map((word) => word.length))
      ) {
        clearInterval(newIntervalId);
        setDisplayText(text);
      }

      iterations += 0.4;
    }, 30);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    scrambleEffect();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <p
        onMouseEnter={hoverEffect ? () => scrambleEffect() : undefined}
        className="font-departureMono text-slate-200 text-xs break-words"
      >
        {displayText}
      </p>
    </div>
  );
};

export default ScrambleParagraph;
