import React from "react";
import ScrambleParagraph from "../ScrambleParagraph";
import ScrambleTitle from "../ScrambleTitle";
import ScrambleAnchor from "../ScrambleAnchor";
import pfp from "../assets/images/ethix-pfp.png";
import Certifications from "../components/Certifications";
import CourseSubjectTag from "../components/CourseSubjectTag";
import '../Certifications.css';

function Experiences() {
  return (
    <div className="transition-all duration-500 ease-in-out w-full md:max-w-3xl">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <ScrambleTitle
            text="Nicholas Terehin"
            textSize={"text-3xl font-bold"}
          />
          <Certifications/>
          <div>
            <ScrambleParagraph
              text="Software Engineer, Web Developer"
              hoverEffect={false}
              className="text-slate-400"
            />
            <span className="font-departureMono text-gray-400 text-xs font-bold">
              Brooklyn, NY
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            <ScrambleAnchor
              text="[email]"
              to="mailto:nicholasterehin@gmail.com"
              className="hover:text-slate-300 text-slate-400 text-sm text-left"
            />
            <ScrambleAnchor
              text={"[github]"}
              to={"https://github.com/ethhix"}
              className={
                "hover:text-slate-300 text-slate-400 text-sm text-left"
              }
            />
            <ScrambleAnchor
              text={"[linkedin]"}
              to={"https://linkedin.com/in/nicholasterehin"}
              className={
                "hover:text-slate-300 text-slate-400 text-sm text-left"
              }
            />
          </div>
        </div>
        <img
          src={pfp}
          alt=""
          className="w-24 h-24 sm:w-36 sm:h-36 object-cover"
        />
      </div>

      <article className="mt-8">
        <section className="flex flex-col">
  <h2 className="font-departureMono text-xl sm:text-2xl font-bold text-slate-200">
    Education
  </h2>
  <div className="mt-4 flex flex-col gap-6">
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-departureMono text-lg sm:text-xl font-bold text-slate-400">
          Per Scholas
        </h3>
        <p className="font-departureMono text-xs sm:text-sm text-slate-400">
          Feb 2026 - Jun 2026
        </p>
      </div>
      <p className="font-departureMono text-sm font-light text-slate-400">
        Cybersecurity Analyst Certification Program
      </p>
      <div className="flex flex-wrap justify-start gap-1.5 py-2 sm:flex">
        <CourseSubjectTag subject={"Security Operations Center"} />
        <CourseSubjectTag subject={"Threat Detection and Analysis"} />
        <CourseSubjectTag subject={"Incident Response"} />
        <CourseSubjectTag subject={"Security Monitoring"} />
        <CourseSubjectTag subject={"Alert Triage"} />
        <CourseSubjectTag subject={"Splunk"} />
        <CourseSubjectTag subject={"Security Incident & Event Management"} />
        <CourseSubjectTag subject={"Generative AI in Security Workflows"} />
        <CourseSubjectTag subject={"Network Security"} />
        <CourseSubjectTag subject={"Network Defense"} />
        <CourseSubjectTag subject={"Secure Device Configuration"} />
        <CourseSubjectTag subject={"Virtualization Technologies"} />
        <CourseSubjectTag subject={"Firewalls"} />
        <CourseSubjectTag subject={"Digital Forensics"} />
        <CourseSubjectTag subject={"Cyber Threat Intelligence (CTI)"} />
        <CourseSubjectTag subject={"Cybersecurity Frameworks & Policies"} />
        <CourseSubjectTag
          subject={"Governance, Risk Management, and Compliance (GRC)"}
        />
        <CourseSubjectTag subject={"Vulnerability Management"} />
        <CourseSubjectTag subject={"Security Analysis"} />
        <CourseSubjectTag subject={"Log Analysis"} />
        <CourseSubjectTag subject={"Data Analysis"} />
        <CourseSubjectTag subject={"Threat Management"} />
        <CourseSubjectTag subject={"Cyber Defense"} />
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-departureMono text-lg sm:text-xl font-bold text-slate-400">
          Brooklyn College
        </h3>
        <p className="font-departureMono text-xs sm:text-sm text-slate-400">
          Sep 2019 - May 2024
        </p>
      </div>
      <p className="font-departureMono text-sm font-light text-slate-400">
        Bachelors Degree in Computer Science (GPA: 3.4)
      </p>
      <div className="flex flex-wrap justify-start gap-1.5 py-2 sm:flex">
        <CourseSubjectTag subject={"Discrete Structures and Algorithms"} />
        <CourseSubjectTag subject={"Data Tools and Algorithms"} />
        <CourseSubjectTag subject={"Data Structures"} />
        <CourseSubjectTag subject={"Java Object Oriented Programming"} />
        <CourseSubjectTag
          subject={"Development of Large-Scale Applications"}
        />
        <CourseSubjectTag subject={"Introduction to Python"} />
        <CourseSubjectTag subject={"Programming Paradigms in C++"} />
        <CourseSubjectTag subject={"Analysis of Algorithms"} />
        <CourseSubjectTag subject={"Operating Systems"} />
        <CourseSubjectTag subject={"Computer Architecture"} />
        <CourseSubjectTag
          subject={"Introduction to Modern Programming Techniques"}
        />
        <CourseSubjectTag subject={"Human Computer Interaction"} />
        <CourseSubjectTag
          subject={"Introduction to Multimedia Programming"}
        />
      </div>
    </div>
  </div>
</section>
        <section className="flex flex-col">
          <h2 className="font-departureMono text-2xl font-bold text-slate-200 mt-8">
            Experience
          </h2>
          <br />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-departureMono text-xl font-bold text-slate-400 leading-none">
                  Nexevu Digital Marketing
                </h3>
                <CourseSubjectTag subject={"Brooklyn, NY"} />
              </div>
              <p className="font-departureMono text-sm font-light text-slate-400 leading-none">
                Jun 2024 - Jan 2025
              </p>
            </div>
            <p className="font-departureMono text-sm font-light text-slate-400">
              Web Development & SEO Management Intern
            </p>
            <span className="font-departureMono text-sm font-light text-slate-300 text-wrap">
              Recommendation Letter:
              <a
                href="https://tinyurl.com/4rhwzdc4"
                className="underline break-all"
                target="_blank"
              >
                https://tinyurl.com/4rhwzdc4
              </a>
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <ScrambleParagraph
                  text={`· Developed 8+ WordPress landing pages with Elementor for client campaigns, optimizing layout and navigation to
                  enhance user experience.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Performed unit testing across 5+ browsers and devices, ensuring high-quality, reliable web solutions for a diverse
                  client base.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Implemented SEO strategies with SEMRush, increasing site rankings and organic traffic by 15% during internship.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Collaborated with a cross-functional marketing team to design and execute digital campaigns, supporting
                  company objectives and effectiveness.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Supported site-reliability engineering by monitoring uptime and load metrics for 12+ WordPress sites, reducing
                  downtime by 20% overall.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Reduced client defects by 25% over 3 months by debugging 8+ WordPress sites with Chrome DevTools and WP Debug tools.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
            </ul>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-departureMono text-xl font-bold text-slate-400 leading-none">
                   CenterLight Health System
                </h3>
                <CourseSubjectTag subject={"Brooklyn, NY"} />
              </div>
              <p className="font-departureMono text-sm font-light text-slate-400 leading-none">
                 June 2018 - August 2018
              </p>
            </div>
            <p className="font-departureMono text-sm font-light text-slate-400">
              Healthcare Support Assistant
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <ScrambleParagraph
                  text={`· Adjusted activity plans and facilitated daily activities for 30+ patients with varying 
                  abilities and interests, improving engagement and satisfaction.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Maintained and organized 200+ physical and digital patient records, ensuring accuracy, 
                  compliance, and efficient retrieval for care teams.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Coordinated with management to assess patient needs, implement improvements, 
                  and complete tasks in a fast-paced healthcare environment.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Created and managed documents and spreadsheets in Microsoft Word and Excel 
                  to support operations and meet regulatory standards.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
              </li>
              <li>
                <ScrambleParagraph
                  text={`· Communicated professionally with patients, families, and staff to provide information, direct inquiries, 
                  and support a positive care environment.`}
                  hoverEffect={false}
                  className={"text-slate-300 text-sm"}
                />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="font-departureMono text-xl sm:text-2xl font-bold text-slate-200">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1.5 py-4">
            <CourseSubjectTag subject={"JavaScript"} />
            <CourseSubjectTag subject={"HTML"} />
            <CourseSubjectTag subject={"CSS"} />
            <CourseSubjectTag subject={"Git"} />
            <CourseSubjectTag subject={"GitHub"} />
            <CourseSubjectTag subject={"React"} />
            <CourseSubjectTag subject={"Java"} />
            <CourseSubjectTag subject={"C++"} />
            <CourseSubjectTag subject={"Node.js"} />
            <CourseSubjectTag subject={"MySQL"} />
            <CourseSubjectTag subject={"PHP"} />
            <CourseSubjectTag subject={"Bootstrap"} />
            <CourseSubjectTag subject={"Tailwind"} />
            <CourseSubjectTag subject={"AJAX"} />
            <CourseSubjectTag subject={"JavaFX"} />
            <CourseSubjectTag subject={"VSCode"} />
            <CourseSubjectTag subject={"Visual Studio Code"} />
            <CourseSubjectTag subject={"Eclipse"} />
            <CourseSubjectTag subject={"WordPress"} />
            <CourseSubjectTag subject={"Search Engine Optimization (SEO)"} />
          </div>
        </section>
      </article>
    </div>
  );
}

export default Experiences;
