import React from "react";
import ScrambleAnchor from "../ScrambleAnchor";

function Header() {
  return (
    <header className="flex flex-wrap gap-x-6 text-slate-200">
      <ScrambleAnchor
        text="[ethix.dev]"
        to="/"
        className={
          "transition duration-500 hover:bg-slate-200 hover:text-black"
        }
      />
      <ScrambleAnchor
        text="[experience]"
        to="/experience"
        className={
          "transition duration-500 hover:bg-slate-200 hover:text-black"
        }
      />
      <ScrambleAnchor
        text="[projects]"
        to="/projects"
        className={
          "transition duration-500 hover:bg-slate-200 hover:text-black"
        }
      />
    </header>
  );
}

export default Header;
