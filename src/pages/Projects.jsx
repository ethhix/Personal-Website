import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import EventBoardImage from "../assets/images/BrooklyCollegeLogo.jpg";
import BankLogo from "../assets/images/banklogo.png";
import ScrambleTitle from "../ScrambleTitle.jsx";
import SimplyDeliciousLogo from "../assets/images/SimplyDeliciousLogo.png";
import GameScannerLogo from "../assets/images/GameScanner.png";

function Projects() {
  const projects = [
    {
      title: "GameScanner Chrome Extension",
      description: `Engineered a Chrome extension that integrates with Twitch.tv, leveraging IGDB and Steam APIs to provide real-time game information. Developed a cloud-hosted Express server with Redis caching for efficient data retrieval, implementing Chrome messaging APIs for seamless communication between client and server components. Created an intuitive hover-based interface that delivers instant access to game details, pricing, and platform availability, enhancing the Twitch browsing experience with zero-click functionality.`,
      repoUrl: "https://github.com/ethhix/GameScanner",
      image: `${GameScannerLogo}`,
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Chrome API",
      ],
      bgColor: "#1B182D",
    },
    {
      title: "B.C. Event Star",
      description: `Collaboratively designed, tested, and developed a simple interactive Brooklyn College-themed EventBoard website with a team that 
      enabled students to easily access and engage with information about campus and nearby events.`,
      repoUrl: "https://github.com/ethhix/EventBoard",
      image: `${EventBoardImage}`,
      techStack: ["HTML", "JavaScript", "CSS", "Bootstrap"],
    },
    {
      title: "Ethix Bank",
      description: `Designed and developed a banking application that allows users to create checking or savings accounts with unique account numbers. 
      Features an FXML-based interface to display balances, income, expenses, and user-added transactions, with data securely stored and retrieved from MySQL databases.`,
      repoUrl: "https://github.com/ethhix/Ethix-Bank",
      image: `${BankLogo}`,
      techStack: ["Java", "FXML", "CSS", "MySQL"],
    },
    {
      title: "SimplyDelicious Social Recipe-Sharing Website",
      description: `Developed a social recipe-sharing website to foster user interaction and community engagement. Implemented features for posting, bookmarking, commenting, 
      and voting on recipes, along with threaded discussions and a blog section. Added a filterable recipes page and a preference modal for personalized suggestions, creating a 
      dynamic platform for discovering and sharing culinary ideas.`,
      repoUrl: "https://github.com/ethhix/SimplyDelicious",
      image: `${SimplyDeliciousLogo}`,
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "PHP",
        "jQuery",
        "Bootstrap",
      ],
    },
    {
      title: "Simple Dynamic To-Do List",
      description: `Developed a dynamic to-do list web application, leveraging JavaScript for real-time task management and Bootstrap for 
responsive design, facilitating efficient daily activity tracking. `,
      repoUrl: "https://github.com/ethhix/To-Do-List",
      image: ` `,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-8xl mx-auto py-8">
        <ScrambleTitle
          text="Projects"
          textSize={"text-3xl mb-8 font-bold underline"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
