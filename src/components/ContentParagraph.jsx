import React from "react";
import { useEffect, useState } from "react";

export default function ContentParagraph({ text }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <p
      className={`font-departureMono text-xs text-slate-200 opacity-0 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : ""
      }`}
    >
      {text}
    </p>
  );
}
