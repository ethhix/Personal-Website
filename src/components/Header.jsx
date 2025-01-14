import React from "react";
import ScrambleAnchor from "../ScrambleAnchor";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <header className="flex flex-wrap gap-x-6 text-slate-200">
      <ScrambleAnchor
        text="[ethhix.dev]"
        to="/"
        className={`transition duration-500 ${
          currentPage === "/"
            ? "bg-slate-200 text-black"
            : "hover:bg-slate-200 hover:text-black"
        }`}
      />
      <ScrambleAnchor
        text="[experience]"
        to="/experience"
        className={`transition duration-500 ${
          currentPage === "/experience"
            ? "bg-slate-200 text-black"
            : "hover:bg-slate-200 hover:text-black"
        }`}
      />
      <ScrambleAnchor
        text="[projects]"
        to="/projects"
        className={`transition duration-500 ${
          currentPage === "/projects"
            ? "bg-slate-200 text-black"
            : "hover:bg-slate-200 hover:text-black"
        }`}
      />
    </header>
  );
}

export default Header;
