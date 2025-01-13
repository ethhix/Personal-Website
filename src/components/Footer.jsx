import React from "react";
import ScrambleAnchor from "../ScrambleAnchor";

function Footer() {
  return (
    <div className="flex flex-row-reverse flex-wrap gap-x-4 text-slate-200 text-base">
      <ScrambleAnchor
        text={"[linkedin]"}
        to={"https://linkedin.com/in/nicholasterehin"}
        className={
          "transition duration-500 hover:bg-slate-200 hover:text-black"
        }
      />
      <ScrambleAnchor
        text={"[github]"}
        to={"https://github.com/ethhix"}
        className={
          "transition duration-500 hover:bg-slate-200 hover:text-black"
        }
      />
    </div>
  );
}

export default Footer;
