import React from "react";
import ScrambleParagraph from "../ScrambleParagraph";
import ScrambleTitle from "../ScrambleTitle";
import ScrambleAnchor from "../ScrambleAnchor";
import pfp from "../assets/images/ethix-pfp.png";
import CourseSubjectTag from "../components/CourseSubjectTag";

function Experiences() {
  return (
    <div>
      <div className="flex flex-row gap-8 flex-1 flex-wrap">
        <div className="flex flex-col gap-4">
          <ScrambleTitle text="Nicholas Terehin" />
          <div>
            <ScrambleParagraph
              text="Software Engineer, Web Developer"
              hoverEffect={false}
              className={"text-slate-400"}
            />
            <span className="font-determination text-gray-500 text-base ">
              Brooklyn, NY
            </span>
          </div>
          <div className="flex flex-row gap-2 text-wrap">
            <ScrambleAnchor
              text={"[email]"}
              to={"mailto:nicholasterehin@gmail.com"}
              className={
                "hover:text-slate-300 text-slate-400 text-sm text-left"
              }
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
        <img src={pfp} alt="" className="max-h-36 sm:max-h-36" />
      </div>
      <br />
      <article>
        <section className="flex flex-col">
          <h2 className="font-departureMono text-2xl font-bold text-slate-200 mt-8">
            Education
          </h2>
          <br />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <h3 className="font-departureMono text-xl font-bold text-slate-400 leading-none">
                Brooklyn College
              </h3>
              <p className="font-departureMono text-sm font-light text-slate-400 leading-none">
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
      </article>
    </div>
  );
}

export default Experiences;
