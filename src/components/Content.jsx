import React from "react";
import pfp from "../assets/images/ethix-pfp.png";
import ScrambleTitle from "../ScrambleTitle";
import ScrambleParagraph from "../ScrambleParagraph";
function Content() {
  return (
    <div className="transition-all duration-500 ease-in-out w-full max-w-lg mx-auto">
      <div className="flex flex-col gap-y-4 w-full">
        <ScrambleTitle
          text={"Nicholas Terehin"}
          textSize={"text-2xl sm:text-3xl font-bold"}
        />
        <a href="mailto:nicholasterehin@gmail.com">
          <ScrambleParagraph
            text={"nicholasterehin@gmail.com"}
            hoverEffect={true}
            className={"text-slate-200 text-xs sm:text-sm"}
          />
        </a>
        <span className="font-departureMono text-gray-400 text-xs sm:text-sm font-bold">
          Brooklyn, NY
        </span>
        <img src={pfp} alt="Nicholas Terehin" className="h-48 w-48" />
        <ScrambleParagraph
          text={
            "Hi, I’m Nicholas! I’m focused on IT support and cybersecurity. I started college studying speech pathology, switched to computer science, and earned my BS from Brooklyn College. More recently, I completed the Cybersecurity Analyst program at Per Scholas."
          }
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={
            "I hold the CompTIA CySA+ and Splunk Core Certified User certifications, and I keep building hands on skills in my home lab, working with log analysis, network defense, and threat detection."
          }
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={
            "Before moving into security, I spent a year as a web development intern, building and troubleshooting WordPress sites for clients. I’ve also built full stack projects on my own, including a recipe sharing site with PHP and MySQL and a Chrome extension that pulls live game data from APIs through a Node.js server, along with object oriented projects in Java. That background helps me troubleshoot problems step by step and automate repetitive tasks."
          }
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={
            "Between my internship and a healthcare support role, I’ve learned to work well with a team and explain technical things in plain language, which matters as much as the technical skills in IT."
          }
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={
            "I’m looking for an IT support, help desk, or SOC analyst role where I can keep learning and help people solve their tech problems."
          }
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
        <ScrambleParagraph
          text={
            "Thanks for visiting! Feel free to reach out, I’d love to connect."
          }
          hoverEffect={false}
          className={"text-slate-200 text-sm"}
        />
      </div>
    </div>
  );
}

export default Content;
