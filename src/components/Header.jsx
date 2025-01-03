import React from "react";

function Header() {
  return (
    <div className="flex flex-wrap gap-x-4 text-slate-200">
      <a href="">
        <span tabIndex={0} role="text" className="font-pixelated">
          [ethix.dev]
        </span>
      </a>
      <a href="">
        <span tabIndex={0} role="text" className="font-pixelated">
          [experience]
        </span>
      </a>
      <a href="">
        <span tabIndex={0} role="text" className="font-pixelated">
          [projects]
        </span>
      </a>
    </div>
  );
}

export default Header;
