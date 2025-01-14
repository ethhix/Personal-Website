import React from "react";
import ScrambleParagraph from "../ScrambleParagraph";
import ScrambleTitle from "../ScrambleTitle";
import ScrambleAnchor from "../ScrambleAnchor";
import pfp from "../assets/images/ethix-pfp.png";
import CourseSubjectTag from "../components/CourseSubjectTag";

function Experiences() {
  return (
    <div className="transition-all duration-500 ease-in-out w-full md:max-w-3xl">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <ScrambleTitle text="Nicholas Terehin" />
          <div>
            <ScrambleParagraph
              text="Software Engineer, Web Developer"
              hoverEffect={false}
              className="text-slate-400"
            />
            <span className="font-determination text-gray-500 text-sm sm:text-base">
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
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-departureMono text-lg sm:text-xl font-bold text-slate-400">
                Brooklyn College
              </h3>
              <p className="font-departureMono text-xs sm:text-sm text-slate-400">
                2019-2024
              </p>
            </div>
            <p className="font-departureMono text-sm font-light text-slate-400">
              Bachelors Degree in Computer Science (GPA: 3.4)
            </p>
            <div className="flex flex-wrap justify-start gap-1.5 py-2 sm:flex">
              <CourseSubjectTag
                subject={"Discrete Structures and Algorithms"}
              />
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
                  ITV Digital Marketing
                </h3>
                <CourseSubjectTag subject={"Brooklyn, NY"} />
              </div>
              <p className="font-departureMono text-sm font-light text-slate-400 leading-none">
                Jun'24-Sep'24
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
              >
                https://tinyurl.com/4rhwzdc4
              </a>
            </span>
            <ScrambleParagraph
              text={`· Developed and managed WordPress landing pages using Elementor, enhancing layout, navigation, and visual appeal to improve
 user experience and effectively communicate brand messages. Demonstrated expertise in creating visually appealing and
 user-friendly designs.`}
              hoverEffect={false}
              className={"text-slate-300 text-sm"}
            />
            <ScrambleParagraph
              text={`· Conducted comprehensive unit testing to ensure cross-device and browser compatibility, maintaining high standards of
            quality. Demonstrated attention to detail and commitment to delivering robust and reliable web solutions.`}
              hoverEffect={false}
              className={"text-slate-300 text-sm"}
            />
            <ScrambleParagraph
              text={`· Implemented SEO strategies for landing pages using SEMRush, enhancing search engine visibility and site ranking through
             best practices and expertise.`}
              hoverEffect={false}
              className={"text-slate-300 text-sm"}
            />
            <ScrambleParagraph
              text={`· Collaborated with the marketing team to design and execute digital marketing campaigns, aligning with the company’s
             marketing objectives. Demonstrated strong teamwork and communication skills to enhance campaign effectiveness.`}
              hoverEffect={false}
              className={"text-slate-300 text-sm"}
            />
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
