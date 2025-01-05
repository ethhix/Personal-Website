import React from "react";
import pfp from "../assets/images/ethix-pfp.png";
import ScrambleHeader from "../ScrambleHeader";
import ScrambleParagraph from "../ScrambleParagraph";
import ContentParagraph from "./ContentParagraph";
function Content() {
  return (
    <div className="flex h-full w-full flex-col items-start max-w-lg">
      <ul className="flex flex-col gap-y-4">
        <ScrambleHeader text={"Nicholas Terehin"} />
        <ScrambleParagraph text={"nicholasterehin@gmail.com"} />
        <span className="font-determination text-gray-500">Brooklyn, NY</span>
        <img src={pfp} alt="" className="h-48 w-48" />
        <ContentParagraph
          text={`Hi, I'm Nicholas! I'm a dynamic and passionate software/web developer,
          I transitioned from Speech Pathology to Computer Science during my
          college tenure at Brooklyn College.`}
        />
        <ContentParagraph
          text={`I demonstrate a relentless drive for excellence and continuous skill
          enhancement, I am focused on applying my growing expertise in
          languages such as Java, HTML, JavaScript, CSS, and others.`}
        />
        <ContentParagraph
          text={`My goal is to innovate and contribute in the software and web
          development arenas. My journey has been marked by a deep commitment to
          learning and adapting, underscored by significant projects and
          coursework that exhibit my capabilities in both collaborative and
          independent settings.`}
        />
        <ContentParagraph
          text={`I am eager to bring a unique blend of analytical skills, creative
          problem-solving, and technical acumen to a forward-thinking software
          engineering or web development team.`}
        />
        <ContentParagraph
          text={`Thank you for viewing my website! If what you read resonates with you,
          feel free to get in touch—I’d love to connect!`}
        />
      </ul>
    </div>
  );
}

export default Content;
