import React from "react";
import ScrambleText from "../ScrambleText";

function Footer() {
  return (
    <div className="flex flex-row-reverse flex-wrap gap-x-4 text-slate-200 text-base">
      <ScrambleText
        text={"[linkedin]"}
        href={"https://linkedin.com/in/nicholasterehin"}
      />
      <ScrambleText text={"[github]"} href={"https://github.com/ethhix"} />
    </div>
  );
}

export default Footer;
