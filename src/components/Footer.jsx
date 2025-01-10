import React from "react";
import ScrambleAnchor from "../ScrambleAnchor";

function Footer() {
  return (
    <div className="flex flex-row-reverse flex-wrap gap-x-4 text-slate-200 text-base">
      <ScrambleAnchor
        text={"[linkedin]"}
        to={"https://linkedin.com/in/nicholasterehin"}
      />
      <ScrambleAnchor text={"[github]"} to={"https://github.com/ethhix"} />
    </div>
  );
}

export default Footer;
