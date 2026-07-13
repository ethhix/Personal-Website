import React from "react";
import pfp from "../assets/images/ethix-pfp.png";
import ScrambleTitle from "../ScrambleTitle";
import ScrambleParagraph from "../ScrambleParagraph";
function Content() {
  return (
    <div className="transition-all duration-500 ease-in-out w-full max-w-lg mx-auto">
      <ul className="flex flex-col gap-y-4 w-full">
        <ScrambleTitle
          text={"Nicholas Terehin"}
          textSize={"text-2xl sm:text-3xl font-bold"}
        />
        <ScrambleParagraph
          text={"nicholasterehin@gmail.com"}
          hoverEffect={true}
          className={"text-slate-200 text-xs sm:text-sm"}
        />
        <span className="font-departureMono text-gray-400 text-xs sm:text-sm font-bold">
          Brooklyn, NY
        </span>
        <img src={pfp} alt="" className="h-48 w-48" />
        <ScrambleParagraph
            text={`Hi, I'm Nicholas! I'm a cybersecurity analyst based in Brooklyn, NY.
            I started college studying speech pathology, then switched into computer
            science, and more recently completed a hands-on Cybersecurity Analyst
            program with Per Scholas.`}
            hoverEffect={false}
            className={"text-slate-200 text-sm"}
          />
          <ScrambleParagraph
            text={`I hold CompTIA CySA+ and Splunk Core Certified User certifications,
            and I've built hands-on experience through a home lab and independent
            security projects—developing practical skills in threat detection, log
            analysis, incident response workflows, and network defense along the way.`}
            hoverEffect={false}
            className={"text-slate-200 text-sm"}
          />
          <ScrambleParagraph
            text={`Before the shift into security, I built a solid foundation in software
            and web development, working with Java, JavaScript, Python, and full-stack
            tools. That background comes in handy now, whether I'm scripting a log
            parser, automating a task, or just thinking through a problem methodically.`}
            hoverEffect={false}
            className={"text-slate-200 text-sm"}
          />
          <ScrambleParagraph
            text={`I'm looking to bring that mix of analytical thinking and technical
            background to an entry-level SOC analyst or cybersecurity role, where I can
            keep learning and contribute from day one.`}
            hoverEffect={false}
            className={"text-slate-200 text-sm"}
          />
          <ScrambleParagraph
            text={`Thank you for viewing my website! If what you read resonates with you,
            feel free to get in touch—I'd love to connect!`}
            hoverEffect={false}
            className={"text-slate-200 text-sm"}
          />
      </ul>
    </div>
  );
}

export default Content;
