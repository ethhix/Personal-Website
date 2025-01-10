import React from "react";
import ScrambleAnchor from "../ScrambleAnchor";

function Header() {
  return (
    <header className="flex flex-wrap gap-x-6 text-slate-200">
      <ScrambleAnchor text="[ethix.dev]" to="/" />
      <ScrambleAnchor text="[experience]" to="/experience" />
      <ScrambleAnchor text="[projects]" to="/projects" />
    </header>
  );
}

export default Header;
