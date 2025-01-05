import React from "react";
import ScrambleAnchor from "../ScrambleAnchor";

function Header() {
  return (
    <div className="flex flex-wrap gap-x-6 text-slate-200">
      <ScrambleAnchor text="[ethix.dev]" />
      <ScrambleAnchor text="[experience]" />
      <ScrambleAnchor text="[projects]" />
    </div>
  );
}

export default Header;
