import React from "react";

function Footer() {
  return (
    <div className="flex flex-row-reverse flex-wrap gap-x-4 text-slate-200 text-base">
      <a href="https://linkedin.com/in/nicholasterehin">
        <span tabIndex={0} role="text" className="font-pixelated">
          [linkedin]
        </span>
      </a>
      <a href="https://github.com/ethhix">
        <span tabIndex={0} role="text" className="font-pixelated">
          [github]
        </span>
      </a>
    </div>
  );
}

export default Footer;
