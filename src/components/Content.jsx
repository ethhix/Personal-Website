import React from "react";
import pfp from "../assets/images/ethix-pfp.png";
import ScrambleTitle from "../ScrambleTitle";
import ScrambleParagraph from "../ScrambleParagraph";
function Content() {
  return (
    <div className="transition-all duration-500 ease-in-out w-full max-w-lg mx-auto">
      <ul className="flex flex-col gap-y-4 w-full">
        <ScrambleTitle text={"Nicholas Terehin"} />
        <ScrambleParagraph
          text={"nicholasterehin@gmail.com"}
          hoverEffect={true}
          className={"text-slate-200 text-sm"}
        />
        <span className="font-determination text-gray-500">Brooklyn, NY</span>
        <img src={pfp} alt="" className="h-48 w-48" />
        <ScrambleParagraph
          text={`Hi, I'm Nicholas! I'm a dynamic and passionate software/web developer,
          I transitioned from Speech Pathology to Computer Science during my
          college tenure at Brooklyn College.`}
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={`I demonstrate a relentless drive for excellence and continuous skill
          enhancement, I am focused on applying my growing expertise in
          languages such as Java, HTML, JavaScript, CSS, and others.`}
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={`My goal is to innovate and contribute in the software and web
          development arenas. My journey has been marked by a deep commitment to
          learning and adapting, underscored by significant projects and
          coursework that exhibit my capabilities in both collaborative and
          independent settings.`}
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={`I am eager to bring a unique blend of analytical skills, creative
          problem-solving, and technical acumen to a forward-thinking software
          engineering or web development team.`}
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={`Thank you for viewing my website! If what you read resonates with you,
          feel free to get in touch—I’d love to connect!`}
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
      </ul>
    </div>
  );
}

export default Content;
