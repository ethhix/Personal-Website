import React from "react";
import ScrambleText from "../ScrambleText";

function Header() {
  return (
    <div className="flex flex-wrap gap-x-6 text-slate-200">
      <ScrambleText text="[ethix.dev]" />
      <ScrambleText text="[experience]" />
      <ScrambleText text="[projects]" />
    </div>
  );
}

export default Header;
