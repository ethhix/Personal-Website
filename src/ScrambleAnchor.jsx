import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScrambleAnchor = ({ text, to, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [intervalId, setIntervalId] = useState(null);

  const ScrambleAnchor = () => {
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

  useEffect(() => {
    ScrambleAnchor();
  }, []);

  return (
    <Link
      to={to}
      className={`${className}`}
      onMouseOver={ScrambleAnchor}
      style={{
        display: "inline-block",
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
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {displayText}
        </span>
      </span>
    </Link>
  );
};

export default ScrambleAnchor;
