import React, { useState, useEffect } from "react";

const ScrambleText = ({ text, href }) => {
  const [displayText, setDisplayText] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  const scrambleText = () => {
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
    <a
      href={href}
      className="transition duration-500 hover:bg-slate-200 hover:text-black"
      onMouseOver={scrambleText}
      style={{
        display: "inline-block",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
    >
      <span
        tabIndex={0}
        role="text"
        className="font-departureMono"
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <span style={{ visibility: "hidden" }}>{text}</span>
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {displayText}
        </span>
      </span>
    </a>
  );
};

export default ScrambleText;
