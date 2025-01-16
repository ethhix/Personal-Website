import React from "react";

function CourseSubjectTag({ subject }) {
  return (
    <div className="font-departureMono text-slate-400 bg-slate-700 inline-block px-2 py-1 rounded break-words">
      <span className="inline-block">{subject}</span>
    </div>
  );
}

export default CourseSubjectTag;
