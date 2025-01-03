import React from "react";
import pfp from "../assets/images/ethix-pfp.png";

function Content() {
  return (
    <div className="flex h-full w-full flex-col items-start max-w-lg">
      <ul className="flex flex-col gap-y-4">
        <a className="font-departureMono text-slate-200 text-xs">
          <span tabIndex={0} role="text">
            nicholasterehin@gmail.com
          </span>
        </a>
        <h1 className="font-pixelated text-slate-200 text-4xl">
          Nicholas Terehin
        </h1>
        <span className="font-pixelated text-gray-500">Brooklyn, NY</span>
        <img src={pfp} alt="" className="h-48 w-48" />
        <p className="font-departureMono text-xs text-slate-200">
          Hi, I'm Nicholas! I'm a dynamic and passionate software/web developer,
          I transitioned from Speech Pathology to Computer Science during my
          college tenure at Brooklyn College.
        </p>
        <p className="font-departureMono text-xs text-slate-200">
          I demonstrate a relentless drive for excellence and continuous skill
          enhancement, I am focused on applying my growing expertise in
          languages such as Java, HTML, JavaScript, CSS, and others.
        </p>
        <p className="font-departureMono text-xs text-slate-200">
          My goal is to innovate and contribute in the software and web
          development arenas. My journey has been marked by a deep commitment to
          learning and adapting, underscored by significant projects and
          coursework that exhibit my capabilities in both collaborative and
          independent settings.
        </p>
        <p className="font-departureMono text-xs text-slate-200">
          I am eager to bring a unique blend of analytical skills, creative
          problem-solving, and technical acumen to a forward-thinking software
          engineering or web development team.
        </p>
        <p className="font-departureMono text-xs text-slate-200">
          Thank you for viewing my website! If what you read resonates with you,
          feel free to get in touch—I’d love to connect!
        </p>
      </ul>
    </div>
  );
}

export default Content;
